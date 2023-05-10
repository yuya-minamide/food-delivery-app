import Image from "next/image";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCartItem } from "@/redux/foodSlice";
import { Toaster } from "react-hot-toast";

const FoodDetailContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.295);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	overflow: hidden;
`;

const DetailCard = styled.div`
	background-color: #ffffffe2;
	padding: 30px;
	margin: 0 28%;
	border-radius: 8px;
	text-align: center;

	@media (max-width: 960px) {
		margin: 0 10%;

		@media (max-width: 520px) {
			margin: 0;
		}
	}

	h1 {
		text-decoration: underline;
		text-align: center;
		margin-bottom: 20px;
		font-family: "Kalam", cursive;
	}

	h2 {
		margin: 10px 0 6px 0;
	}

	p {
		margin-bottom: 20px;
	}
`;

const FoodImage = styled(Image)`
	height: 150px;
`;

const DetailButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 10px;

	@media (max-width: 520px) {
		flex-direction: column;
	}

	button {
		font-family: "Lora", serif;
		border: solid 1px #fff;
		border-radius: 10px;
		padding: 10px 30px;
		font-size: 1.2rem;
		margin-right: 10px;
	}
`;

const AddCartButton = styled.button`
	color: #000;
	background-color: #faac1a;

	&:hover {
		color: #000;
		background-color: #f59f00;
	}
`;

const BackButton = styled.button`
	color: #fff;
	background-color: #05011e;

	&:hover {
		color: #000;
		background-color: #f59f00;
	}
`;

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
