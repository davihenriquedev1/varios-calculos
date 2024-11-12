"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export const SideBar = () => {
    return (
        <Sheet>
            <SheetTrigger className="pr-3 border-r border-white/40"> <MenuIcon /> </SheetTrigger>
            <SheetContent className="w-[170px] sm:w-[300px]" side={"left"}>
                <SheetHeader>
                    <SheetTitle>Calculators</SheetTitle>
                </SheetHeader>
                
            </SheetContent>
        </Sheet>
    )
}
