import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineFastfood, MdRestaurantMenu } from "react-icons/md";
import styled from "styled-components";

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #c6c6c6a2;
	box-shadow: 0px 15px 10px -5px rgba(255, 255, 255, 0.3);
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 400;

	svg {
		margin-right: 6px;
	}

	@media screen and (max-width: 520px) {
		div {
			font-size: 0.7rem;
		}
	}
`;

const NavContainer = styled.div`
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
					color: white;
				}

				span {
					position: absolute;
					top: 0px;
					right: 6px;
					background-color: red;
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
				}

				p {
					margin-left: 0.5rem;
					color: red;
				}
			}

			button {
				background-color: transparent;
				border: none;
				color: black;
				font-size: 1.6rem;
				cursor: pointer;
				transition: all 0.2s ease;

				&:hover {
					color: white;
				}
			}
		}
	}
`;

const PersonalContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: #c6c6c6a2;
	top: 64px;
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
`;

export function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const handleShowMenu = () => {
		setShowMenu((preve) => !preve);
	};

	return (
		<HeaderContainer>
			<LogoContainer>
				<MdOutlineFastfood />
				<div>Food delivery</div>
			</LogoContainer>
			<NavContainer>
				<ul>
					<li>
						<Link href="/">
							<AiOutlineHome />
						</Link>
					</li>
					<li>
						<Link href="/">
							<MdRestaurantMenu />
						</Link>
					</li>
					<li>
						<Link href="/">
							<div style={{ position: "relative" }}>
								<BsCart4 />
								<span>00</span>
							</div>
						</Link>
					</li>
					<li onClick={handleShowMenu}>
						<button>
							<BsFillPersonFill />
						</button>
						{showMenu && (
							<PersonalContainer>
								<Link href="/">Add food</Link>
								<Link href="login">Login</Link>
							</PersonalContainer>
						)}
					</li>
				</ul>
			</NavContainer>
		</HeaderContainer>
	);
}