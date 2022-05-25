import { useState } from "react"

export default function WPlogo() {
  const [clss, setClss] = useState("menupop")

  return (
    <li id="wp-admin-bar-wp-logo" className={clss}
    onMouseEnter={() => setClss("menupop hover")}
    onMouseLeave={() => setClss("menupop")}
    >
      <a className="ab-item" aria-haspopup="true" href="">
        <span className="ab-icon" aria-hidden="true"></span>
        <span className="screen-reader-text">About WordPress</span>
      </a>
      <div className="ab-sub-wrapper">
        <ul id="wp-admin-bar-wp-logo-default" class="ab-submenu">
          <li id="wp-admin-bar-about">
            <a class="ab-item" href="http://atlasblueprintblog.local/wp-admin/about.php">About WordPress</a>
          </li>
        </ul>
        <ul id="wp-admin-bar-wp-logo-external" class="ab-sub-secondary ab-submenu">
          <li id="wp-admin-bar-wporg">
            <a class="ab-item" href="https://wordpress.org/">WordPress.org</a>
          </li>
          <li id="wp-admin-bar-documentation">
            <a class="ab-item" href="https://wordpress.org/support/">Documentation</a>
          </li>
          <li id="wp-admin-bar-support-forums">
            <a class="ab-item" href="https://wordpress.org/support/forums/">Support</a>
          </li>
          <li id="wp-admin-bar-feedback">
            <a class="ab-item" href="https://wordpress.org/support/forum/requests-and-feedback">Feedback</a>
          </li>
        </ul>
      </div>
      </li>
  )
}