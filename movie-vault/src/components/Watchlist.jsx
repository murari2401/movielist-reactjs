import React, { useState } from "react";

function Watchlist({ watchList ,setwatchList, handleDelFromWatchList}) {
  const [searchField, setsearchField] = useState(""); // search field state
  let handleSearch = (e) => {
    setsearchField(e.target.value);
  };
  let sortIncreasing = () => {
    let sortedInc=watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setwatchList([...sortedInc])
  };
  let sortDecreasing = () => {
    let sortedDec=watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setwatchList([...sortedDec])
  };
  return (
    <>
      <div className="flex flex-wrap justify-center m-4">
        <div className="flex justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer">
          Action
        </div>
        <div className="flex justify-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer">
          Scifi
        </div>
        <div className="flex justify-center h-[3rem] w-[9rem] bg-red-300 rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer">
          Adventure
        </div>
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
                <div onClick={sortIncreasing} className="p-2 hover:cursor-pointer">
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2 hover:cursor-pointer">
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
                    <td>Scifi</td>
                    <td className="text-red-900">
                      <h2 onClick={()=>{handleDelFromWatchList(movieObj)}} className="hover:cursor-pointer">Delete</h2>
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
