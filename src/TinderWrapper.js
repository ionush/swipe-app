import React, { useState } from 'react'
import './TinderWrapper.css'
import TinderCard from 'react-tinder-card'
import Paginator from './Paginator'
import { FaShoppingCart } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { BsInfoCircleFill } from 'react-icons/bs'

const TinderWrapper = ({ className, children, item }) => {
  const [isExpand, setExpand] = useState(false)
  const [xPos, setXPos] = useState(0)
  const [isModal, setModal] = useState(false)
  const [isShare, setShare] = useState(false)
  const [modalType, setModalType] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)

  const triggerModal = () => {
    setModal(true)
    setTimeout(() => {
      setModal(false)
    }, 750)
  }
  const triggerShare = () => {
    setShare(true)
    setTimeout(() => {
      setShare(false)
    }, 750)
  }
  const handleLeft = () => {
    handleImage('left')
  }
  const handleRight = () => {
    handleImage('right')
  }

  const normalizeName = (name, type) => {
    const arr = name.split('|')
    if (arr.length && arr.length > 1) {
      if (type === 'description') {
        return arr[arr.length - 1]
      }
      if (type === 'title') {
        return arr[0] + arr[1]
      }

      return name
    }
  }

  const normalizeDescription = (description) => {
    if (description.length > 120) {
      return description.replace(/^(.{120}[^\s]*).*/, '$1') + '...'
    }
    return description
  }

  const [lastDirection, setLastDirection] = useState()
  const handleImage = (direction) => {
    if (direction === 'left') {
      selectedImage > 0 ? setSelectedImage((index) => index - 1) : setSelectedImage(0)
    } else if (direction === 'right') {
      selectedImage < item.image.length - 1
        ? setSelectedImage((index) => index + 1)
        : setSelectedImage(item.image.length - 1)
    }
  }
  const handleProductUrl = () => {
    //link to prouctUrl
  }

  const swiped = (direction, nameToDelete) => {
    if (direction == 'right') {
      console.log('add to cart, trigger modal')
      triggerModal()
    }
    if (direction == 'left') {
      console.log('skip product')
    }
    if (direction == 'up') {
      triggerShare()
    }

    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <>
      <TinderCard
        className="swipe"
        key={item.name}
        onSwipe={(dir) => swiped(dir, item.name)}
        onCardLeftScreen={() => outOfFrame(item.name)}
        onDrag={(e) => {
          console.log('dragging', e)
        }}
      >
        <div className="card">
          <div className="contentWrapper">
            <div className="imagePagination">
              <Paginator selected={selectedImage} items={item.image} />
            </div>
            <div className="imageWrapper">
              <div className="infoIcon" onClick={() => handleProductUrl()} onTouchStart={() => handleProductUrl()}>
                <BsInfoCircleFill />
              </div>
              <div
                className="image"
                style={{
                  backgroundImage: `url(${item.image[selectedImage]})`,
                  // backgroundSize: !isExpand ? '200%' : '100%',
                  backgroundSize: !isExpand ? '' : 'contain',
                  backgroundPosition: !isExpand ? 'center' : 'top',
                  height: !isExpand ? '490px' : '430px',
                  paddingTop: !isExpand ? '0px' : '30px',
                }}
              >
                <div className="cardSection topSection">
                  <div className="leftRightWrapper">
                    <div
                      className="cardSection leftSection"
                      onClick={() => {
                        handleLeft()
                      }}
                      onTouchStart={() => {
                        handleLeft()
                      }}
                    ></div>
                    <div
                      className="cardSection rightSection"
                      onClick={() => {
                        handleRight()
                      }}
                      onTouchStart={() => {
                        handleRight()
                      }}
                    ></div>
                  </div>
                </div>

                {!isExpand && (
                  <div
                    className="cardSection bottomSection"
                    onClick={() => {
                      setExpand((isExpand) => !isExpand)
                    }}
                    onTouchStart={() => {
                      setExpand((isExpand) => !isExpand)
                    }}
                  >
                    <h2>
                      {`${normalizeName(item.name, 'title')} `}
                      <small> {item.price || '£50.00'}</small>
                    </h2>
                  </div>
                )}

                {isExpand && (
                  <div
                    className="expandedSection"
                    onClick={() => {
                      setExpand((isExpand) => !isExpand)
                    }}
                    onTouchStart={() => {
                      setExpand((isExpand) => !isExpand)
                    }}
                  >
                    <h2>
                      {`${normalizeName(item.name, 'description')} `}
                      <small> {item.price || '£50.00'}</small>
                    </h2>
                    <h4>{normalizeDescription(item.description || '')}</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </TinderCard>
      {isModal && (
        <div className="modal">
          <FaShoppingCart />
        </div>
      )}
      {isShare && (
        <div className="modal">
          <FiShare />
        </div>
      )}
    </>
  )
}

export default TinderWrapper
