import { useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              element={
                <>
                  <Banner/>
                  <Movies />
                </>
              }
              path="/"
            ></Route>
            <Route element={<Watchlist />} path="/watchlist"></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
