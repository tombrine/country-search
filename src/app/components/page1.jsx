export const CountryInfor = ({ UlsiinInfo }) => {
  const {
    capital,
    population,
    languages,
    borders,
    area,
    region,
    timezones,
    currencies,
  } = UlsiinInfo;
  const name = UlsiinInfo.name.common;
  const flag = UlsiinInfo.flags.png;
  const official_name = UlsiinInfo.name.official;
  const google_map = UlsiinInfo.maps.googleMaps;
  const open_map = UlsiinInfo.maps.openStreetMaps;
  const start_of_the_week = UlsiinInfo.startOfWeek;

  const languageName = Object.values(languages)[0];
  const curencyName = Object.values(currencies)[0];
  const curencyName1 = Object.values(curencyName)[0];
  const curencySymbol = Object.values(curencyName)[1];
  return (
    <div className="allInfos">
      <h1>{name}</h1>
      <img className="flags" src={flag} alt="flag" />
      <div>
        <p className="names">Officail name: </p>
        <p>{official_name}</p>
      </div>
      <div>
        <p className="capitals">Capital:</p>
        <p>{capital}</p>
      </div>
      <div>
        <p className="regions">Region:</p>
        <p>{region}</p>
      </div>
      <div>
        <p className="regions">Population:</p>
        <p>{population}</p>
      </div>
      <div>
        <p className="regions">Area:</p>
        <p>{area}</p>
      </div>
      <div>
        <p className="regions">Currency:</p>
        <p>{curencyName1}</p>
      </div>
      <div>
        <p className="regions">Curency symbol:</p>
        <p>{curencySymbol}</p>
      </div>
      <div>
        <p className="regions">Language:</p>
        <p>{languageName}</p>
      </div>
      {borders ? (
        <div className="borders1">
          Borders:
          {borders.map((border) => (
            <div className="allBorders">
              <p className="names-of-borders">{border}</p>
            </div>
          ))}
        </div>
      ) : null}
      <div>
        <p className="time_zones">Time zone: </p>
        <p>
          {timezones.map((timezone) => (
            <div>
              <p>{timezone}</p>
            </div>
          ))}
        </p>
      </div>
      <div>
        <p className="start-of-the-week">Start of the week:</p>{" "}
        <p>{start_of_the_week}</p>
      </div>
      <h2>Maps</h2>
      <div className="links">
        <a href={google_map}>Open on google maps </a>
        <a href={open_map}>Open on openStreetMap</a>
      </div>
    </div>
  );
};
