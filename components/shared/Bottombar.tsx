'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Bottombar () {
  const pathname = usePathname();
  const router = useRouter();
  return(
    <section className="bottombar">
      <nav className="bottombar_container">
          <Link
            href="/songs"
            className={`bottombar_link ${
              pathname === "/songs" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/sound.svg"
              alt="Canciones"
              width={28}
              height={28}
            />
            <p className="text-subtle.medium text-light-1 max-sm:hidden">Canciones</p>
          </Link>

          <Link
            href="/news"
            className={`bottombar_link ${
              pathname === "/news" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/news.svg"
              alt="Noticias"
              width={28}
              height={28}
            />
            <p className="text-subtle.medium text-light-1 max-sm:hidden">Noticias</p>
          </Link>

          <Link
            href="/albums"
            className={`bottombar_link ${
              pathname === "/albums" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/album.svg"
              alt="Álbumes"
              width={28}
              height={28}
            />
            <p className="text-subtle.medium text-light-1 max-sm:hidden">Álbumes</p>
          </Link>
          <Link
            href="/top"
            className={`bottombar_link ${
              pathname === "/top" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/top.svg"
              alt="Top"
              width={28}
              height={28}
            />
            <p className="text-subtle.medium text-light-1 max-sm:hidden">Top</p>
          </Link>
          <Link
            href="/profile"
            className={`bottombar_link ${
              pathname === "/profile" && "bg-primary-500"
            }`}
          >
            <Image
              src="/assets/user.svg"
              alt="Top"
              width={28}
              height={28}
            />
            <p className="text-subtle.medium text-light-1 max-sm:hidden">Perfil</p>
          </Link>
      </nav>
    </section>
  )
}