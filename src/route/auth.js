import { Loginpage } from "../Pages/Loginpage";
import { Register } from "../Pages/Register";
import { PathConstants } from "./pathConstant";

export const authRoutes = [
  {
    path: PathConstants.home.path,
    element: <Loginpage />,
  },
  {
    path: PathConstants.Register.path,
    element: <Register />,
  },
];
