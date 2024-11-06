import NavMenu from "@/components/header/NavMenu";
import Logo from "@/components/header/Logo";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
    return (
        <header className="">
            <div className="text-center">Vários Calculos</div>
            <div className="flex justify-between items-center px-4 py-1 bg-color-palette1 ">
                <Logo/>
                <div className="flex gap-6">
                    <NavMenu/>
                    <ModeToggle/>
                </div>
            </div>
        </header>
    )
}

export default Header;