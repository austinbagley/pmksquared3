import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto font-sans font-medium px-4 py-8 content-center flex-col md:flex-row flex items-center md:justify-between">
      <div className="">
        <Image
            src="/images/pmk-squared-mark.png"
            alt={``}
            width={165 * 0.7}
            height={80 * 0.7}
          />
      </div>
      <div className="md:container mx-auto px-8 text-lg text-left">A <strong className="text-blue-500">resource repository</strong> for technical product marketers. </div>

      <div className="flex flex-row space-x-4">
        <p>About</p>
        <p>Connect</p>
      </div>
    </header>
  )
}