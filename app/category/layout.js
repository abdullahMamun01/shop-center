import EmailSubscription from "@/components/EmailSubscription";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            <SideBar />
          </div>

          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10 ">
            {children}
          </div>
        </section>
      </main>
      <EmailSubscription />
    </div>
  );
};

export default layout;
