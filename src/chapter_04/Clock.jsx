//4.4 시계 만들기

import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕 리액트!!!</h1>
            <h2>현재시간 : {new Date().toLocaleDateString()}</h2>
        </div>
    )
}
export default Clock;