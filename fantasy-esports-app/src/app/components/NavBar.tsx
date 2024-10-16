import Link from "next/link"
import React from "react"

export default function NavBar() {
    return (
        <nav className="flex p-4 gap-4">
            <Link href="/signin">Sign In</Link>
            <Link href="/register">Register</Link>
            <Link href="/profile">Profile</Link>
        </nav>
    )
}