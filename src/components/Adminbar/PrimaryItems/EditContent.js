
export default function EditContent({ editPost }) {
  console.log(editPost)
  return (
    <li id="wp-admin-bar-edit">
      <a className="ab-item" href={editPost}>
        Edit Post
      </a>
    </li>
  )
}