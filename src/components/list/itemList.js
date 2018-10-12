import React from 'react'
import Item from '../item/item'
import './itemList.css'

function ItemList(props) {
  return (
    <div className="List">
      {
        props.list.map((item) => {
          return <Item {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default ItemList