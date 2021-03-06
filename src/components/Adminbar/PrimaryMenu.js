import WPlogo from "./PrimaryItems/WPlogo"
import Site from "./PrimaryItems/Site"
import Updates from "./PrimaryItems/Updates"
import Comments from "./PrimaryItems/Comments"
import NewContent from "./PrimaryItems/NewContent"
import EditContent from "./PrimaryItems/EditContent"
import GraphQl from "./PrimaryItems/GraphQL"

export default function PrimaryMenu({ primaryProps }) {

  // return null
  return (
    <ul id="wp-admin-bar-root-default" className="ab-top-menu">
      <WPlogo />
      <Site siteProps={ primaryProps[1]} />
      <Updates />
      <Comments />
      <NewContent newContentProps={ primaryProps[4] }/>
      <EditContent editContentProps={ primaryProps[6] } />
      <GraphQl />
    </ul>
  )
}
