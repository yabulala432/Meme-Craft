import { Input } from "@chakra-ui/react";
import "./FancyButton.css";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}
export const FancyButton = ({ onClick, children, type }: Props) => {
  return (
    <button type={type} onClick={onClick} className="button-71">
      {children}
    </button>
  );
};

export const FancyInput = ({
  type,
  onChange,
  style,
  placeholder,
}: {
  type: "file";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
}) => {
  return (
    <Input
      type={type}
      accept="image/*"
      onChange={onChange}
      style={style}
      className="button-71"
      placeholder={placeholder}
      width={"200px"}
    />
  );
};
