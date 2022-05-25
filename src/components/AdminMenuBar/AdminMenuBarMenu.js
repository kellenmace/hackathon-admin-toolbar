import { client } from 'client';
import { useEffect, useState } from 'react';

export default function AdminMenuBar({
  rootQuery = 'posts',
  args = { first: 1 },
}) {
  const { useLazyQuery } = client.auth;
  const [hoveredItem, setHoveredItem] = useState(null);

  const [getItems, { data }] = useLazyQuery((query) => {
    return query[rootQuery](args).adminBarMenuItems.map((item) => {
      return { ...item, meta: { ...item.meta } };
    });
  });

  useEffect(() => {
    getItems();
  }, []);

  if (!data) {
    return null;
  }

  const hierarchicalItems = flatListToHierarchical(data);
  return (
    <div id="wpadminbar">
      <div
        className="quicklinks"
        id="wp-toolbar"
        role="navigation"
        aria-label="Toolbar"
      >
        <ul id="wp-admin-bar-root-default">
          {hierarchicalItems
            .filter((item) => !item.group)
            .map((item) => {
              const hasPopup = item.children?.length;
              return (
                <li
                  id={`wp-admin-bar-${item.id}`}
                  className={`${hasPopup ? `menupop` : ''} ${
                    hoveredItem === item.id ? 'hover' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredItem(item.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                  }}
                >
                  <a
                    className="ab-item"
                    aria-haspopup={hasPopup ? 'true' : 'false'}
                    href={item.href}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  {hasPopup ? <Submenu item={item} /> : null}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

function Submenu({ item }) {
  const hasPopup = item.children?.length;

  if (!hasPopup) {
    return null;
  }

  return (
    <div className="ab-sub-wrapper">
      <ul id={`wp-admin-bar-${item.id}-default`} className="ab-submenu">
        {item.children.map((child) => {
          return (
            <li
              id={`wp-admin-bar-${child.id}`}
              className={hasPopup ? `menupop` : ''}
            >
              <a
                className="ab-item"
                href={child.href}
                aria-haspopup={hasPopup ? 'true' : 'false'}
                dangerouslySetInnerHTML={{
                  __html: child.title,
                }}
              />
              <Submenu item={child} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const flatListToHierarchical = (
  data = [],
  { idKey = 'id', parentKey = 'parent', childrenKey = 'children' } = {}
) => {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });
  return tree;
};
