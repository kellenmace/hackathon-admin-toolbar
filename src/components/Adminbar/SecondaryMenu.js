/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

export default function SecondaryMenu({ profileURL, userName }) {
  const [clss, setClss] = useState("menupop with-avatar")

  // return null
  return (
            <ul id="wp-admin-bar-top-secondary" className="ab-top-secondary ab-top-menu">
      <li id="wp-admin-bar-search" className="admin-bar-search">
        <div className="ab-item ab-empty-item" tabIndex="-1">
          <form action="http://atlasblueprintblog.local/" method="get" id="adminbarsearch">
            <input className="adminbar-input" name="s" id="adminbar-search" type="text" value maxLength="150"></input>
              <input type="submit" className="adminbar-button" value="Search"></input>
          </form>
        </div>
          </li>
      <li id="wp-admin-bar-my-account" className={clss}
      onMouseEnter={() => setClss("menupop hover with-avatar")}
      onMouseLeave={() => setClss("menupop with-avatar")}
      >
        
        <a className="ab-item" href={profileURL}>
          <div dangerouslySetInnerHTML={{ __html: userName }}></div>
          
            </a>
            <div className="ab-sub-wrapper">
              <ul id="wp-admin-bar-user-actions" className="ab-submenu">
                <li id="wp-admin-bar-user-info">
                  <a className="ab-item" tabIndex="-1" href={profileURL}>
                    <img alt="avatar" src="http://2.gravatar.com/avatar/213a7a0…?s=64&d=mm&r=g" srcSet="http://2.gravatar.com/avatar/213a7a0…?s=128&d=mm&r=g 2x" className="avatar avatar-64 photo" height="64" width="64" loading="lazy"></img>
                    <span className="display-name">Account</span>
                  </a>
                </li>
                <li id="wp-admin-bar-edit-profile">
                  <a className="ab-item" href="https://bphackathonadm.wpengine.com/wp-admin/profile.php">Edit Profile</a>
                </li>
                <li id="wp-admin-bar-logout">
                  <a className="ab-item" href="http://atlasblueprintblog.local/wp-login.php?action=logout&_wpnonce=ca92157684">Log Out</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
  )
}