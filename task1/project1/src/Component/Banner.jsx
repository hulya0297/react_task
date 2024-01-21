import './banner.css'
import img1 from '../assets/img1.png'
const Banner = () => {
  return (
    <div className='banner'>
      <img src={img1} alt="MacBook banner" className='banner_image'/>
    </div>
  )
}

export default Banner