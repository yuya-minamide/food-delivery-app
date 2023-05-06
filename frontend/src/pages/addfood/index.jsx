import { Header } from "@/components";
import { AiOutlineCloudUpload } from "react-icons/ai";
import styled from "styled-components";

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

			svg {
				font-size: 1.6rem;
				color: #808080;
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
	return (
		<>
			<Header />
			<Title>Add food</Title>
			<Container>
				<FormContainer>
					<form>
						<div>
							<label htmlFor="restaurantName">Restaurant name</label>
							<input type="text" name="restaurantName" />
						</div>

						<div>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" />
						</div>

						<div>
							<label htmlFor="category">Category</label>
							<select id="category">
								<option value="">Japanese</option>
								<option value="">Chinese</option>
								<option value="">Indian chicken</option>
								<option value="">American noodle</option>
								<option value="">Mexican</option>
								<option value="">Other</option>
							</select>
						</div>

						<div>
							<label htmlFor="price">Price</label>
							<input type="text" />
						</div>

						<div>
							<label htmlFor="image">Image</label>
							<div id="image">
								<span>
									<AiOutlineCloudUpload />
								</span>
							</div>
						</div>

						<div>
							<label htmlFor="description">Description</label>
							<textarea rows="2"></textarea>
						</div>

						<button>Save</button>
					</form>
				</FormContainer>
			</Container>
		</>
	);
};

export default AddFood;
