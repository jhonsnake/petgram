import React from 'react'
import { PhotoCard } from '../PhotoCard/index'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
          <PhotoCard key={id} />
        ))
      }
    </ul>
  )
}
