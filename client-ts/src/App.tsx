import "./App.css";
import React, { useState } from "react";

const callAPI = async (coordinates: any) => {
  console.log(coordinates);
  const response = await fetch(
    `http://localhost:9000/test?lat=${coordinates.lat}&lon=${coordinates.lon}`
  );
  return response.text();
};

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <div className="App">
      <p>{apiResponse}</p>

      <p>Click the button to get your coordinates.</p>

      <button
        onClick={async () => {
          console.log(2);
          const position: any = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) =>
              resolve(position)
            );
          });
          console.log(1, position);
          callAPI({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          }).then((result: any) => setApiResponse(result));
        }}
      >
        Try It
      </button>
      <h1>My data:</h1>
    </div>
  );
}
export default App;
