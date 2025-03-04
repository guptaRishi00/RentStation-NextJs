import React from "react";

import MobileFooter from "@/components/ui/mobile-footer";
// import CategoryCards from "../_components/category-cards";
// import CategoryCard from "../_components/category-card";
;
// import Home from "../_components/home";
import Image from "next/image";
import CategoryCard from "./_components/category-card";
import Home from "./_components/home";
import Sidebar from "./_components/account-sidebar";

function page() {
  return (
    <div className=" w-full items-center flex justify-center bg-slate-50">
      <div className="lg:w-11/12 w-full">
        {/* <Navbar /> */}
        <CategoryCard />
        <Home />

        {/* <Image src="/next.svg" width={1800} height={200} alt="" /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default page;



// https://github.com/SUMIT-WEBDEV/RentStation-NextJs
// https://github.com/settings/applications/2433325
// https://console.cloud.google.com/apis/credentials?project=next-auth-410307
// https://rent-station-next-js.vercel.app