"use client"

import { NavLink } from "@/components/NavLink";

export const UsefulLinks = () => {
    return (
        <div className="flex flex-col flex-1 items-end">
            <h3 className="font-bold mb-4">Useful Links</h3>
            <nav>
                <ul className="flex flex-col gap-1 items-end">
                    <NavLink route="/about" text="About"/>
                    <NavLink route="/contact" text="Contact"/>
                    <NavLink route="/faq" text="FAQ"/>
                    <NavLink route="/privacy" text="Privacy Policy"/>
                    <NavLink route="/terms" text="Terms"/>
                </ul>
            </nav>
        </div>
    )
}