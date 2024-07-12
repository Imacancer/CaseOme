{
  /* Layout for Configure Page */
}

import MaxWidthWrapper from "@/components/maxwitdhwrapper";
import Steps from "@/components/steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper classname="flex-1 flex flex-col ">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
