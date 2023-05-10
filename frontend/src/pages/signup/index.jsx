import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Container, FormContainer } from "@/styles/pages/signup";

const Signup = () => {
	const router = useRouter();
	const [data, setData] = useState({
		nickName: "",
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
		const { nickName, email, password, confirmPassword } = data;
		if (nickName && email && password && confirmPassword) {
			if (password === confirmPassword) {
				const fetchData = await fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/signup`, {
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
				<h1>Sign up</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label>Nick name</label>
						<input type="text" id="nickName" name="nickName" value={data.nickName} onChange={handleOnChange} />
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
					Would you like to be <Link href="/storesignup">seller</Link>?
				</p>
				<p>
					Just visit to <Link href="/">Home page</Link>
				</p>
			</FormContainer>
		</Container>
	);
};

export default Signup;
