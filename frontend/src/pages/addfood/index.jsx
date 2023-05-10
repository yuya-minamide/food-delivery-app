import { Footer, Header } from "@/components";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Container, FormContainer, Title } from "@/styles/pages/addfood/";
import { ImagetoBase64 } from "@/utility/ImagetoBase64";

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { restaurantname, name, category, price, image, description } = data;
		if (restaurantname && name && category && price && image && description) {
			const fetchData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/addfood`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const resData = await fetchData.json();
			toast.success(resData.message);

			setData(() => {
				return {
					restaurantname: "",
					name: "",
					category: "",
					price: "",
					image: "",
					description: "",
				};
			});
		} else {
			toast.error("Please enter required fields");
		}
	};

	return (
		<>
			<Header />
			<Toaster position="top-center" />
			<Title>Add food</Title>
			<Container>
				<FormContainer>
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor="restaurantname">Restaurant name</label>
							<input type="text" name="restaurantname" value={data.restaurantname} onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="name">Name</label>
							<input type="text" name="name" value={data.name} onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="category">Category</label>
							<select id="category" name="category" value={data.category} onChange={handleOnChange}>
								<option value="select">Select</option>
								<option value="japanese">Japanese</option>
								<option value="chinese">Chinese</option>
								<option value="indian">Indian</option>
								<option value="american">American</option>
								<option value="mexican">Mexican</option>
								<option value="other">Other</option>
							</select>
						</div>

						<div>
							<label htmlFor="price">Price</label>
							<input type="text" name="price" value={data.price} onChange={handleOnChange} />
						</div>

						<div>
							<label htmlFor="image">
								Image
								<div>
									<input type="file" accept="image/*" id="image" name="image" onChange={uploadImage} />
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
							<textarea rows="2" name="description" value={data.description} onChange={handleOnChange}></textarea>
						</div>

						<button>Save</button>
					</form>
				</FormContainer>
			</Container>
			<Footer />
		</>
	);
};

export default AddFood;
