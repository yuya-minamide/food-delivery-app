import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { storeLogin } from "../../redux/storeSlice";
import { userLogin } from "../../redux/userSlice";
import { Container, FormContainer } from "@/styles/pages/login";

const Login = () => {
	const router = useRouter();
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((preve) => {
			return { ...preve, [name]: value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = data;

		if (email && password) {
			const fetchData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/login`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const resData = await fetchData.json();

			toast.success(resData.message);
			if (resData.alert) {
				dispatch(userLogin(resData));
				dispatch(storeLogin(resData));
				setTimeout(() => {
					router.push("/");
				}, 1000);
			}
		} else {
			toast.error("Please enter required fields");
		}
	};

	return (
		<Container>
			<Toaster position="top-center" />
			<FormContainer>
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label>E-mail</label>
						<input type="email" id="email" name="email" value={data.email} onChange={handleOnChange} />
					</div>
					<div>
						<label>Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={data.password}
							onChange={handleOnChange}
							minLength={6}
						/>
					</div>
					<button type="submit">Login</button>
				</form>
				<p>
					Do not have an account? <Link href="/signup">Sign up page</Link>
				</p>
				<p>
					Would you like to be <Link href="/storesignup">seller</Link>?
				</p>
				<p>
					Just visit to <Link href="/">Home page</Link>
				</p>
			</FormContainer>
		</Container>
	);
};

export default Login;
