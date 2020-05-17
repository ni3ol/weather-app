import "./App.css";
import React, { useState, useEffect } from "react";

const callAPI = async () => {
  const response = await fetch("http://localhost:9000/test");
  console.log({ response });
  return response.text();
};

function App() {
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    callAPI().then((result) => setApiResponse(result));
  }, []);

  return (
    <div className="App">
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;
