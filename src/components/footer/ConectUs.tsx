import { SocialLink } from "@/components/SocialLink";

export const ConectUs = () => {
    return (
        <div className="flex flex-col flex-1 gap-1">
            <h3 className="font-bold mb-4">Connect Us</h3>
            <p className="tracking-wider text-xs opacity-80">contact.[empresa].com</p>
            <p className="tracking-widest text-xs opacity-80">+55 (00) 00000-0000</p>
            <div className="flex flex-col my-2 gap-2">
                <div className="flex gap-3">
                    <SocialLink name='facebook' route="/"/>
                    <SocialLink name='x' route="/"/>
                    <SocialLink name='linkedin' route="/"/>
                    <SocialLink name='instagram' route="/"/>
                </div>
                <p className="italic text-[9px] opacity-50">
                images by <a href="https://www.pngwing.com/">Pngwing</a> and <a href="https://www.iconsdb.com/">IconsDB</a>
            </p>
            </div>
            <p className="tracking-widest text-sm font-semibold opacity-70">[empresa].com</p>
        </div>
    )
}