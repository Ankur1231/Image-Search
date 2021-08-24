import React from "react";

const ImageSearch = (props) => {
  const [text, setText] = React.useState("");

  function handelClick(event) {
    event.preventDefault();
    props.search(text);
  }
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form className="w-full max-w-sm" onSubmit={handelClick}>
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            onChange={(event) => {
              setText(event.target.value);
            }}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
