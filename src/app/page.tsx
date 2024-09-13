import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import GridBox from "@/app/components/GridBox"

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto flex flex-col sm:flex-row bg-white shadow-xl">
       <aside className="sm:w-1/4 p-4 bg-green-500">
        <p>
          This is an aside
        </p>
       </aside>
       <div className="sm:w-3/4">
        <div className="flex flex-row flex-grow flex-wrap p-8 pb-20 gap-4 items-center justify-normal sm:p-10 font-[family-name:var(--font-geist-sans)] bg-purple-700">
              <GridBox />
              <GridBox />
              <GridBox />
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
