import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "../input.css";
import Top from "./Top/Top";
import MyCart from "./cart/MyCart";
import Summer from "./summer/Summer";
import MenuBar from "./home/MenuBar";
import Winter from "./winter/winter";
function App() {
  const [allItems, setAllItems] = useState<any>([]);
  const [chosenItem, setChosenItem] = useState<any>(false);
  const [tempCart, setTempCart] = useState<any>({});

  return (
    <div className="">
      <div className="fixed top-0 flex justify-center items-center w-full z-10">
        <MenuBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/top"
          element={
            <Top
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        <Route
          path="/summer"
          element={
            <Summer
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        <Route
          path="/winter"
          element={
            <Winter
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />

        <Route
          path="/my-cart"
          element={
            <MyCart
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
