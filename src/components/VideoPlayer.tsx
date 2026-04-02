import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import { Volume2 } from "lucide-react";

const VideoPlayer = () => {
	const iframeRef = useRef<HTMLIFrameElement | null>(null);
	const playerRef = useRef<Player | null>(null);
	const [showActivateSoundButton, setShowActivateSoundButton] = useState(true);

	const activateSound = () => {
		const player = playerRef.current;

		if (!player) {
			return;
		}

		void player.setMuted(false).catch(() => undefined);
		void player.setVolume(1).catch(() => undefined);
		void player.play().catch(() => undefined);
		setShowActivateSoundButton(false);
	};

	useEffect(() => {
		if (!iframeRef.current) {
			return;
		}

		const player = new Player(iframeRef.current);
		playerRef.current = player;

		const enforcePlay = () => {
			void player.play().catch(() => undefined);
		};

		// Garante autoplay mudo no carregamento, que é permitido no mobile.
		void player
			.ready()
			.then(async () => {
				await player.setMuted(true);
				await player.setVolume(0);
				await player.play();
			})
			.catch(() => undefined);

		// Bloqueia pausa manual para manter reprodução contínua.
		player.on("pause", enforcePlay);

		return () => {
			player.off("pause", enforcePlay);
			void player.destroy().catch(() => undefined);
		};
	}, []);

	return (
		<div className="relative w-full max-w-[400px] mx-auto">
			<div className="relative bg-black pt-[178.22%]">
				<iframe
					ref={iframeRef}
					src="https://player.vimeo.com/video/1179604624?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&keyboard=0&playsinline=1"
					className="absolute top-0 left-0 w-full h-full"
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					title="NPK_Natrual"
				/>
				{showActivateSoundButton && (
					<button
						type="button"
						onClick={activateSound}
						className="absolute left-1/2 top-1/2 z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-3 rounded-2xl border border-white/40 bg-black/45 text-center text-white shadow-2xl backdrop-blur-sm transition hover:bg-black/55"
					>
						<Volume2 className="h-10 w-10" aria-hidden="true" />
						<span className="text-xl font-extrabold tracking-wide">ATIVAR SOM</span>
					</button>
				)}
				<div className="absolute inset-0 z-10" aria-hidden="true" />
			</div>
		</div>
	);
};

export default VideoPlayer;
