import { UsefulLinks } from "@/components/footer/UsefulLinks";
import { Brand } from "./Brand";
import { ConectUs } from "@/components/footer/ConectUs";

export const Footer = () => {
    return (
        <footer className="flex bg-color-palette4/30 bottom-0 p-6 items-center">
            <ConectUs/>
            <Brand/>
            <UsefulLinks/>
        </footer>
    )
}