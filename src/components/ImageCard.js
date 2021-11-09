import React, { useRef, useState } from "react";

const ImageCard = (props) => {
  const { description, urls } = props.image;
  const [spanSize, setSpanSize] = useState(0);

  const imageRef = useRef();

  const imageLoaded = () => {
    const height = imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    setSpanSize(spans);
  };

  return (
    <div style={{ gridRowEnd: `span ${spanSize}` }}>
      <img
        ref={imageRef}
        alt={description}
        src={urls.regular}
        onLoad={imageLoaded}
      />
    </div>
  );
};
export default ImageCard;
