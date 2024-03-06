import React from "react"


function Write() {
  return (
    <div>
        <div className="title">제목</div>
        <div className='inputBox'>
            <input type='text' placeholder='제목을 입력하세요.' />
            <br />
            <textarea cols={30} rows={3} placeholder='본문을 입력하세요.'></textarea>
        </div>
    </div>
  )
}

export default Write