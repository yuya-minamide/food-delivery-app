import { FoodDetail } from "@/components";
import { useRouter } from "next/router";
import { useState } from "react";
import { ButtonContainer, EditListContainer, FoodContainer, FoodImage } from "@/styles/components/pages/EditList/EditList";

export function EditList({ foodList }) {
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

	return (
		<>
			{foodList.map((food, idx) => (
				<EditListContainer key={idx}>
					<FoodContainer>
						<FoodImage src={food.image} width={300} height={300} alt="food-image" />
						<p>{food.name}</p>
						<p>${food.price}</p>
					</FoodContainer>
					<ButtonContainer>
						<button onClick={() => handleFoodClick(food)}>Detail</button>
						{/* <Link href="/edit">Edit</Link> */}
						<button onClick={() => handleEditFood(food)}>Edit</button>
						<button>Delete</button>
					</ButtonContainer>
				</EditListContainer>
			))}
			{selectedFood && <FoodDetail selectedFood={selectedFood} onClose={handleFoodDetailClose} showAddToCartButton={false} />}
		</>
	);
}
