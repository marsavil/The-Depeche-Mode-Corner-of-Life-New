"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="topbar" >
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={39} height={83} />
        <Image src="/assets/page name.png" priority alt="logo" width={185} height={60} />
      </Link>
      <nav className="grid grid-cols-5 justify-between max-md:hidden">
          <Link
            href="/songs"
            className={`leftsidebar_link ${
              pathname === "/songs" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/sound.svg"
              alt="Canciones"
              width={28}
              height={28}
            />
            <p className="text-light-1 ">Canciones</p>
          </Link>

          <Link
            href="/news"
            className={`leftsidebar_link ${
              pathname === "/news" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/news.svg"
              alt="Noticias"
              width={28}
              height={28}
            />
            <p className="text-light-1 ">Noticias</p>
          </Link>

          <Link
            href="/albums"
            className={`leftsidebar_link ${
              pathname === "/albums" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/album.svg"
              alt="Álbumes"
              width={28}
              height={28}
            />
            <p className="text-light-1 ">Álbumes</p>
          </Link>
          <Link
            href="/top"
            className={`leftsidebar_link ${
              pathname === "/top" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/top.svg"
              alt="Top"
              width={28}
              height={28}
            />
            <p className="text-light-1 ">Top</p>
          </Link>
          <Link
            href="/profile"
            className={`leftsidebar_link ${
              pathname === "/profile" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/user.svg"
              alt="Top"
              width={28}
              height={28}
            />
            <p className="text-light-1 ">Perfil</p>
          </Link>
      </nav>
      <div className="flex items-center gap-5">
        <UserButton />
      </div>
    </div>
  );
}
