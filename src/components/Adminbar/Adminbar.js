
import SecondaryMenu from "./SecondaryMenu"
import PrimaryMenu from "./PrimaryMenu"

export default function Adminbar({ adminBarMenuItems }) {

  // states the unique parents
  const uniqueParents = () => {
    let parents = []
    menuItems.map((item) => {
      parents.push(item.parent)
    })
    const unique = new Set(parents)
    return unique
  }
  // console.log(uniqueParents())

    // shows the empty parents
  const emptyParents = () => {
    let parents = [];
    menuItems.map((item, i) => {
      if (item.parent === "") {
        parents.push(item)
      }
    })
    return parents
  }
    // console.log("Empty Parents:", emptyParents())
  
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
  // console.log(menuItems)

  // organized data into a hierarchy
  const convertToHierarchy = (
    menuItems = [],
    { idKey = 'id', parentKey = 'parent', childrenKey = 'children' } = {}
  ) => {
    const tree = [];
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
  // console.log(hierarchy)

  // return null
  return (
    <div id="wpadminbar" className="nojq">
      <div className="quicklinks" id="wp-toolbar" role="navigation" aria-label="Toolbar">
        <PrimaryMenu primaryProps={ hierarchy }/>
        <SecondaryMenu secondaryProps={ hierarchy }/>
      </div>
    </div>

  )
}

