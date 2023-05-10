import { Provider } from "react-redux";
import { store } from "../redux/store";
import { GlobalStyle } from "../styles/globalStyle";

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<Component {...pageProps} />
		</Provider>
	);
}
