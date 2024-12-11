import './style/Home.css';
import SposiImg from './../static/images/sposi-nobg.png'
import { useState } from 'react';
import Drawer from '../components/Drawer';
import FioreImg from './../static/images/fiori2.png'
import Sfondo from './../static/images/wc.jpg'

function Home() {
  const [open, setOpen] = useState(false)
  const [allImagesLoaded, setAIL] = useState(false)
  const [style, setS] = useState({opacity: '0'})
  let firstLoaded = false
  let secondLoaded = false
  let thirdLoaded = false
  const handleIMGLoad = (number) => {
    firstLoaded = number === 1 ? true : firstLoaded
    secondLoaded =  number === 2 ? true : secondLoaded
    thirdLoaded = number === 3 ? true : thirdLoaded
    if (firstLoaded === true && secondLoaded === true && thirdLoaded === true) {
      setAIL(true)
      setS({opacity: '1'})
    }
  }
  const imgStyle = window.innerHeight > window.innerWidth ? {height: '50em'} : {width: '100%'}
  return (
    <div className='Home w-full box-border p-2 flex flex-col items-center justify-around'>
      {!allImagesLoaded ? 
      <div className='l-wrapper flex flex-col items-center justify-center'>
        <div className='l-title flex flex-col items-center justify-center'>PS</div>
      </div> : <></>}
      <div style={style}>
        <img className='header-bg' style={imgStyle} src={Sfondo} onLoad={() => handleIMGLoad(1)}/>
        <img className='h-home' src={FioreImg} onLoad={() => handleIMGLoad(3)}/>
        <div className='h-writes'>
          <div className='h-titolo'>Pietro e Serena</div>
          <div className='h-sottotitolo'>annunciano con gioia il loro matrimonio</div>
          <div className='h-data'>26 aprile 2025</div>
        </div>
        <Drawer />
        <div className='h-img'>
          <img className='h-img-i' src={SposiImg} onLoad={() => handleIMGLoad(2)} ></img>
        </div>
      </div>

    </div>
  );
}

export default Home;
