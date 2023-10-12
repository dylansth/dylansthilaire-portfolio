"use client"
import Link from 'next/link'

import { AiOutlineHome } from 'react-icons/ai'
import { GoPerson } from 'react-icons/go'
import { AiOutlineCode } from 'react-icons/ai'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { BsSend } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'

import { useState } from 'react';

const TopNav = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav class='z-50 bg-blue-200'>
            <div class='flex justify-between items-center'>
                <div>
                    <Link href="/">Dylan S.</Link>
                </div>
                <div class='hidden sm:flex'>
                    <div>
                        <Link href="/"><AiOutlineHome />Home</Link>
                    </div>
                    <div>
                        <Link href="/about"><GoPerson />About</Link>
                    </div>
                    <div>
                        <Link href="/projects"><AiOutlineCode />Projects</Link>
                    </div>
                    <div>
                        <Link href="/resume"><IoDocumentTextOutline />Resume</Link>
                    </div>
                    <div>
                        <Link href="/contact"><BsSend />Contact</Link>
                    </div>
                </div>
                <div onClick={handleNav} class='sm:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div class={
                menuOpen
                    ? 'fixed left-0 top-0 w-[80%] sm:hidden h-screen bg-slate-200 p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in w-[80%] h-screen duration-500'
            }>
                <div class='flex w-full items-center justify-end'>
                    <div onClick={handleNav}>
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div>
                    <ul>
                        <Link href="/">
                            <li onClick={() =>setMenuOpen(false)} class='flex items-center'>
                                <AiOutlineHome/>Home
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() =>setMenuOpen(false)} class='flex items-center'>
                            <GoPerson />About
                            </li>
                        </Link>
                        <Link href="/projects">
                            <li onClick={() =>setMenuOpen(false)} class='flex items-center'>
                            <AiOutlineCode />Projects
                            </li>
                        </Link>
                        <Link href="/resume">
                            <li onClick={() =>setMenuOpen(false)} class='flex items-center'>
                            <IoDocumentTextOutline />Resume
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li onClick={() =>setMenuOpen(false)} class='flex items-center'>
                            <BsSend />Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <div class='flex flex-row justify-around'>
                    <AiOutlineLinkedin size={30}/>
                    <AiOutlineGithub size={30}/>
                </div>
            </div>
        </nav>
    )
}

export default TopNav