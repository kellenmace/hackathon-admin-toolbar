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

  useEffect(() => {
    if (data) {
      document?.body.classList.add('admin-bar');
    } else {
      document?.body.classList.remove('admin-bar');
    }
  }, [data]);

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
              const hasPopup = !!item.children?.length;
              return (
                <li
                  key={item.id}
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
                    href={item.href.replace('&amp;', '&')}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  {hasPopup ? <Submenu item={item} /> : null}
                </li>
              );
            })}
        </ul>
        {hierarchicalItems
          .filter((item) => item.group)
          .map((item) => {
            return (
              <ul
                key={item.id}
                id={`wp-admin-bar-${item.id}`}
                className={`ab-${item.id} ab-top-menu`}
              >
                {item.children
                  .filter((child) => child.id !== 'search')
                  .map((child) => {
                    const hasPopup = !!child.children?.length;
                    return (
                      <li
                        key={child.id}
                        id={`wp-admin-bar-${child.id}`}
                        className={`${hasPopup ? 'menupop' : ''} ${
                          child.id === 'my-account' ? 'with-avatar' : ''
                        } ${hoveredItem === child.id ? 'hover' : ''}`}
                        onMouseEnter={() => {
                          setHoveredItem(child.id);
                        }}
                        onMouseLeave={() => {
                          setHoveredItem(null);
                        }}
                      >
                        <a
                          className="ab-item"
                          href={child.href}
                          dangerouslySetInnerHTML={{ __html: child.title }}
                        />
                        {hasPopup
                          ? child.children.map((grandchild) => {
                              return (
                                <Submenu
                                  key={grandchild.id}
                                  item={grandchild}
                                />
                              );
                            })
                          : null}
                      </li>
                    );
                  })}
              </ul>
            );
          })}
      </div>
    </div>
  );
}

function Submenu({ item }) {
  const hasPopup = !!item.children?.length;

  if (!hasPopup) {
    return null;
  }

  return (
    <div className="ab-sub-wrapper">
      <ul id={`wp-admin-bar-${item.id}`} className="ab-submenu">
        {item.children.map((child) => {
          return (
            <li
              key={child.id}
              id={`wp-admin-bar-${child.id}`}
              className={hasPopup ? `menupop` : ''}
            >
              <a
                className="ab-item"
                href={child.href.replace('&amp;', '&')}
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
