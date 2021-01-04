import { Carousel } from "antd";
import { useEffect, useState } from "react";
// import { InterFaceBanner } from "@utils/interface";
// import { get } from "@netWork/axios";
import { getBanner } from "@netWork/request";
import axios from "axios";
const Banner = () => {
  const [bannerList, setBannerList] = useState<any>();
  useEffect(() => {
    getBanner("/api/banner").then((res) => setBannerList(res.banners));
    // console.log(a);
  }, []);
  const handle = (e: any) => {
    console.log(bannerList);
  };
  return <button onClick={handle}></button>;
};
export default Banner;
