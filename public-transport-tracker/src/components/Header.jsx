function Header({ lastUpdated, onRefresh }) {
  return (
    <div className="header">
      <h1>🚌 Public Transport Tracker</h1>
      <p>Last updated: {lastUpdated || "Fetching..."}</p>
      <button onClick={onRefresh}>Refresh</button>
    </div>
  );
}

export default Header;