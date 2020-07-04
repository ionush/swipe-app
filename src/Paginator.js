import React from 'react'
import './Paginator.css'

const Paginator = ({ selected, items }) => {
  return (
    <div className="paginator">
      {items.map((e, i) =>
        selected === i ? (
          <div className="individualPage individualPage__selected" style={{ 'background-image': e }} />
        ) : (
          <div className="individualPage" />
        )
      )}
    </div>
  )
}

export default Paginator
