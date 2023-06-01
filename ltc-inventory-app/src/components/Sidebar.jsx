export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-stuff">
          <span className="mdi mdi-purse"></span>
          INVENTORY
        </div>
        <ul className="sidebar-list1">
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-home-outline"></span> */}
              Home
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-account-box-outline"></span> */}
              Profile
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-message-outline"></span> */}
              Messages
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-history"></span> */}
              History
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-note-multiple-outline"></span> */}
              Tasks
            </a>
          </li>
          <li>
            <a href="https://www.google.com/">
              {/* <span className="mdi mdi-account-group-outline"></span> */}
              Communities
            </a>
          </li>
        </ul>
        <ul className="sidebar-list2">
          <a href="https://github.com/LTC29" rel="noreferrer" target="_blank">
            <span className="fa fa-github"></span>
          </a>
        </ul>
      </div>
    </>
  );
};
