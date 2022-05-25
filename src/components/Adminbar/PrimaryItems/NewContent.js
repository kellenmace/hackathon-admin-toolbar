import { useState } from "react"

export default function NewContent({ newPost, siteURL }) {
  const [clss, setClss] = useState("menupop")

  console.log(siteURL)

  const newMedia = `${siteURL}media-new.php`
  const newPage = `${siteURL}post-new.php?post_type=page`
  const newUser = `${siteURL}user-new.php`

  return (
    <li id="wp-admin-bar-new-content" className={clss}
    onMouseEnter={() => setClss("menupop hover")}
    onMouseLeave={() => setClss("menupop")}
    >
      <a className="ab-item" aria-haspopup="true" href={newPost}>
        <span className="ab-icon" aria-hidden="true"></span>
        {/* ::before */}
        <span className="ab-label">New</span>
      </a>
      <div className="ab-sub-wrapper">
        <ul id="wp-admin-bar-new-content-default" className="ab-submenu">
          <li id="wp-admin-bar-new-post">
            <a className="ab-item" href={newPost}>Post</a>
          </li>
          <li id="wp-admin-bar-new-media">
            <a className="ab-item" href={newMedia}>Media</a>
          </li>
          <li id="wp-admin-bar-new-page">
            <a className="ab-item" href={newPage}>Page</a>
          </li>
          <li id="wp-admin-bar-new-user">
            <a className="ab-item" href={newUser}>User</a>
          </li>
        </ul>
      </div>
    </li>
  )
}