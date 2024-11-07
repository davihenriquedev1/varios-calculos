import { UsefulLinks } from "@/components/footer/UsefulLinks";
import { Brand } from "./Brand";
import { SocialLinks } from "@/components/footer/SocialLinks";

export const Footer = () => {
    return (
        <footer className="flex bg-color-palette4/30 bottom-0 p-6 items-center">
            <SocialLinks/>
            <Brand/>
            <UsefulLinks/>
        </footer>
    )
}