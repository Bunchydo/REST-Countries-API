import "./country.css";
export default function Country({data}) {
 

  return (
    
    <div className="country">
      <div className="flag">
        <img src={data.flags.png} alt="" />
      </div>
      <div className="details">
        <div className="country-name">{data.name.common}</div>
        <div className="country-little-details">
          <div className="population">Population: {data.population}</div>
          <div className="region">Region: {data.region}</div>
          <div className="capital">Capital: {data.capital}</div>
        </div>
      </div>
    </div>
  );
}
