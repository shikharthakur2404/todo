import React from 'react'

const ShowTodo = ({props, DeleteData,id , Task}) => {
  return (
    <div className="container">
      <div className="row  my-2 ">
        <div className="col-6">
          <h5>{Task}</h5>
        </div>
        <div className="col-6">
          <button
            onClick={() => {
              DeleteData(id)
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowTodo
