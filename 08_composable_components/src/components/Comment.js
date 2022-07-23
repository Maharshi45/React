function Comment(props) {
    return (
        <tr>
            <td>{props.author}</td>
            <td>{props.children}</td>
        </tr>
    );
}

export default Comment;