"use client";
import React from 'react'
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="inline-grid grid-flow-col auto-cols-max gap-x-[60px]">
            <a href="/" className={`text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/" ? "border-b-2 border-[#d3dbc9]" : ""}`}>Home</a>
            <a href="/PhotoGallery" className={`text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/PhotoGallery" ? "border-b-2 border-[#d3dbc9]" : ""}`}>Photo Gallery</a>
            <a href="/RSVP" className={`gap-l-10 text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/RSVP" ? "border-b-2 border-[#d3dbc9]" : ""}`}>RSVP</a>
        </div>
    )
}

export default Navbar