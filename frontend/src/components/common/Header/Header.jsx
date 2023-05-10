import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineHome } from "react-icons/ai";
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineFastfood, MdRestaurantMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { storeLogout } from "@/redux/storeSlice";
import { userLogout } from "@/redux/userSlice";
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
					transition: all 0.2s ease;
				}
			}

			svg {
				color: #000;
				font-size: 1.6rem;
				transition: all 0.2s ease;

				&:hover {
					color: white;
				}
			}
		}
	}
`;

const Name = styled.p`
	background-color: transparent;
	border: none;
	color: black;
	font-size: 0.9rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: white;
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

	p {
		cursor: pointer;
		border-bottom: 1px solid black;
		font-size: 1.2rem;
		margin-bottom: 12px;
		color: #000;
		transition: all 0.2s ease;

		&:hover {
			color: #fff;
		}

		@media screen and (max-width: 520px) {
			font-size: 0.8rem;
		}
	}
`;

export function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const userData = useSelector((state) => state.user);
	const storeData = useSelector((state) => state.store);
	const dispatch = useDispatch();

	const handleShowMenu = () => {
		setShowMenu((preve) => !preve);
	};

	const handleLogout = () => {
		dispatch(userLogout());
		dispatch(storeLogout());
		toast.success("Logout successfully");
	};

	const foodCartItem = useSelector((state) => state.food.cartItem);
	const totalQuantity = foodCartItem.reduce((acc, item) => acc + item.qty, 0);

	return (
		<HeaderContainer>
			<Toaster position="top-center" />
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
						<Link href="/menu">
							<MdRestaurantMenu />
						</Link>
					</li>
					<li>
						<Link href="/cart">
							<div style={{ position: "relative" }}>
								<BsCart4 />
								{totalQuantity < 10 ? <span>{"0" + totalQuantity}</span> : <span>{totalQuantity}</span>}
							</div>
						</Link>
					</li>
					<li onClick={handleShowMenu}>
						{storeData.storeName ? (
							<Name>{storeData.storeName}</Name>
						) : userData.nickName ? (
							<Name>{userData.nickName}</Name>
						) : (
							<BsFillPersonFill />
						)}

						{showMenu && (
							<PersonalContainer>
								{storeData.storeName ? <Link href="/addfood">Add food</Link> : null}

								{storeData.storeName ? (
									<p onClick={handleLogout}>Logout</p>
								) : userData.nickName ? (
									<p onClick={handleLogout}>Logout</p>
								) : (
									<Link href="login">Login</Link>
								)}
							</PersonalContainer>
						)}
					</li>
				</ul>
			</NavContainer>
		</HeaderContainer>
	);
}
