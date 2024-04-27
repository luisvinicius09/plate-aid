import Feature from "./_components/Feature";
import Hero from "./_components/Hero";
import Footer from "./_components/Layout/Footer";
import Header from "./_components/Layout/Header";

export default async function Home() {
  return (
    <main className="custom-bg">
      <Header />

      <Hero />

      <Feature />

      <Feature />

      <Feature />

      <Footer />
    </main>
  );
}
