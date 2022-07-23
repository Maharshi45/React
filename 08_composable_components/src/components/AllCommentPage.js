import { useState } from "react";
import CommentList from "./CommentList";
import CommentApi from '../data/CommentApi';

function AllCommentPage(props) {

    let [comments] = useState(CommentApi.getAllComments());

    return (
        <>
            <h1>Comments</h1>
            <CommentList comments={comments}></CommentList>
        </>
    );
}

export default AllCommentPage;