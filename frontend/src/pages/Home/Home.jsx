import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import MessageContainer from "../../components/Messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-full  w-full justify-center  rounded-lg overflow-hidden  mx-auto container">
      <Sidebar />

      <MessageContainer />
    </div>
  );
};

export default Home;
