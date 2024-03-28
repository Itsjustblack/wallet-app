import MobileNav from "@components/nav";
import ForgotPassword from "@pages/ForgotPassword";
import Home from "@pages/Home";
import Login from "@pages/Login";
import ResetPassword from "@pages/ResetPassword";
import SignUp from "@pages/SignUp";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<SignUp />}
				/>
				<Route
					path="/forgot-password"
					element={<ForgotPassword />}
				/>
				<Route
					path="/reset-password"
					element={<ResetPassword />}
				/>
			</Routes>
			<MobileNav />
		</>
	);
};

export default App;
