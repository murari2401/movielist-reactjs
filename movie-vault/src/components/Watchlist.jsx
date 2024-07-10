import React from "react";

function Watchlist({ watchList }) {
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
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList.map((movieObj, index) => {
              return (
                <>
                  <tr>
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
                      <h2 className="hover:cursor-pointer">Delete</h2>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
