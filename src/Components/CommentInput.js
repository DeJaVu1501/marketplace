import { useState } from "react"
import { connect } from "react-redux"
import { actionAddComment } from "../actions"


const CommentInput = ({onPost}) => {
    const [comment,setComment] = useState('')
    return (
        <>  
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Ваш коментарий" />
            <button onClick={()=> comment.length>0 && onPost(comment)}>Добавить коментарий</button>
        </>
    )
}

const CCommentInput = connect(null,{onPost: actionAddComment})(CommentInput)

export default CCommentInput