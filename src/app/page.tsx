import Feature from "./_components/Feature";
import Hero from "./_components/Hero";
import Footer from "./_components/Layout/Footer";
import Header from "./_components/Layout/Header";

export default async function Home() {
  return (
    <main className="custom-bg">
      <Header />

      <Hero />

      <div id="standard">
        <Feature
          imageSrc="/africa-kids.jpg"
          title="We are here to help you"
          description="Are you starving or do you know someone that is? Send us your request and information"
          moreDescription=""
          buttonText="Send us a request"
          buttonHref="/forms/general"
        />
      </div>

      <div id="organization" className="bg-slate-100 py-4">
        <Feature
          textSide="left"
          imageSrc="/company-hands.png"
          title="Organizations help are welcome"
          description="Are an organization that provides food somehow or knows areas that are starving? Share us information and we will help out with distribution."
          moreDescription=""
          buttonText="Become verified"
          buttonHref="/forms/organizations"
        />
      </div>

      <div id="maintainers">
        <Feature
          imageSrc="/maintainers.jpg"
          title="We need maintainers"
          description="Maintainers come from all walks of life: volunteers, activists, community leaders, and compassionate individuals eager to make a tangible difference."
          moreDescription="Whether you aree a seasoned advocate or someone new to the cause, if you have a heart for helping others, you can be a maintainer."
          buttonText="Send us your information"
          buttonHref="/forms/maintainers"
        />
      </div>

      <Footer />
    </main>
  );
}
