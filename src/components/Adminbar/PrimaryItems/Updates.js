
export default function Updates() {
  return (
    <li id="wp-admin-bar-updates">
      <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/update-core.php">
        <span className="ab-icon" aria-hidden="true">
          {/* ::before */}
        </span>
        <span className="ab-label" aria-hidden="true">4</span>
        <span className="screen-reader-text updates-available-text">4 updates available</span>
      </a>
    </li>
  )
}