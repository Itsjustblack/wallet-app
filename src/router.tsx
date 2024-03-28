import { createBrowserRouter } from "react-router-dom";
import SignUp from "@pages/SignUp";
import Login from "@pages/Login";
import ForgotPassword from "@pages/ForgotPassword";
import ResetPassword from "@pages/ResetPassword";
import Home from "@pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password",
		element: <ResetPassword />,
	},
]);
