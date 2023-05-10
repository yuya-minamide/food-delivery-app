import styled from "styled-components";

export const AmountContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 300px;
	background-color: #bababa2a;
	padding: 0 40px;

	p {
		font-size: 2rem;
		text-align: left;
		border-bottom: solid 1px #000;
		margin-bottom: 10px;

		@media (max-width: 520px) {
			font-size: 1.2rem;
		}
	}

	button {
		font-family: "Lora", serif;
		color: #fff;
		margin-top: 40px;
		padding: 10px 0;
		border-radius: 8px;
		font-weight: bold;
		font-size: 1.2rem;
		background-color: #000;

		&:hover {
			&:hover {
				color: #000;
				background-color: #f59f00;
			}
		}
	}
`;
