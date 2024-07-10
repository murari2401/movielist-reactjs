import React from "react";

function MovieCard({
  movieObj,
  poster,
  name,
  handleTAddToWathchList,
  watchList,
  handleDelFromWatchList,
}) {
  function movieInWatchList(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster})`,
      }}
    >
      {movieInWatchList(movieObj) ? (
        <div
          onClick={() => handleDelFromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleTAddToWathchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900"
        >
          &#128151;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
