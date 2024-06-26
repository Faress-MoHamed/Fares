function ItemForm({ type, name }) {
  return (
    <>
      <label
        htmlFor={name}
        className="inline-block after:content-['*'] after:text-red-700 capitalize"
      >
        {name}
      </label>
      <input
        id={name}
        aria-label={`${name}`}
        required
        className="outline-none p-2 border-gray-950 border-[2px] rounded-md bg-primary-50 h-11 placeholder:text-xl "
        type={`${type}`}
        name={`user_${name}`}
      />
    </>
  );
}

export default ItemForm;
