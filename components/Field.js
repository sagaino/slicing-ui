export default function Field({ label, name, type, className }) {
  const addClasName = className ? ` ${className}` : "";
  const formControlClassName = `bg-transparent border border-gray-400 px-6 py-3 w-full${addClasName}`;
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-1 text-lg font-semibold">
        {label}
      </label>
      {type === "text" && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
}
