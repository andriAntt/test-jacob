import { FC, ReactNode } from "react";

interface IButtonProps {
 className?: string;
 onClick?: (value: any) => void;
 children?: ReactNode;
 type?: string;
}

const Button: FC<IButtonProps> = ({
 className = "",
 children,
 type = "button",
 ...props
}): JSX.Element => {
 return (
  <button
   className={`flex items-center justify-center rounded-lg bg-dark p-3 font-medium text-white transition-all hover:bg-gray ${className}`}
   {...props}
  >
   {children}
  </button>
 );
};

export default Button;
