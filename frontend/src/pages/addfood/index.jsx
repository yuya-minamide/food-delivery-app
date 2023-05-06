import { Header } from "@/components";
import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import styled from "styled-components";
import { ImagetoBase64 } from "@/utility/ImagetoBase64";

const Title = styled.h1`
	padding: 100px 0 30px 0;
	text-align: center;
	text-decoration: underline;
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	color: #000000;
`;

const FormContainer = styled.div`
	background-color: #f2f0eaed;
	border: 1px solid #808080;
	border-radius: 10px;
	padding: 40px 100px;
	margin: 0 auto;
	width: 600px;

	@media screen and (max-width: 520px) {
		padding: 80px 20px 0 20px;
		width: 100%;
		height: 100vh;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;

		label {
			text-align: left;
			margin-bottom: 10px;
			font-weight: bold;
		}

		input,
		select,
		textarea {
			padding: 8px 12px;
			border: solid 1px #808080;
			border-radius: 6px;
		}

		select,
		div {
			cursor: pointer;
		}

		div {
			border: solid 1px #808080;
			background-color: #d5d5d5;
			border-radius: 6px;
			padding: 30px 60px;
			text-align: center;
			margin-top: 10px;

			svg {
				font-size: 1.6rem;
				color: #808080;
			}

			input {
				opacity: 0;
				cursor: pointer;
			}
		}
	}

	button {
		cursor: pointer;
		background-color: #000000;
		color: #ffffff;
		border: none;
		display: block;
		width: 40%;
		padding: 12px 20px;
		margin: 40px auto 40px auto;
		border-radius: 10px;
		font-size: 1.2rem;

		&:hover {
			opacity: 0.7;
		}
	}

	a {
		color: red;
	}
`;

const AddFood = () => {
	const [data, setData] = useState({
		restaurantname: "",
		name: "",
		category: "",
		price: "",
		image: "",
		description: "",
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setData((preve) => {
			return {
				...preve,
				[name]: value,
			};
		});
	};

	const uploadImage = async (e) => {
		const data = await ImagetoBase64(e.target.files[0]);

		setData((preve) => {
			return {
				...preve,
				image: data,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<>
			<Header />
			<Title>Add food</Title>
			<Container>
				<FormContainer>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="restaurantname">Restaurant name</label>
							<input type="text" name="restaurantname" onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="category">Category</label>
							<select id="category" name="category" onChange={handleOnChange}>
								<option value="select">Select</option>
								<option value="japanese">Japanese</option>
								<option value="chinese">Chinese</option>
								<option value="indian">Indian chicken</option>
								<option value="american">American noodle</option>
								<option value="mexican">Mexican</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div>
							<label htmlFor="price">Price</label>
							<input type="text" name="price" onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="image">
								Image
								<div>
									<input type="file" id="image" name="image" onChange={uploadImage} />
									{data.image ? (
										<img src={data.image} />
									) : (
										<span>
											<AiOutlineCloudUpload />
										</span>
									)}
								</div>
							</label>
						</div>

						<div>
							<label htmlFor="description">Description</label>
							<textarea rows="2" name="description" onChange={handleOnChange}></textarea>
						</div>

						<button>Save</button>
					</form>
				</FormContainer>
			</Container>
		</>
	);
};

export default AddFood;
