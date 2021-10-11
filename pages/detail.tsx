import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import LectureGroup from "../components/lecture/lectureGroup";

const Detail: NextPage = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <LectureGroup />
    </div>
  );
};

export default Detail;
