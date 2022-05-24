
export default function Comments() {
  return (
    <li id="wp-admin-bar-comments">
      <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/edit-comments.php">
        <span className="ab-icon" aria-hidden="true">
          {/* ::before */}
        </span>
        <span className="ab-label awaiting-mod pending-count count-0" aria-hidden="true">0</span>
        <span className="screen-reader-text comments-in-moderation-text">0 Comments in moderation</span>
      </a>
    </li>
  )
}