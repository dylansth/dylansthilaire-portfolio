import Link from 'next/link'

const TopNav = () => {
    return (
        <nav class='flex justify-center gap-6'>
            <h1>
                TopNav
            </h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export default TopNav