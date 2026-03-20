function TransportList({ routes, showOnlyNext }) {
  const nextArrival =
    routes.length > 0
      ? routes.reduce((min, curr) =>
          curr.time < min.time ? curr : min
        )
      : null;

  const displayRoutes =
    showOnlyNext && nextArrival ? [nextArrival] : routes;

  const getMinutes = (time) =>
    Math.max(Math.floor((time - new Date()) / 60000), 0);

  const getStatus = (mins) => {
    if (mins <= 5) return "arriving";
    if (mins <= 10) return "soon";
    return "later";
  };

  return (
    <div className="transport-container">
      {displayRoutes.map((route) => {
        const mins = getMinutes(route.time);
        const status = getStatus(mins);

        return (
          <div
            key={route.routeNo}
            className={`transport-card ${status} ${
              route === nextArrival ? "next" : ""
            }`}
          >
            <div className="left">
              <h2>{route.routeNo}</h2>
              <p>{route.time.toLocaleTimeString()}</p>
            </div>

            <div className="right">
              <h1>{mins}</h1>
              <p>min</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TransportList;
