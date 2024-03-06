import React from 'react'
import axios from 'axios'



const submitTest = () => {
    axios.get("http://localhost:8000/", {})
    .then(() => {
        alert("등록 완료!");
    })
};

function BoardList() {
  return (
    <div>
    <table>
        <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td><input type="checkbox"></input></td>
                <td>1</td>
                <td>게시글1</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
            <tr>
            <td><input type="checkbox"></input></td>
                <td>2</td>
                <td>게시글2</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
            <tr>
            <td><input type="checkbox"></input></td>
                <td>3</td>
                <td>게시글2</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
        </tbody>
    </table>

    <button className='write' onClick={submitTest}>write</button>
    <button className='edit'>edit</button>
    <button className='remove'>remove</button>

    </div>
  )
}

export default BoardList
