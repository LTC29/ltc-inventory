export const Header = () => {
  return (
    <header className="basic-header">
      <div className="left-side-header">
        <input
          type="text"
          placeholder="&nbsp;Search..."
          className="search-bar"
        />
        <button className="mag-glass">
          <span className="mdi mdi-magnify"></span>
        </button>
      </div>
      <div className="notif-profile">
        <img
          src="https://placehold.co/60x40"
          alt="placeholder"
          className="rounded-img"
        />
      </div>
    </header>
  );
};
