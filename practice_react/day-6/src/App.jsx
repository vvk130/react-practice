import { data } from "./data";
import CountryBar from "./CountryBar";

function App() {
  const sortedData = data.sort((a, b) => b.population - a.population);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1
          className={{
            fontWeight: "bold",
          }}
        >
          World Population
        </h1>
        <h2>Ten most populated countries</h2>
      </div>
      <div
        style={{
          fontFamily: "Arial",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table className="center">
          <thead>
            {sortedData.map((item) => (
              <tr key={item.country}>
                <CountryBar
                  key={item.country}
                  country={item.country}
                  population={item.population}
                />
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </>
  );
}

export default App;
