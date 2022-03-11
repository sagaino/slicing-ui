import cx from "classnames";

export default function DetailSkill({ name, level, img, imgClassName }) {
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img alt="skill" src={img} className={cx("mr-6", imgClassName)} />
      <div>
        <h4 className="text-lg font-semibold font-sans">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold font-sans">{level}</p>
      </div>
    </div>
  );
}
