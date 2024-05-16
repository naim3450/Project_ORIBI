import React from 'react'
import Product from '../components/layouts/product'
import hedphone from '../assets/hedphone.jpg'
import cape from '../assets/cape.jpg'
import handWatch from '../assets/handWatch.jpg'
import herbal from '../assets/herbal.jpg'
import mouse from '../assets/mouse.jpg'
import schoolBag from '../assets/schoolBag.jpg'
import sunglass from '../assets/sunglass.jpg'

const Shop = () => {
  return (
    <>
    
      <div className=' grid grid-cols-3 g place-items-center mt-[15px]'>
        <Product imgSrc={cape} badge={`New`} />
        <Product imgSrc={hedphone} badge={`New`} />
        <Product imgSrc={handWatch} badge={`New`} />
        <Product imgSrc={herbal} badge={`New`} />
        <Product imgSrc={mouse} badge={`New`} />
        <Product imgSrc={schoolBag} badge={`New`} />
        <Product imgSrc={sunglass} badge={`New`} />
        <Product imgSrc={cape} badge={`New`} />
        <Product imgSrc={hedphone} badge={`New`} />
        <Product imgSrc={handWatch} badge={`New`} />
        <Product imgSrc={herbal} badge={`New`} />
        <Product imgSrc={mouse} badge={`New`} />
        <Product imgSrc={schoolBag} badge={`New`} />
        <Product imgSrc={sunglass} badge={`New`} /> 
      </div>
    </>
  )
}

export default Shop