import cx from "classnames";

export default function NavItem({ children, href, scheme, onClick }) {
  const schemes = {
    light: "text-white text-opacity-60 hover:text-opacity-100",
    dark: "text-black",
  };
  const pickedScheme = schemes[scheme];
  return (
    <li>
      <a
        href={href}
        className={cx("text-lg font-semibold transition", pickedScheme)}
        onClick={onClick}
      >
        {children}
      </a>
    </li>
  );
}
