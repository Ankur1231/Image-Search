import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
function App() {
  const [images, setImages] = useState([]);

  const [term, setTerm] = useState("");
  const url = `https://pixabay.com/api/?key=21821155-513f90a3996e8988b27eed276&q=${term}&image_type=photo&pretty=true`;
  const getDataUsingAxios = async () => {
    const response = await axios.get(url);
    setImages(response.data.hits);
  };
  useEffect(() => {
    getDataUsingAxios();
  }, [term]);

  //text search func
  function searchText(text) {
    console.log(text);
    setTerm(text);
  }

  return (
    <div className="container mx-auto px-10">
      <ImageSearch search={searchText} />
      {images.length === 0 && <h1>NO IMAGE FOUND</h1>}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
