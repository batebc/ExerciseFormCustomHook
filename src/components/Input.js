export const Input = ({
  labelTitle,
  type,
  id,
  name,
  value,
  required,
  placeholder,
  onChange
}) => {
  return (
    <div>
      <label className="form-label mb-2" htmlFor="id">
        {labelTitle}
      </label>
      <input
        className="form-control mb-4"
        type={type}
        id={id}
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
