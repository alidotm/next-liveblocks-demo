import { inter } from "@/utils/fonts";
import Header from "./header";
import { Provider } from "jotai";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Provider>
			<div className={inter.className}>
				<Header />
				{children}
			</div>
		</Provider>
	);
};

export default Layout;
