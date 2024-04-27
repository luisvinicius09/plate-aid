import Feature from "./_components/Feature";
import Hero from "./_components/Hero";
import Footer from "./_components/Layout/Footer";
import Header from "./_components/Layout/Header";

export default async function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    //   <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
    //     <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
    //       Plate <span className="text-[hsl(280,100%,70%)]">Aid</span>
    //     </h1>
    //   </div>
    // </main>

    <main>
      <Header />

      <Hero />

      <Feature />

      <Feature />

      <Feature />

      <Footer />
    </main>
  );
}
