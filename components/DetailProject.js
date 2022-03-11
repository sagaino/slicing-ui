export default function DetailProject({ judul, desc, img }) {
  return (
    <article className="text-center">
      <img alt="img" src={img} className="w-full rounded-lg mt-14" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{judul}</h3>
      <p className="text-gray-400 text-lg">{desc}</p>
    </article>
  );
}
