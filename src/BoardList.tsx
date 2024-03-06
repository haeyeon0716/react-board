import React from 'react'


function BoardList() {
  return (
    <div className="boardlist">
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
            <input type="checkbox"></input>
                <td>1</td>
                <td>게시글1</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
            <tr>
            <input type="checkbox"></input>
                <td>2</td>
                <td>게시글2</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
            <tr>
            <input type="checkbox"></input>
                <td>3</td>
                <td>게시글2</td>
                <td>artistJay</td>
                <td>2022-03-19</td>
            </tr>
        </tbody>
        <button className='write'>write</button>
        <button className='edit'>edit</button>
        <button className='remove'>remove</button>
    </div>
  )
}

export default BoardList
