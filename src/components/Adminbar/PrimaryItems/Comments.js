
export default function Comments({ commentsCount, editComments }) {
  
  return (
    <li id="wp-admin-bar-comments">
      <a className="ab-item" href={editComments}>
        <div dangerouslySetInnerHTML={{__html: commentsCount }}></div>
      </a>
    </li>
  )
}