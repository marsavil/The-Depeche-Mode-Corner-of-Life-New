'use client'
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import {  useRouter } from "next/navigation";

export default function Topbar () {
  const router = useRouter();
  

  return(
    <div className="topbar">
      <Link
        href='/'
        className="flex items-center gap-4">
          <Image 
            src= '/assets/logo.png'
            alt="logo"
            width={39}
            height={83}
          />
          <Image 
            src= '/assets/page name.png'
            alt="logo"
            width={185}
            height={60}
          />
        </Link>
        <nav className="text-light-1  max-md:hidden">
          <ul className="grid grid-cols-4 gap-8">
            <li>
              <Link href='/songs'>Songs</Link>
            </li>
            <li>
              <Link href='/news'>News</Link>
            </li>
            <li>
              <Link href='/albums'>Albums</Link>
            </li>
            <li>
              <Link href='/top'>Top Songs</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <UserButton />
        </div>

    </div>
  )
}