import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from "date-fns"
import { Post } from 'contentlayer/generated'



export default function GridBox(post: Post) {
  return (
    <>
      <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
        <div className="flex-auto flex flex-col gap-4 items-center sm:items-start">
          <div className="relative w-full h-20 md:h-32 lg:h-52 bg-gray-200 rounded-lg"> 
            <Image
              src="/images/factory.webp"
              alt={`Image for ${post.title}`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-2xl text-space-cadet font-semibold">
            {post.title}
          </h3>
          <div className="text-sm text-center sm:text-left">
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </div>
        </div>
      </Link>
    </>
  )
}
