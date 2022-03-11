import cx from "classnames";

export default function Judul({ judul, desc, left }) {
  return (
    <>
      <h2
        className={cx(
          "font-mono text-2xl font-semibold",
          !left ? "text-center" : ""
        )}
      >
        {judul}
      </h2>
      <p
        className={cx(
          "text-gray-500 font-sans text-lg pt-2",
          !left ? "text-center" : ""
        )}
      >
        {desc}
      </p>
    </>
  );
}
