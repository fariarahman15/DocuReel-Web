"use client";
import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function MainBanner() {
  const [showScrollDiv, setShowScrollDiv] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to the desired scroll position
        setShowScrollDiv(true);
      } else {
        setShowScrollDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  {
    return (
      <div className="relative h-screen w-full">
        <video
          src={"/resources/videos/video_1.mp4"}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 grid  w-full place-items-center bg-black/30">
          <div className="w-3/4 text-center md:w-2/4">
            {/* {showScrollDiv && (
              <div className="mt-20 ">
                <Typography variant="h5" color="white">
                  Choose Your Location
                </Typography>
                <div className="flex justify-center gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="gradient"
                    // variant={selectedLocation === "bangladesh" ? "gradient" : "text"}
                    // onClick={() => handleLocationChange("bangladesh")}
                  >
                    Bangladesh
                  </Button>
                  <Button
                    size="sm"
                    color="white"
                    variant="text"
                    // variant={selectedLocation === "europe" ? "gradient" : "text"}
                    // onClick={() => handleLocationChange("europe")}
                  >
                    Europe
                  </Button>
                </div>
              </div>
            )} */}

            <div className="mt-20 ">
              <Typography variant="h5" color="white">
                Choose Your Location
              </Typography>
              <div className="flex justify-center gap-2 mt-2">
                <Button
                  size="sm"
                  variant="gradient"
                  // variant={selectedLocation === "bangladesh" ? "gradient" : "text"}
                  // onClick={() => handleLocationChange("bangladesh")}
                >
                  Bangladesh
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  // variant={selectedLocation === "europe" ? "gradient" : "text"}
                  // onClick={() => handleLocationChange("europe")}
                >
                  Europe
                </Button>
              </div>
            </div>

            {/* <SearchSection /> */}
          </div>
        </div>
      </div>
    );
  }
}
