import { UsefulLinks } from "@/components/footer/UsefulLinks";
import { Brand } from "./Brand";
import { ConectUs } from "@/components/footer/ConectUs";

export const Footer = () => {
    return (
        <footer className="flex bg-color-palette4/30 bottom-0 py-6 px-14 items-center">
            <ConectUs/>
            <Brand/>
            <UsefulLinks/>
        </footer>
    )
}