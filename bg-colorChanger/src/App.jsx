import { useState } from "react";

function App() {
  const [colour, setColour] = useState("skyblue");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: colour }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
            onClick={() => setColour("green")}
              className="outline-none px-4 py1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
            onClick={() => setColour("orange")}
              className="outline-none px-4 py1 rounded-full text-white shadow-sm"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
