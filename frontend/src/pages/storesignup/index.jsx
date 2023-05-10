import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	text-align: center;
	align-items: center;
`;

const FormContainer = styled.div`
	background-color: #bababa2a;
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

	h1 {
		margin-bottom: 50px;
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

		input {
			padding: 8px 12px;
			border: solid 1px #808080;
			border-radius: 6px;
		}
	}

	button {
		font-family: "Lora", serif;
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
			color: #000;
			background-color: #f59f00;
		}
	}

	a {
		text-decoration: underline;
		color: #f59f00;
	}
`;

const StoreSignup = () => {
	const router = useRouter();
	const [data, setData] = useState({
		storeName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((preve) => {
			return { ...preve, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { storeName, email, password, confirmPassword } = data;
		if (storeName && email && password && confirmPassword) {
			if (password === confirmPassword) {
				const fetchData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storesignup`, {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(data),
				});

				const resData = await fetchData.json();

				toast.success(resData.message);
				if (resData.alert) router.push("/login");
			} else {
				toast.error("Password and confirm password are not equal");
			}
		} else {
			toast.error("Please enter required fields");
		}
	};

	return (
		<Container>
			<Toaster position="top-center" />
			<FormContainer>
				<h1>Store sign up</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Store name</label>
						<input type="text" id="storeName" name="storeName" value={data.storeName} onChange={handleOnChange} />
					</div>
					<div>
						<label>E-mail</label>
						<input type="email" id="email" name="email" value={data.email} onChange={handleOnChange} />
					</div>
					<div>
						<label>Create password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={data.password}
							onChange={handleOnChange}
							minLength={6}
						/>
					</div>
					<div>
						<label>Confirm password</label>
						<input
							type="password"
							id="confirmPassword"
							name="confirmPassword"
							value={data.confirmPassword}
							onChange={handleOnChange}
							minLength={6}
						/>
					</div>
					<button type="submit">Sign up</button>
				</form>
				<p>
					Already have an account? <Link href="/login">Login page</Link>
				</p>
				<p>
					Would you like to be <Link href="/">user</Link>?
				</p>
				<p>
					Just visit to <Link href="/">Home page</Link>
				</p>
			</FormContainer>
		</Container>
	);
};

export default StoreSignup;
