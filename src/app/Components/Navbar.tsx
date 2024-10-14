"use client";
import React from 'react'
import { usePathname } from "next/navigation"
import Image from 'next/image';
import CountingDate from './CountingDate';
import { Playfair_Display } from 'next/font/google';

const inter = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
})


const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="text-center m-8">
            <div className="text-center m-8">
                <div className="flex place-content-center ">
                    <Image src="https://static.theknot.com/guest-flourish/lockup/initials?firstName=Tony&fianceFirstName=Audrie&themeId=1996" alt=".." width={190} height={190} />
                </div>
                <div className="m-8">
                    {/* <h1 className={`text-6xl`}>Tony & Audrie</h1> */}
                    <h1 className={`text-6xl ${inter.className}`}>Tony & Audrie</h1>
                    <div className="text-2xl m-6">
                        <p>SATURDAY, MAY 17, 2025 • JAKARTA, INDONESIA</p>
                        <p><CountingDate /></p>
                    </div>
                </div>
            </div>
            

            <div className="inline-grid grid-flow-col auto-cols-max gap-x-[60px]">
                <a href="/" className={`text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/" ? "border-b-2 border-[#d3dbc9]" : ""}`}>Home</a>
                <a href="/PhotoGallery" className={`text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/PhotoGallery" ? "border-b-2 border-[#d3dbc9]" : ""}`}>Photo Gallery</a>
                <a href="/RSVP" className={`gap-l-10 text-lg hover:border-b-2 hover:border-[#d3dbc9] ${pathname==="/RSVP" ? "border-b-2 border-[#d3dbc9]" : ""}`}>RSVP</a>
            </div>
        </div>
    )
}

export default Navbar