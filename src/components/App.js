import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID HX8rfS-T3USzdE3dSJ1erUnijUR6Mt86760sSIvX5mw",
      },
    });
    setImages(response.data.results);
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      Found: {images.length} images
    </div>
  );
};

export default App;
