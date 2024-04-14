import React from 'react'
import AddItem from '../Inventory/AddItem'
import ShowItem from '../Inventory/ItemGrid'

const InvLayout = () => {
  return (
    <div className='h-screen m-2 p-2 bg-red-400'>
    <AddItem />
    <ShowItem />
    </div>
  )
}

export default InvLayout