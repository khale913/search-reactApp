import React, { useState } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  // State manipulation
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    // api fetch
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    // push api results to image state
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
