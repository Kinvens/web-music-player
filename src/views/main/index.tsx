import React from "react";

import NavBar from "@component/navbar";

import Banner from "./component/banner";
import SongRecom from "./component/songRecom";
import SongListRecom from "./component/songListRecom";
import AlbumRecom from "./component/albumRecom";
import TopSong from "./component/topSong";

import { NavBarData } from "@component/interface";
const Main = () => {
  const NavBarData: NavBarData[] = [
    {
      data: "首页",
      key: "shouye",
    },
    {
      data: "歌手",
      key: "geshou",
    },
    {
      data: "新碟",
      key: "xindie",
    },
    {
      data: "排行榜",
      key: "paihangbang",
    },
    {
      data: "分类歌单",
      key: "feileigedan",
    },
    {
      data: "电台",
      key: "diantai",
    },
    {
      data: "MV",
      key: "MV",
    },
  ];

  return (
    <>
      <NavBar dataSource={NavBarData} className="top-nav-bar" />
      <Banner />
      {/* <SongRecom /> */}
      <SongListRecom />
      <TopSong />
      {/* <AlbumRecom /> */}
      {/* <TopList /> */}
    </>
  );
};
export default Main;
