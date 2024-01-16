const Label = ({ htmlFor, className = "", children }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm ${className}`}>
      {children}
    </label>
  );
};

export default Label;
