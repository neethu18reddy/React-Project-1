function RouteSelector({ routes, selectedRoute, setSelectedRoute }) {
  return (
    <select
      value={selectedRoute}
      onChange={(e) => setSelectedRoute(e.target.value)}
      className="dropdown"
    >
      <option value="">All Routes</option>
      {routes.map((route) => (
        <option key={route.routeNo} value={route.routeNo}>
          {route.routeNo}
        </option>
      ))}
    </select>
  );
}

export default RouteSelector;
