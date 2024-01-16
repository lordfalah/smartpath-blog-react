import Label from "./Label";
import Input from "./Input";
import Icon from "./Icon";

const InputForm = ({ name, label, type, placeholder, src }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Icon src={src} />
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
