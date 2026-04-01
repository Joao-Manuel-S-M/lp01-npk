const CTAButton = () => {
	return (
		<div className="flex justify-center px-4 py-3">
			<a
				href="https://npk-natural.vercel.app/"
				target="_blank"
				rel="noopener noreferrer"
				className="animate-cta-pulse inline-block rounded-[15px] bg-cta-gold px-6 py-3 text-xl text-foreground font-normal tracking-wider shadow-md transition-colors hover:bg-cta-gold-hover"
				style={{
					boxShadow: "0px 4px 8px 1px rgba(62,62,62,0.75)",
				}}
			>
				Comprar agora
			</a>
		</div>
	);
};

export default CTAButton;
