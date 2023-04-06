import React from "react";
import Comment from "./Comment"

/*function CommentList(props) {
    return (
        <div>
            <Comment name={"신짱구1"} comment={"안녕하세요. 신짱구1입니다."} />
            <Comment name={"신짱구2"} comment={"안녕하세요. 신짱구2입니다."} />
            <Comment name={"신짱구3"} comment={"안녕하세요. 신짱구3입니다."} />
        </div>
    )
}*/
const comments = [
    {
        name: "신짱구",
        comment: "안녕하세여. 신짱구입니다."
    },
    {
        name: "신짱구",
        comment: "안녕하세여. 신짱구입니다."
    },
    {
        name: "신짱구",
        comment: "안녕하세여. 신짱구입니다."
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map(foo => {
                return (
                    <Comment name={foo.name} comment={foo.comment} />
                )
            })}
        </div>
    )
}
export default CommentList