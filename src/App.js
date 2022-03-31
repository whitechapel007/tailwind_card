import React, { useState } from "react";
import { allGiftCards } from "./card";

function App() {
  const [value, setValue] = useState(allGiftCards);
  return (
    <div className="flex flex-wrap p-4 justify-center bg-[#F4F2F3]">
      {value.map((val) => (
        <div className="">
          <main className="flex flex-row p-2">
            <section className="p-20 bg-[#230903] text-white m-5 w-full flex flex-col justify-center items-center rounded-lg shadow-2xl">
              <div className="text-2xl mb-2 font-bold">{val.title} </div>

              <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 ">
                {val.currencies.map((curr) => (
                  <div className="text-sm p-2">{curr}</div>
                ))}
              </div>
            </section>
          </main>
        </div>
      ))}
    </div>
  );
}

export default App;
