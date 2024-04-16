import React from "react";
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const itemSelector = useSelector((store) => store.items);
  console.log(itemSelector);

  return (
    <>
      <main>
        <div className="items-container">
          {itemSelector.map((itm) => (
            <HomeItem key={itm.id} item={itm} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
