"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Albums } from "./components/Albums/Albums";
import { MainBanner } from "./components/Banner/MainBanner";
import { VideoBanner } from "./components/Banner/VideoBanner";

import { RecentWorks } from "./components/RecentWorks";
import { Reviews } from "./components/Reviews/Reviews";
import { Cinematography } from "./components/Services/Cinematography";
import { Photography } from "./components/Services/Photography";
import { Speciality } from "./components/Speciality";

export default function Home() {
  return (
    <>
      <MainBanner />

      <RecentWorks />

      <Speciality />

      <VideoBanner />

      <Photography />

      <Cinematography />

      <Albums />

      <Reviews />

      {/* <Contact /> */}
    </>
  );
}
