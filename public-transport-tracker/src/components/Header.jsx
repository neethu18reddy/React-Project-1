function Header({ lastUpdated, onRefresh }) {
  return (
    <div className="header">
      <h1>🚍 Smart Transport</h1>
      <div className="header-row">
        <span>Updated: {lastUpdated || "..."}</span>
        <button onClick={onRefresh}>🔄</button>
      </div>
    </div>
  );
}

export default Header;
