import Judul from "./Judul";
import DetailProject from "./DetailProject";

export default function Project() {
  return (
    <section className="py-32" id="project">
      <div className="container mx-auto px-10 2xl:px-10">
        <Judul judul="Projects" desc="Beberapa proyek bikinan saya." />
        <div className="mt-10 flex -mx-4 flex-wrap">
          <div className="px-4 md:w-6/12 w-full">
            <DetailProject
              img="/image 5.png"
              judul="Hasten"
              desc="Explorasi landing page"
            />
          </div>
          <div className="px-4 md:w-6/12 w-full">
            <DetailProject
              img="/image 6.png"
              judul="Resources"
              desc="Explorasi landing page"
            />
          </div>
          <div className="px-4 md:w-6/12 w-full">
            <DetailProject
              img="/image 6.png"
              judul="Hasten"
              desc="Explorasi landing page"
            />
          </div>
          <div className="px-4 md:w-6/12 w-full">
            <DetailProject
              img="/image 5.png"
              judul="Hasten"
              desc="Explorasi landing page"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
