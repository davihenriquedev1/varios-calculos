import { SocialLink } from "@/components/SocialLink"

export const ConectUs = () => {
    return (
        <div className="flex flex-col flex-1 gap-1">
            <h3 className="font-bold mb-4">Connect Us</h3>
            <p className="tracking-wider">contact.dunae.com</p>
            <p className="tracking-widest text-sm">+55 (00) 00000-0000</p>
            <div className="flex gap-3 my-2">
                <SocialLink name='facebook' route="/"/>
                <SocialLink name='x' route="/"/>
                <SocialLink name='linkedin' route="/"/>
                <SocialLink name='instagram' route="/"/>
            </div>
            <p className="tracking-widest text-sm font-semibold opacity-75">dunae.com</p>
        </div>
    )
}