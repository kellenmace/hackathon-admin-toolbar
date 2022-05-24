
export default function WPlogo() {
  return (
      <li id="wp-admin-bar-wp-logo" className="menupop">
      <a className="ab-item" aria-haspopup="true" href="http://atlasblueprintblog.local/wp-admin/about.php">
        <span className="ab-icon" aria-hidden="false"></span>
        <span className="screen-reader-text">About WordPress</span>
      </a>
      <div className="ab-sub-wrapper"></div>
      </li>
  )
}