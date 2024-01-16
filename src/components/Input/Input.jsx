const Input = ({ type, placeholder, name, className = "", ...props }) => {
  return (
    <input
      {...props}
      type={type}
      autoComplete="off"
      className={`text-lg w-full font-normal ${className} placeholder:opacity-50`}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
