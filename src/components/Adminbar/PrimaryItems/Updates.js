
export default function Updates({ updateCount }) {
  return (
    <li id="wp-admin-bar-updates">
      <a className="ab-item" href="http://atlasblueprintblog.local/wp-admin/update-core.php">
        <div dangerouslySetInnerHTML={{__html: updateCount }}></div>
      </a>
    </li>
  )
}