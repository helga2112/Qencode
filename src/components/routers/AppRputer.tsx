import { Route, Routes } from "react-router-dom"
import LoginPage from "@/pages/loginPage/login/LoginPage"
import LoginWithPasswordPage from "@/pages/loginPage/loginWithPassword/LoginWithPasswordPage"
import ResetPasswordPage from "@/pages/loginPage/resetPassword/ResetPasswordPage"
import ForgotPasswordPage from "@/pages/loginPage/forgotPassword/ForgotPasswordPage"
import { ErrorPage } from "@/pages/errorPage/ErrorPage"
import { useAppSelector } from "@/app/hooks"
import HomePage from "@/pages/homePage/HomePage"


export const AppRouter = () => {

    const token = useAppSelector((state) => state.login.token)
    console.log(token)
    return (
        <>
            {(token.length === 0) ?
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginWithPasswordPage />} />
                    <Route path="/reset-password" element={<ResetPasswordPage />} />
                    <Route path="/forget-password" element={<ForgotPasswordPage />} />
                    <Route path="*" element={<ErrorPage errorMessage={"No such page"} />} />
                </Routes> :
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<ErrorPage errorMessage={"No such page"} />} />
                </Routes>
            }
        </>
    )
}