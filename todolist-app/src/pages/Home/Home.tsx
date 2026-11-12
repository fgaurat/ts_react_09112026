import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopBar from "../../components/TopBar/TopBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import Content from "../../components/Content/Content";

function Home() {
  return (
    <>
      <div className="app">
        <SideBar />

        <div className="app-main">
          <TopBar />
          <Content />
          <BottomBar />
        </div>
      </div>
    </>
  );
}

export default Home;
