import { FoodDetail } from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ButtonContainer, EditListContainer, FoodContainer, FoodImage } from "@/styles/components/pages/EditList/EditList";

export function EditList({ foodList, setFoodList }) {
	const router = useRouter();
	const [selectedFood, setSelectedFood] = useState(null);
	const handleFoodClick = (food) => {
		setSelectedFood(food);
	};

	const handleFoodDetailClose = () => {
		setSelectedFood(null);
	};

	const handleEditFood = (food) => {
		router.push({
			pathname: "/edit",
			query: { foodId: food._id },
		});
		console.log(food._id);
	};

	const handleDeleteFood = async (food) => {
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/food/${food._id}`, { method: "DELETE" });
			if (response.ok) {
				const updatedFoodList = foodList.filter((item) => item._id !== food._id);
				setFoodList(updatedFoodList);

				const resData = await response.json();
				resData.message ? toast.success(resData.message) : toast.error(resData.error);
			} else {
				toast.error("Could not delete food");
			}
		} catch (error) {
			console.error("Error deleting food", error);
		}
	};

	return (
		<>
			<Toaster position="top-center" />
			{foodList.map((food, idx) => (
				<EditListContainer key={idx}>
					<FoodContainer>
						<FoodImage src={food.image} width={300} height={300} alt="food-image" />
						<p>{food.name}</p>
						<p>${food.price}</p>
					</FoodContainer>
					<ButtonContainer>
						<button onClick={() => handleFoodClick(food)}>Detail</button>
						<button onClick={() => handleEditFood(food)}>Edit</button>
						<button onClick={() => handleDeleteFood(food)}>Delete</button>
					</ButtonContainer>
				</EditListContainer>
			))}
			{selectedFood && <FoodDetail selectedFood={selectedFood} onClose={handleFoodDetailClose} showAddToCartButton={false} />}
		</>
	);
}
