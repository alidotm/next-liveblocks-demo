import Header from "./header";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
