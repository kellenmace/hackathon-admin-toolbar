
export default function EditContent({ editPost }) {
  console.log(editPost)
  return (
    <li id="wp-admin-bar-edit">
      <a className="ab-item" href={editPost}>
        <i className="bi bi-pencil" id="icon"></i>
        Edit Post
      </a>
    </li>
  )
}