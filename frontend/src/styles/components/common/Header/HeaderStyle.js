import styled from "styled-components";

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	border-bottom: solid 1px #b7b7b7;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: "Kalam", cursive;

	svg {
		margin-right: 6px;
	}

	@media screen and (max-width: 520px) {
		div {
			font-size: 0.7rem;
		}
	}
`;

export const NavContainer = styled.div`
	ul {
		list-style: none;
		display: flex;
		align-items: center;

		li {
			margin-right: 18px;

			&:last-child {
				margin-right: 0;
			}

			@media screen and (max-width: 520px) {
				margin-right: 6px;
			}

			a {
				display: flex;
				align-items: center;
				color: black;
				transition: all 0.2s ease;

				&:hover {
					color: #f59f00;
				}

				span {
					position: absolute;
					top: 0px;
					right: 6px;
					background-color: #f59f00;
					color: white;
					border-radius: 50%;
					padding: 5px;
					font-size: 0.6rem;
					font-weight: bold;
					transform: translate(50%, -50%);
				}

				svg {
					margin-right: 12px;
					font-size: 1.6rem;
					transition: all 0.2s ease;
				}
			}

			svg {
				color: #000;
				font-size: 1.6rem;
				transition: all 0.2s ease;

				&:hover {
					color: #f59f00;
				}
			}
		}
	}
`;

export const Name = styled.p`
	background-color: transparent;
	border: none;
	color: black;
	font-size: 0.9rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: #f59f00;
	}
`;

export const PersonalContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: #fff;
	top: 70px;
	right: 0;
	padding: 20px 60px 6px 16px;

	a {
		border-bottom: 1px solid black;
		font-size: 1.2rem;
		margin-bottom: 12px;

		@media screen and (max-width: 520px) {
			font-size: 0.8rem;
		}
	}

	p {
		cursor: pointer;
		border-bottom: 1px solid black;
		font-size: 1.2rem;
		margin-bottom: 12px;
		color: #000;
		transition: all 0.2s ease;

		&:hover {
			color: #f59f00;
		}

		@media screen and (max-width: 520px) {
			font-size: 0.8rem;
		}
	}
`;
