import ForgotPassword from "@pages/ForgotPassword";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Profile from "@pages/Profile";
import ResetPassword from "@pages/ResetPassword";
import SignUp from "@pages/SignUp";
import UpdateProfile from "@pages/UpdateProfile";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";

const App = () => {
	return (
		<>
			<AnimatePresence>
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
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/update-profile"
						element={<UpdateProfile />}
					/>
					<Route
						path="/my-cards"
						element={<Cards />}
					/>
				</Routes>
			</AnimatePresence>
			{/* <HoverNav /> */}
		</>
	);
};

export default App;
