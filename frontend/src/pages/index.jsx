import { Banner, Footer, Header, Loading, SelectFood } from "../components";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataFood } from "../redux/foodSlice";

export default function Home() {
	const dispatch = useDispatch();
	const foodData = useSelector((state) => state.food);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/food`);
			const resData = await response.json();
			dispatch(setDataFood(resData));
			setIsLoading(false);
		})();
	}, []);

	return (
		<>
			<Head>
				<title>Food delivery app</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<Header />
			<Banner />
			{isLoading ? <Loading /> : <SelectFood foodData={foodData} />}
			<Footer />
		</>
	);
}
