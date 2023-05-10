import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const MenuContainer = styled.div`
	padding-top: 120px;
	text-align: center;
`;

export const MenuTittle = styled.h1`
	text-decoration: underline;
	text-align: center;
	margin-bottom: 40px;
	font-family: "Kalam", cursive;
`;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;

	@media (max-width: 960px) {
		padding: 0 20px;
	}
`;

export const SearchIcon = styled(BsSearch)`
	font-size: 1.5rem;
	margin-right: 10px;
`;

export const SearchInput = styled.input`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
	max-width: 400px;
	font-size: 1rem;
	color: #666;
`;

export const NoFoodMessage = styled.div`
	margin-top: 30px;
	font-size: 1.2rem;
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(props) => (props.noItemsLessThanFour ? "center" : "space-between")};
	padding: 30px 40px;
	gap: 20px;

	@media (max-width: 960px) {
		justify-content: center;

		@media (max-width: 520px) {
			padding: 20px;
		}
	}
`;

export const CardContainer = styled.div`
	flex: 0 1 calc(24% - 10px);
	margin-bottom: 20px;

	@media (max-width: 960px) {
		flex: 0 1 calc(48% - 10px);

		@media (max-width: 520px) {
			flex: 0 1 95%;
		}
	}
`;
