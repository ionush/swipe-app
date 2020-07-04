import React, { useState } from 'react'
import './App.css'
import TinderWrapper from './TinderWrapper'

const db = [
  {
    name: 'Richard Hendricks',

    image: ['./img/richard.jpg', 'image2', 'image3'],
  },
  {
    name: 'Erlich Bachman',
    image: ['./img/erlich.jpg'],
  },
  {
    name: 'Monica Hall',
    image: ['./img/monica.jpg'],
  },
  {
    name: 'Jared Dunn',
    image: ['./img/jared.jpg'],
  },
  {
    name: 'ADIDAS | CLASSIC BACKPACK | LEGEND INK MULTICOLOUR',
    image: ['./img/bag1.jpg', './img/bag2.jpg', './img/bag3.jpg'],
    description:
      'The adidas BP Classic Cap features a pre-curved brim to keep your face shaded, while a hook-and-loop adjustable closure provides a comfortable fit. With a 3-Stripes design and reflective accents. The perfect piece to top off any outfit.',
    url: 'https://hazzanazza.myshopify.com/products/adidas-classic-backpack-legend-ink-multicolour',
    price: '£50.00',
  },
]

function App() {
  return (
    <div className="App">
      <div className="swipe-header">Swipe!</div>
      {/* <div className="swipe-content"> */}
      <div className="cardContainer">
        {db.map((character) => (
          <TinderWrapper item={character} />
        ))}
      </div>
      {/* {lastDirection ? <h2 className="infoText">You swiped {lastDirection}</h2> : <h2 className="infoText" />} */}
      {/* </div> */}
    </div>
  )
}

export default App
