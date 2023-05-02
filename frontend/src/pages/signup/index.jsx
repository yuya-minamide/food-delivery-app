import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	text-align: center;
	align-items: center;
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

	h1 {
		margin-bottom: 50px;
		color: #000000;
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

const Signup = () => {
	const [data, setData] = useState({
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

	const handleSubmit = (e) => {
		e.preventDefault();
		const { email, password, confirmPassword } = data;
		if (email && password && confirmPassword) {
			if (password === confirmPassword) {
				alert("Successful!!");
			} else {
				alert("Password and confirm password are not equal");
			}
		} else {
			alert("Please enter required fields");
		}
	};

	return (
		<Container>
			<FormContainer>
				<h1>Sign up</h1>
				<form onSubmit={handleSubmit}>
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
					Would you like to be <Link href="/">seller</Link>?
				</p>
				<p>
					Just visit to <Link href="/">Home page</Link>
				</p>
			</FormContainer>
		</Container>
	);
};

export default Signup;
