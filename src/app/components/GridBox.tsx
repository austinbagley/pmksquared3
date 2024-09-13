import Image from "next/image"

export default function GridBox() {
  return (
    
    <div className="flex-auto flex flex-col gap-4 items-center sm:items-start p-4">
          <h3 className="text-2xl text-blue-800 font-semibold ">
            This is a title.
          </h3>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-1 hover:bg-[#383838] dark:hover:bg-[#ccc] text-xs sm:text-sm h-8 sm:h-8 px-4 sm:px-3"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Read more
            </a>
            
          </div>
        </div>
    
  )
}