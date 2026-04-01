const VideoPlayer = () => {
	return (
		<div className="relative w-full max-w-[400px] mx-auto">
			<div className="relative bg-black pt-[178.22%]">
				<iframe
					src="https://player.vimeo.com/video/1176758204?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0&controls=0"
					className="absolute top-0 left-0 w-full h-full"
					frameBorder="0"
					allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					title="NPK Natrual"
				/>
				<div className="absolute inset-0 z-10" aria-hidden="true" />
			</div>
		</div>
	);
};

export default VideoPlayer;
