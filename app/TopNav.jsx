import Link from 'next/link'

const TopNav = () => {
    return (
        <nav class='z-50 flex justify-center gap-6'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export default TopNav