/* eslint-disable no-return-assign */

import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFULAT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(element.current)
  }, [element])

  return <Article ref={element}>
    {
      show && <>
        <a href={`/detail/${id}`}>
          <ImgWrapper>
            <Img src={src = DEFULAT_IMAGE} alt='detail image' />
          </ImgWrapper>
        </a>
        <Button>
          <MdFavoriteBorder size='32px' />{likes} likes!
        </Button>

      </>
    }

         </Article>
}
