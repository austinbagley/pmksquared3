import Image from "next/image"

interface GridBoxProps {
  title?: string;
  image?: string;
  description?: string;
}

export default function GridBox({ 
  title = "Title", 
  image = "/images/yuvraj-singh-parmar-iWo3MQqusO0-unsplash.jpg", 
  description = "Description" 
}: GridBoxProps) {
  return (
    <div className="flex-auto flex flex-col gap-4 items-center sm:items-start">
      <div className="relative w-full h-20 md:h-32 lg:h-52 bg-gray-200 rounded-lg"> 
        <Image
          src={image}
          alt={`Image for ${title}`}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h3 className="text-2xl text-space-cadet font-semibold">
        {title}
      </h3>
      <div className="text-sm text-center sm:text-left">
        {description}
      </div>
    </div>
  )
}
