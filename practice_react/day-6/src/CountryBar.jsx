import "./country-bar.css";

function CountryBar({ country, population }) {
  return (
    <>
      <th>{country}</th>
      <th
        className="middle-bar"
        style={{ width: `${population * 0.0000001}px` }}
      >
        <>
          <div
            className="empty-div"
            style={{
              color: "transparent",
              backgroundColor: "orange",
              width: `${population * 0.0000001}px`,
            }}
          >
            <span style={{ visibility: "hidden" }}>Hidden text</span>
          </div>
        </>
      </th>
      <th>{population.toLocaleString()}</th>
    </>
  );
}

export default CountryBar;
