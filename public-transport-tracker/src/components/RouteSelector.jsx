function RouteSelector({ routes, selectedRoute, setSelectedRoute }) {
  return (
    <select
      value={selectedRoute}
      onChange={(e) => setSelectedRoute(e.target.value)}
    >
      <option value="">All Routes</option>
      {routes.map((route, index) => (
        <option key={index} value={route.routeNo}>
          {route.routeNo}
        </option>
      ))}
    </select>
  );
}

export default RouteSelector;