import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";
function Watchlist({ watchList, setwatchList, handleDelFromWatchList }) {
  const [searchField, setsearchField] = useState(""); // search field state
  const [genreList, setgenreList] = useState(["All genres"]);
  const [currentGenre, setcurrentGenre] = useState("All genres");
  let handleSearch = (e) => {
    setsearchField(e.target.value);
  };
  let sortIncreasing = () => {
    let sortedInc = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setwatchList([...sortedInc]);
  };
  let sortDecreasing = () => {
    let sortedDec = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setwatchList([...sortedDec]);
  };
  let handleFilter = (genre) => {
    setcurrentGenre(genre);
  };
  useEffect(() => {
    document.title="Watchlist";
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setgenreList(["All genres", ...temp]);
    // console.log(temp);
  }, [watchList]);

  return (
    <>
      <div className="flex flex-wrap justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer"
                  : "flex justify-center h-[3rem] w-[9rem] bg-gray-500 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-8">
        <input
          onChange={handleSearch}
          value={searchField}
          type="text"
          placeholder="Search movies"
          className="h-[3rem] w-[25rem] bg-gray-300 outline-none px-4 text-xl rounded-xl"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div
                  onClick={sortIncreasing}
                  className="p-2 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div
                  onClick={sortDecreasing}
                  className="p-2 hover:cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currentGenre == "All genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(searchField.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[6rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td className="text-red-900">
                      <h2
                        onClick={() => {
                          handleDelFromWatchList(movieObj);
                        }}
                        className="hover:cursor-pointer"
                      >
                        Delete
                      </h2>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
