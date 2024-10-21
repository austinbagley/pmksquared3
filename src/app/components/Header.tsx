import Image from "next/image";

export default function Header() {
  return (
    <header className="container mx-auto font-sans font-medium p-4 content-center flex-col md:flex-row flex items-center md:justify-between">
      <div className="">
        <Image
            src="/images/pmk-squared-mark.png"
            alt={``}
            width={165}
            height={80}
          />
      </div>
      <div className="flex flex-row space-x-4">
        <p>About</p>
        <p>Connect</p>
      </div>
    </header>
  )
}