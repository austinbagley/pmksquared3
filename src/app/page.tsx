import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import GridBox from "@/app/components/GridBox"

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:container mx-auto px-8 pb-8 text-2xl text-center">A <strong>resource repository</strong> for technical product marketers. </div>
      <main className="md:container mx-auto bg-white shadow-2xl rounded-xl">
        <div className="flex sm:flex-row">
          <div className="flex flex-col sm:w-1/5" >
            <div className=" text-blue-950 font-bold text-lg">
              <h3 className="p-8">Categories</h3>
            </div>
            <div className="">
              <ul className="text-xl">
                <li className="px-8 pb-2 hover:bg-slate-500 hover:text-white">Guides</li>
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
            <div className="bg-black flex flex-col-reverse rounded-xl w-full h-96 p-8">
              <h2 className="text-white font-bold text-6xl"> Titles goes here. Lets make it two rows. </h2>
              <p className="text-white font-bold text-xl"> October 24, 2024 </p>
            </div>
           
          </div>
        </div>
        <div className="">
          <div className="p-8">
            <h3 className=" text-blue-950 font-bold text-lg">Top Resources</h3>
            
          </div>  
          <div className="flex flex-row flex-grow flex-wrap p-8 pb-20 gap-4 items-center justify-normal sm:p-10 font-[family-name:var(--font-geist-sans)]">
              <GridBox />
              <GridBox />
              <GridBox />
            
          </div>
       </div>
      </main>         
      <Footer />
    </>
      );
}
