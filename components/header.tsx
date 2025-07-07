// components/Navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Nuba from "@/public/svgs/uba.svg"
import N from "@/public/svgs/N.svg"
import Image from "next/image"
import { HiBars2 } from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: "For You", href: "/" },
    { label: "Pay Rent", href: "/pay-rent" },
    { label: "Neighbourhood", href: "/neighbourhood" },
    { label: "Rewards", href: "/tips" },
    { label: "FAQs", href: "/faq" },
  ]

  return (
    <nav className="bg-[#020A13] backdrop-blur-sm  top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 🌟 Logo */}

        <Link href="/" className="flex gap-1 items-center">
          <div>
            <Image src={N} alt="header-icon"/>
          </div>
          <div>
            <Image src={Nuba} alt="header-icon"/>
          </div>
        </Link>

        {/* 🔗 Desktop Links */}
        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#fbfbfb] hover:text-white text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* 🔍 Search + Login + Hamburger */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </Link>

          {/* 🍔 Mobile Menu Trigger */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button className="md:hidden p-2 text-white hover:text-gray-200">
                <HiBars2  className="text-3xl"/>
              </button>
            </DialogTrigger>
            <DialogContent className="p-0">
              <div className="space-y-4 bg-[#0A0A18] p-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-white hover:text-gray-300 font-medium text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  className="block text-white hover:text-gray-300 font-medium text-lg"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
}
