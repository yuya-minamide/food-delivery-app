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
	z-index: 1;

	@media screen and (max-width: 960px) {
		padding-left: 0;
		justify-content: center;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.236);
		z-index: -1;
	}

	h1 {
		font-family: "Kalam", cursive;
		font-weight: bold;
		font-size: 3.6rem;
		color: #fff;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);

		@media screen and (max-width: 960px) {
			font-size: 3rem;

			@media screen and (max-width: 520px) {
				font-size: 1.2rem;
			}
		}

		span {
			color: #f59f00;
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
					Warm and Tasty <span>Food</span> for
					<br /> <span>Surfers</span> Anytime, Anywhere
				</h1>
			</BannerTittleContainer>
		</>
	);
}
