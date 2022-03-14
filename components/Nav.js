import NavItem from "../components/NavItem";
import cx from "classnames";

export default function Nav({ dir, scheme, onClick }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };
  const pickedDir = dirs[dir];
  return (
    <ul className={cx("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#profile" onClick={onClick}>
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skill" onClick={onClick}>
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#project" onClick={onClick}>
        Project
      </NavItem>
      <NavItem scheme={scheme} href="#contact" onClick={onClick}>
        Contact
      </NavItem>
    </ul>
  );
}
