import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />{/* foe children render in parent node */}
            <Footer />
        </>
    )
}