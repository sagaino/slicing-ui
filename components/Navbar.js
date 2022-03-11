import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
import { useState } from "react";
import cx from "classnames";

export default function Navbar() {
  const [offcanvas, setOffCanvas] = useState(false);
  return (
    <>
      <div className="flex items-center py-10">
        <div className="w-3/12">
          <Logo />
        </div>
        <div className="w-6/12 hidden md:block">
          <Nav scheme="light" dir="horizontal" />
        </div>
        <div className="w-3/12 text-right hidden md:block">
          <Button href="#contact" variant="outline-yellow">
            Kontak
          </Button>
        </div>
        <div className="w-9/12 md:hidden text-right">
          <img
            src="/menu.svg"
            alt="err"
            className="inline-block"
            onClick={() => setOffCanvas(true)}
          />
        </div>
      </div>
      <div
        className={cx(
          "fixed bg-white z-10 top-0 h-full w-full p-10 transition-all md:hidden",
          offcanvas ? "right-0" : "-right-full"
        )}
      >
        <img
          src="/x.svg"
          alt="img"
          className="absolute w-8 top-8 right-8"
          onClick={() => {
            setOffCanvas(false);
          }}
        />
        <Nav scheme="dark" dir="vertical" />
      </div>
    </>
  );
}
