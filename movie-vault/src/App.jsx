import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
function App() {
  let [watchList, setwatchList] = useState([]);
  let handleTAddToWathchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setwatchList(newWatchList);
    // console.log(newWatchList);
  };
  let handleDelFromWatchList = (movieObj) => {
    let filterdwatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("moviesApp", JSON.stringify(filterdwatchList));
    setwatchList(filterdwatchList);
    // console.log(filterdwatchList);
  };
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    // console.log(moviesFromLocalStorage)
    if (moviesFromLocalStorage) {
      setwatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              element={
                <>
                  <Banner />
                  <Movies
                    handleTAddToWathchList={handleTAddToWathchList}
                    watchList={watchList}
                    handleDelFromWatchList={handleDelFromWatchList}
                  />
                </>
              }
              path="/"
            ></Route>
            <Route
              element={<Watchlist watchList={watchList} setwatchList={setwatchList} handleDelFromWatchList={handleDelFromWatchList} />}
              path="/watchlist"
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
