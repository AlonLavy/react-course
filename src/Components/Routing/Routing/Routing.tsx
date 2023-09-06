import { Routes, Route, Navigate } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductArea/ProductList/ProductList";
// import About from "../../AboutArea/About/About";
import Page404 from "../../LayoutArea/Page404/Page404";
import ContactUs from "../../AboutArea/ContactUs/ContactUs";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import EmployeeList from "../../EmployeeArea/EmployeeList/EmployeeList";
import { Suspense, lazy } from "react";
import Spinner from "../../SharedArea/Spinner/Spinner";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";

function Routing(): JSX.Element {
	const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

	return (
		<div className="Routing">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/products" element={<ProductList />} />
				<Route
					path="/About"
					element={
						<Suspense fallback={<Spinner />}>
							<LazyAbout />
						</Suspense>
					}
				/>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="*" element={<Page404 />} />
				<Route path="/products/details/:id" element={<ProductDetails />} />
				<Route path="/products/add" element={<AddProduct />} />
				<Route path="/employees" element={<EmployeeList />} />
				<Route path="/products/edit/:id" element={<EditProduct />} />
			</Routes>
		</div>
	);
}

export default Routing;
