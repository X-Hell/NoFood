import React from 'react'
import RecipeCard from '../Recipies/RecipeCard'

const RecLayout = () => {
  return (
    <div className='m-2 p-2 h-screen bg-green-400'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
    </div>
  )
}

export default RecLayout