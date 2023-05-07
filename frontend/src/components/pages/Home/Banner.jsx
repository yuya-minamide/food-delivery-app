import styled from "styled-components";

const BannerVideo = styled.video`
	width: 100%;
	height: 100vh;
	object-fit: cover;
`;

const BannerTittleContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: left;
	align-items: center;

	padding-left: 90px;

	@media screen and (max-width: 960px) {
		padding-left: 0;
		justify-content: center;
	}

	h1 {
		font-family: "Kalam", cursive;
		font-weight: bold;
		font-size: 3.6rem;

		@media screen and (max-width: 960px) {
			font-size: 3rem;

			@media screen and (max-width: 520px) {
				font-size: 1.2rem;
			}
		}
	}
`;

export function Banner() {
	return (
		<>
			<BannerVideo autoPlay muted loop>
				<source src="/home-banner.mp4" type="video/mp4" />
			</BannerVideo>
			<BannerTittleContainer>
				<h1>
					Warm and Tasty Food for
					<br /> Surfers Anytime, Anywhere
				</h1>
			</BannerTittleContainer>
		</>
	);
}
