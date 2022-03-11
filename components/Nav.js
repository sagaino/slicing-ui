import NavItem from "../components/NavItem";
import cx from "classnames";

export default function Nav({ dir, scheme }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };
  const pickedDir = dirs[dir];
  return (
    <ul className={cx("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skill">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#project">
        Project
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
}
