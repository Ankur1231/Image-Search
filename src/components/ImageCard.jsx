import React from "react";

const ImageCard = (props) => {
  const tag = props.image.tags.split(",");
  return (
    <div className="max-w-sm max-h-sm rounded overflow-hidden shadow-lg">
      <img src={props.image.webformatURL} alt="" className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {props.image.user}</div>
        <ul>
          <li>
            {" "}
            <strong> Views:{props.image.views}</strong>
          </li>
          <li>
            <strong>Downloads:{props.image.downloads}</strong>
          </li>
          <li>
            <strong>Likes:{props.image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tag.map((val, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-500 mr-2">
            #{val}
          </span>
        ))}
      </div>
    </div>
  );
};
export default ImageCard;
