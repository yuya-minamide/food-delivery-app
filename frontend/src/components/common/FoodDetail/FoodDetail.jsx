import { useDispatch } from "react-redux";
import { addCartItem } from "@/redux/foodSlice";
import { Toaster } from "react-hot-toast";
import {
	AddCartButton,
	BackButton,
	DetailButtonContainer,
	DetailCard,
	FoodDetailContainer,
	FoodImage,
} from "@/styles/components/common/FoodDetail/FoodDetailStyle";

export function FoodDetail({ selectedFood, onClose }) {
	const dispatch = useDispatch();
	const handleAddCartProduct = (e) => {
		dispatch(
			addCartItem({
				id: selectedFood._id,
				name: selectedFood.name,
				price: selectedFood.price,
				image: selectedFood.image,
			})
		);
	};

	return (
		<FoodDetailContainer>
			<Toaster position="top-center" />
			<DetailCard>
				<h1>Detail</h1>
				<FoodImage src={selectedFood.image} alt={selectedFood.name} width={200} height={200} />
				<h2>{selectedFood.name}</h2>
				<p>${selectedFood.price}</p>
				<p>{selectedFood.restaurantname}</p>
				<p>{selectedFood.description}</p>
				<DetailButtonContainer>
					<AddCartButton onClick={handleAddCartProduct}>Add to cart</AddCartButton>
					<BackButton onClick={onClose}>Go to back</BackButton>
				</DetailButtonContainer>
			</DetailCard>
		</FoodDetailContainer>
	);
}
