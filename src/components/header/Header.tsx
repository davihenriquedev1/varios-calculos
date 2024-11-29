import NavMenu from "@/components/header/NavMenu";
import Logo from "@/components/header/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { SideBar } from "../sidebar/Sidebar";

const Header = () => {
    return (
        <header className="">
            <div className="flex justify-between items-center px-4 py-1 bg-color-palette1/50 ">
                <div className="flex">
                    <SideBar/>
                    <Logo/>
                </div>
                <div className="flex gap-6">
                    <NavMenu/>
                    <ModeToggle/>
                </div>
            </div>
        </header>
    )
}

export default Header;