import React from 'react'
import CarouselwithInterval from '../components/CarouselwithInterval'
import Classes from '../styles/Home.module.css'
import Category from '../components/Category'
import Books from '../components/Books'

function Home() {
  return (
    <div className={Classes.couresolItem}>
        <CarouselwithInterval />
        <Category />
        <Books />
    </div>
  )
}

export default Home