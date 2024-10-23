"use client";

import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import GridBox from "@/app/components/GridBox"
import Image from "next/image"
import { AnimatedDiv } from "@/app/components/AnimatedDiv"

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:container mx-auto bg-white shadow-2xl rounded-xl">
        <div className="flex sm:flex-row">
          <div className="flex flex-col sm:w-1/5" >
            <div className=" text-blue-950 font-bold text-lg">
              <h3 className="p-8">Categories</h3>
            </div>
            <div className="">
              <ul className="text-xl">
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">Guides</li>
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">Templates</li>
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">Articles</li>
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">AI Prompts</li>
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">Nerd Stuff</li>
                <li className="px-8 py-2 hover:bg-slate-500 hover:text-white">Books</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:w-4/5 p-8" >
            <div className=" text-blue-950 font-bold text-lg mb-5">
              <h3>The Latest</h3>
            </div>
            <div className="relative flex flex-col-reverse rounded-xl w-full h-96 p-8 overflow-hidden">
              <Image
                src="/images/prompt-engineering-for-marketers2.webp"
                alt="Background image"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent animate-fadein"></div>
              <h2 className="relative z-10 text-white font-bold text-6xl animate-fadeinleft">Prompt engineering for product marketers </h2>
              <p className="relative z-10 text-white font-bold text-xl animate-fadeinleft"> October 24, 2024 </p>
            </div>
           
          </div>
        </div>
        <div className="">
          <div className="px-8 pb-4">
            <h3 className=" text-blue-950 font-bold text-lg">Top Resources</h3>
            
          </div>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8 pb-20">
              <GridBox title="ROI Calculator" image="/images/factory.webp" description="lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <GridBox />
              <GridBox />
              
            
          </div>
          <AnimatedDiv className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pb-20">
              <GridBox title="ROI Calculator" image="/images/factory.webp" description="lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              <GridBox />
              <GridBox />
              <GridBox />              
            
          </AnimatedDiv>
       </div>
      </main>         
      <Footer />
    </>
      );
}
