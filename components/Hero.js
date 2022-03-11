import Button from "./Button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-20">
      <div className="container mx-auto px-10 2xl:px-10">
        <Navbar />
        <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
          <h1 className="text-3xl font-semibold font-mono 2xl:w-6/12 text-white xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-white text-opacity-60 font-sans text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-4 leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href="#profile" className="mt-16" variant="yellow">
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
