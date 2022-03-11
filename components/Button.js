import cx from "classnames";

export default function Button({ className, children, variant, kotak, href }) {
  const variants = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    yellow: `bg-yellow-500 hover:bg-yellow-600 text-black`,
    black: `bg-black hover:bg-opacity-80 text-white`,
  };
  const pickedVariant = variants[variant];
  return (
    <a
      href={href}
      className={cx(
        "transition py-2 px-9 font-semibold text-lg inline-block",
        !kotak ? " rounded-full" : "",
        className,
        pickedVariant
      )}
    >
      {children}
    </a>
  );
}
