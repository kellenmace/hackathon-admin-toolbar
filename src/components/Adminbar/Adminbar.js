
import SecondaryMenu from "./SecondaryMenu"
import PrimaryMenu from "./PrimaryMenu"
import WPlogo from "./PrimaryItems/WPlogo"
import Site from "./PrimaryItems/Site"
import Comments from "./PrimaryItems/Comments"
import Updates from "./PrimaryItems/Updates"
import NewContent from "./PrimaryItems/NewContent"
import EditContent from "./PrimaryItems/EditContent"
import GraphQl from "./PrimaryItems/GraphQL"

export default function Adminbar({ adminBarMenuItems }) {

    const menuItems = adminBarMenuItems?.map(item => {
    return {
      id: item.id,
      title: item.title,
      group: item.group,
      href: item.href,
      parent: item.parent,
      class: item.meta.class,
      tabIndex: item.meta.tabIndex
    }
  })

  // console.log(adminBarMenuItems)
  let userName = adminBarMenuItems[5].title;
  let profileURL = adminBarMenuItems[5].href;
  let siteName = adminBarMenuItems[12].title;
  let siteURL = adminBarMenuItems[12].href;
  let editComments = adminBarMenuItems[19].href;
  let commentCount = adminBarMenuItems[18].title;
  let newPost = adminBarMenuItems[20].href;
  let editPost = adminBarMenuItems[32].href;
  let graphQL = adminBarMenuItems[33].href;


  // organized data into a hierarchy
  const convertToHierarchy = async (
    menuItems = [],
    { idKey = 'id', parentKey = 'parent', childrenKey = 'children' } = {}
  ) => {
    const tree = await [];
    const childrenOf = {};
    
    menuItems.forEach((item) => {
      const newItem = { ...item };
      const {
        [idKey]: id,
        [parentKey]: parent = 0
      } = newItem;
      childrenOf[id] = childrenOf[id] || [];
      newItem[childrenKey] = childrenOf[id];
      parent ? (
        childrenOf[parent] = childrenOf[parent] || []).push(newItem)
        : tree.push(newItem);
    });
    return tree
  }
  let hierarchy = convertToHierarchy(menuItems)
  console.log(hierarchy)
  
  return (
    <div id="wpadminbar" className="nojq">
      <div className="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar">
        {/* <PrimaryMenu primaryProps={ hierarchy }/> */}
        <ul id="wp-admin-bar-root-default" className="ab-top-menu">
          <WPlogo />
          <Site siteName={siteName} siteURL={siteURL} />
          {/* <Updates updateCount={updateCount} /> */}
          <Comments commentsCount={commentCount} editComments={editComments}/>
          <NewContent newPost={newPost}/>
          <EditContent editPost={editPost}/>
          <GraphQl graphQL={ graphQL } />
        </ul>
        <SecondaryMenu profileURL={ profileURL } userName={ userName } /> 
      </div>
    </div>

  )
}

