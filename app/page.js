"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { MainBanner } from "./components/Banner/MainBanner";
import { VideoBanner } from "./components/Banner/VideoBanner";

import { PhotoGrid } from "./components/PhotoGrid/photoGrid";
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

      <PhotoGrid />

      <Reviews />

      {/* <Contact /> */}
    </>
  );
}
