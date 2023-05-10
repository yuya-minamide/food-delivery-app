import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineHome } from "react-icons/ai";
import { BsCart4, BsFillPersonFill } from "react-icons/bs";
import { MdOutlineFastfood, MdRestaurantMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { storeLogout } from "@/redux/storeSlice";
import { userLogout } from "@/redux/userSlice";
import { HeaderContainer, LogoContainer, Name, NavContainer, PersonalContainer } from "@/styles/components/common/Header/HeaderStyle";

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
