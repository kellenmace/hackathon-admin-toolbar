

export default function NewContent() {
  return (
    <li id="wp-admin-bar-new-content" className="menupop">
      <a className="ab-item" aria-haspopup="true" href="http://atlasblueprintblog.local/wp-admin/post-new.php">
        <span className="ab-icon" aria-hidden="true"></span>
        {/* ::before */}
        <span className="ab-label">New</span>
      </a>
      <div className="ab-sub-wrapper">
        <ul id="wp-admin-bar-new-content-default" className="ab-submenu">
          <li id="wp-admin-bar-new-post">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/post-new.php">Post</a>
          </li>
          <li id="wp-admin-bar-new-media">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/media-new.php">Media</a>
          </li>
          <li id="wp-admin-bar-new-page">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/post-new.php?post_type=page">Page</a>
          </li>
          <li id="wp-admin-bar-new-user">
            <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/user-new.php">User</a>
          </li>
        </ul>
      </div>
    </li>
  )
}