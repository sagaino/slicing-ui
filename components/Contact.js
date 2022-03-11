import Judul from "./Judul";
import ContactItem from "./ContactItem";
import Field from "../components/Field";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="container mx-auto pt-28 px-10 2xl:px-10" id="contact">
      <div className="bg-gray-100 flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-gray-300">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <Judul
              left
              judul="Contact"
              desc="Beberapa cara menghubungi saya."
            />
            <div className="mt-10">
              <ContactItem
                label="Mail"
                icon="/mail.svg"
                value="sagaino18@gmail.com"
              />
            </div>
            <div className="mt-6">
              <ContactItem
                label="Phone"
                icon="/phone.svg"
                value="081293043281"
              />
            </div>
            <div className="mt-6">
              <ContactItem label="Twitter" icon="/twitter.svg" value="ino" />
            </div>
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="lg:py-16 lg:px-20 md:p-14 p-10">
            <div className="flex flex-wrap -mx-4">
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Name" name="Name" type="text" />
              </div>
              <div className="lg:w-6/12 w-full px-4">
                <Field label="Email" name="Email" type="text" />
              </div>
            </div>
            <Field label="Subject" name="Subject" type="text" />
            <Field
              label="Message"
              name="Message"
              type="textarea"
              className="h-40"
            />
            <div className="text-right">
              <Button kotak variant="black">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
