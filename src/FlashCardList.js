import React from 'react'
import FlashCard from './FlashCard'

export default function FlashCardList({flashCards}) {
  return (
    <div className='card-grid'>
      {flashCards.map(flashcard=>{
          return <FlashCard flashcard={flashcard} key={flashcard.id}/>
      })}
    </div>
  )
}
