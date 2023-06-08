import { EditList, Loading } from "@/components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataFood } from "@/redux/foodSlice";
import { EditContentContainer, NoFoodContainer } from "@/styles/components/pages/EditList/EditContentStyle";

export function EditContent() {
	const dispatch = useDispatch();
	const foodData = useSelector((state) => state.food.foodList);
	const storeData = useSelector((state) => state.store);
	const storeid = storeData._id;
	const filteredFood = foodData.filter((food) => food.storeid === storeid);

	const [isLoading, setIsLoading] = useState(true);
	const setFoodList = (updatedFoodList) => {
		dispatch(setDataFood(updatedFoodList));
	};

	useEffect(() => {
		setIsLoading(true);
		(async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/editlist`);
			const resData = await response.json();
			dispatch(setDataFood(resData));
			setIsLoading(false);
		})();
	}, []);

	return (
		<EditContentContainer>
			{isLoading ? (
				<Loading />
			) : filteredFood.length === 0 ? (
				<NoFoodContainer>No foods...</NoFoodContainer>
			) : (
				<EditList foodList={filteredFood} setFoodList={setFoodList} />
			)}
		</EditContentContainer>
	);
}
