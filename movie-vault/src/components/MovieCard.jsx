import React from "react";

function MovieCard({poster,name}) {
  return (
    <a href={`https://www.google.com/search?q=${name}`} target="_blank" rel="noopener noreferrer">
        <div
        className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col-reverse"
        style={{
          backgroundImage:
            `url(https://image.tmdb.org/t/p/original/${poster})`
        }}
      >
        <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
          {name}
        </div>
      </div>
    </a>
  );
}

export default MovieCard;
