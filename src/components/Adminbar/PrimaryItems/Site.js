
export default function Site({ siteProps }) {
  
  return (
    <li id="wp-admin-bar-site-name" className="menupop hover">

      <a className="ab-item" aria-haspopup="true" href="http://atlasblueprintblog.local/wp-admin/">
        {siteProps.title}
      </a>

      <div className="ab-sub-wrapper">
        <ul id="wp-admin-bar-site-name-default" className="ab-submenu">
          <li id="wp-admin-bar-dashboard">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/">Dashboard</a>
          </li>
        </ul>

        <ul id="wp-admin-bar-appearance" className="ab-submenu">
          <li id="wp-admin-bar-menus">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/nav-menus.php">Menus</a>
          </li>
        </ul>
      </div>

    </li>
  )
}