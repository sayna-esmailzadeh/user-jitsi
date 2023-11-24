import clsx from "clsx";

type ButtonSizeType = "sm" | "lg";
type ButtonColorType = "primary" | "warning" | "secondary" | "error" | "white";

const Button: React.FC<{
  size: ButtonSizeType;
  bgColor: ButtonColorType;
  textColor: ButtonColorType;
  children: JSX.Element | string;
  onClick: () => void;
}> = ({ size, bgColor, textColor, onClick, children }) => {
  return (
    <button
      className={clsx(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
        {
          "text-xs": size === "sm",
          "text-xl": size === "lg",
        }
      )}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
