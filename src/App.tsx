//Packages
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './components/layout/homeLayout';
import HomePage from './pages/home/HomePage';
import MainLayout from './components/layout/mainLayout';
import DashboardPage from './pages/dashboard/DashboardPage';

//Layouts
// import { MainLayout } from "./components/layouts/MainLayout";

//Pages
// import Home from "./pages/home/Home";
// import NotFound from "./pages/error/NotFound";

//Login Pages
// import CreateAccount from "./pages/login/CreateAccount";
// import UserLogin from "./pages/login/UserLogin";
// import ForgotPassword from "./pages/login/ForgotPassword";
// import UserDashboard from "./pages/user/UserDashboard";
// import Protected from "./pages/user/Protected";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />}>
                <Route path="/" index element={<HomePage />} />
            </Route>
            <Route path="/dashboard" element={<MainLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
            {/* <Route path="/login" element={<UserLogin />} /> */}
            {/* <Route path="/register" element={<CreateAccount />} /> */}
            {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
            {/* <Route element={<Protected />}>
                    <Route path="/account" element={<UserDashboard />} />
                <Route path="*" element={<NotFound />} /> */}
            {/* </Route> */}
        </Routes>
    );
};

export default App;
