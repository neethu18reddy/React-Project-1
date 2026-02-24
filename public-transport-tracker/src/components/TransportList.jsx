function TransportList({ routes, showOnlyNext }) {
  const nextArrival = routes.reduce((min, curr) =>
    curr.time < min.time ? curr : min
  );

  const displayRoutes = showOnlyNext ? [nextArrival] : routes;

  return (
    <ul>
      {displayRoutes.map((route, index) => (
        <li
          key={index}
          className={route === nextArrival ? "highlight" : ""}
        >
          {route.routeNo}  Arrives at {route.time.toLocaleTimeString()}
        </li>
      ))}
    </ul>
  );
}

export default TransportList;