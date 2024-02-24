"use client";

import { RadioGroup } from "@/app/components/common/InputFields";
import { useEffect, useState } from "react";

export default function SearchSection() {
  const [selectedLocation, setSelectedLocation] = useState("bd");
  // const [showSearchResult, setShowSearchResult] = useState(false);

  const locationOptions = [
    { id: "bangladesh", value: "bd", label: "Bangladesh" },
    { id: "europe", value: "eur", label: "Europe" },
  ];

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    // setShowSearchResult(false);
  };

  useEffect(() => {}, []);

  return (
    <div className="container mx-auto ">
      <div className="bg-white px-8 py-5 rounded-lg shadow-sm">
        <div className="bg-white flex gap-5 justify-center rounded shadow-md p-3 w-48 mx-auto mb-5 -mt-12">
          <RadioGroup
            options={locationOptions}
            selectedOption={selectedLocation}
            onChange={handleLocationChange}
          />
        </div>

        {selectedLocation === "bd" ? (
          <h1>hi</h1>
        ) : selectedLocation === "eur" ? (
          <h1>hello</h1>
        ) : null}
      </div>

      {/* <div className="bg-white flex gap-5 justify-center rounded shadow-md p-3 w-48 mx-auto mb-5 -mt-12">
        <RadioGroup
          options={locationOptions}
          selectedOption={selectedLocation}
          onChange={handleLocationChange}
        />
      </div> */}

      <div className="mt-10">
        {" "}
        {/* {showSearchResult && (
          <>
            {selectedType === "hotel" ? (
              <SearchResultHotels
                filteredHotelList={hotels}
                sortHotelsByPrice={sortHotelsByPrice}
                toggleHotelBookmark={toggleHotelBookmark}
              />
            ) : selectedType === "flight" ? (
              <SearchResultFlights
                filteredFlightList={flights}
                sortFlightsByPrice={sortFlightsByPrice}
                toggleFlightBookmark={toggleFlightBookmark}
              />
            ) : null}
          </>
        )} */}
        <h1>recent work</h1>
      </div>
    </div>
  );
}
