import { BannerTittleContainer, BannerVideo } from "@/styles/components/pages/Home/BannerStyle";

export function Banner() {
	return (
		<>
			<BannerVideo autoPlay muted loop>
				<source src="/home-banner.mp4" type="video/mp4" />
			</BannerVideo>
			<BannerTittleContainer>
				<h1>
					Warm and Tasty <span>Food</span> for
					<br /> <span>Surfers</span> Anytime, Anywhere
				</h1>
			</BannerTittleContainer>
		</>
	);
}
