import { useEffect, useState } from "react";
import Header from "./components/Header";
import RouteSelector from "./components/RouteSelector";
import TransportList from "./components/TransportList";

function App() {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [showOnlyNext, setShowOnlyNext] = useState(false);

  // Fetch transport data
  const fetchRoutes = async () => {
    setLoading(true);
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();

    // Convert todos → transport routes
    const mappedRoutes = data.slice(0, 10).map((item, index) => ({
      routeNo: `Route ${index + 1}`,
      time: new Date(Date.now() + (index + 1) * 5 * 60000)
    }));

    setRoutes(mappedRoutes);
    setLastUpdated(new Date().toLocaleTimeString());
    setLoading(false);
  };

  // Initial fetch + auto refresh
  useEffect(() => {
    fetchRoutes();
    const interval = setInterval(fetchRoutes, 30000);

    return () => clearInterval(interval);
  }, []);

  // Filter routes
  const filteredRoutes = selectedRoute
    ? routes.filter(r => r.routeNo === selectedRoute)
    : routes;

  return (
    <div className="app">
      <Header lastUpdated={lastUpdated} onRefresh={fetchRoutes} />

      <RouteSelector
        routes={routes}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
      />

      <label className="toggle">
        <input
          type="checkbox"
          checked={showOnlyNext}
          onChange={() => setShowOnlyNext(!showOnlyNext)}
        />
        Show only next arriving
      </label>

      {loading ? (
        <p>Loading transport data...</p>
      ) : filteredRoutes.length === 0 ? (
        <p>No routes available</p>
      ) : (
        <TransportList
          routes={filteredRoutes}
          showOnlyNext={showOnlyNext}
        />
      )}
    </div>
  );
}

export default App;