import { FC } from "react";

import { Footer, Header } from "@src/components";

interface ILayoutProps {
 children?: JSX.Element[] | JSX.Element;
 className?: string;
}

export const Layout: FC<ILayoutProps> = ({
 children,
 className,
}): JSX.Element => {
 return (
  <>
   <Header />
   <div className={`flex min-h-screen flex-col ${className}`}>{children}</div>
   <Footer />
  </>
 );
};

export default Layout;
