import React from 'react';

const api = {
  key: "69a47be4157c1e0910e0208fa96c51e5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."></input>
        </div>
      </main>
    </div>
  );
}

export default App;
