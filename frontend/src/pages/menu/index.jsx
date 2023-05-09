import { Footer, Header, MenuContent } from "@/components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataFood } from "@/redux/foodSlice";

const Menu = () => {
	const dispatch = useDispatch();
	const foodData = useSelector((state) => state.food);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/food`);
			const resData = await res.json();
			dispatch(setDataFood(resData));
		})();
	}, []);

	return (
		<>
			<Header />
			<MenuContent foodData={foodData} />
			<Footer />
		</>
	);
};

export default Menu;
