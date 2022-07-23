import React from 'react';
import Comment from './Comment';

function CommentList(props) {
    let commentNodes = props.comments.map((comment) => (
        <React.Fragment key={comment.id}>
            <Comment author={comment.author}>
                {comment.text}
            </Comment>
        </React.Fragment>
    ));
    return (
        <>
            <table border="1px solod black">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {commentNodes}
                </tbody>
            </table>
        </>
    );
}

export default CommentList;