import Judul from "../components/Judul";
import DetailSkill from "../components/DetailSkill";

export default function Skill() {
  return (
    <section className="bg-gray-100 py-32" id="skill">
      <div className="container mx-auto px-10 2xl:px-10">
        <Judul judul="Skills" desc="Beberapa kemampuan saya." />
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="JavaScript"
              level="Lanjutan"
              img="/javascript.svg"
              imgClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="React JS"
              level="Mengengah"
              img="/react.svg"
              imgClassName="h-16 "
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="Node JS"
              level="Lanjutan"
              img="/nodejs-icon.svg"
              imgClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="JavaScript"
              level="Lanjutan"
              img="/javascript.svg"
              imgClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="React JS"
              level="Mengengah"
              img="/react.svg"
              imgClassName="h-16 "
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="Node JS"
              level="Lanjutan"
              img="/nodejs-icon.svg"
              imgClassName="h-16"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="JavaScript"
              level="Lanjutan"
              img="/javascript.svg"
              imgClassName="h-16 rounded-full"
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="React JS"
              level="Mengengah"
              img="/react.svg"
              imgClassName="h-16 "
            />
          </div>
          <div className="md:w-4/12 w-full px-4 pb-8">
            <DetailSkill
              name="Node JS"
              level="Lanjutan"
              img="/nodejs-icon.svg"
              imgClassName="h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
