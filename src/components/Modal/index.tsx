import { FC, ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { IconCross, IconQuestion } from "@/public/icons";

interface IModalProps {
 isOpen: boolean;
 onClose: () => void;
 children: ReactNode;
 containerClass?: string;
 title: string;
 description: string;
}

const Modal: FC<IModalProps> = ({
 isOpen,
 onClose,
 children,
 containerClass = "",
 title,
 description,
}) => {
 const [isBrowser, setIsBrowser] = useState(false);

 const ref = useRef(null);

 useEffect(() => {
  setIsBrowser(true);
 }, []);

 useEffect(() => {
  if (typeof window != "undefined" && window.document) {
   isOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "visible");
  }
 }, [isOpen]);

 const modalContent = isOpen ? (
  <div
   className={`flex h-screen w-screen items-center justify-center md:bg-modalBackground md:bg-opacity-80`}
  >
   <div ref={ref} className={`relative bg-white md:rounded-lg ${containerClass}`}>
    <div className={`flex items-center justify-between py-4 px-6 md:px-4`}>
     <button
      onClick={onClose}
      className="w-10 h-10 flex items-center justify-center fill-black"
     >
      <IconCross />
     </button>
     <div>
      <h4 className="text-lg font-medium text-black text-center mb-1">{title}</h4>
      <p className="text-base text-gray text-center">{description}</p>
     </div>
     <button
      className="w-10 h-10 flex items-center justify-center fill-black"
     >
      <IconQuestion />
     </button>
    </div>
    {children}
   </div>
  </div>
 ) : null;

 if (isBrowser) {
  return ReactDOM.createPortal(
   modalContent,
   document.getElementById("modal-root") as HTMLElement,
  );
 }

 return null;
};

export default Modal;
