import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container mx-auto font-sans font-medium px-4 py-8 content-center flex-col md:flex-row flex items-center md:justify-between">
      <Link href="/">
        <div className="">
          <Image
              src="/images/pmk-squared-mark.png"
            alt={``}
            width={165 * 0.7}
            height={80 * 0.7}
          />
        </div>
      </Link> 
      <div className="md:container mx-auto px-8 text-lg text-left">An <strong className="text-prussian-blue">open-source resource repository</strong> for technical product marketers. </div>

      <div className="flex flex-row space-x-4">
        <Link href="/about">About</Link>
        <Link href="/connect">Connect</Link>
      </div>
    </header>
  )
}