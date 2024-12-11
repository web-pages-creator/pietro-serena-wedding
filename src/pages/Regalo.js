import { Link } from 'react-router-dom';
import Titolo from '../components/Titolo';
import './style/Regalo.css';
import { LuPlaneTakeoff } from "react-icons/lu";
import Header from '../components/Header';
import SposiImg from './../static/images/sposi-nobg.png'
import FioreImg from './../static/images/fiore.png'
import Sfondo from './../static/images/wc.jpg'
import { useState } from 'react';

function Regalo() {
  const imgStyle = window.innerHeight > window.innerWidth ? {height: '50em'} : {width: '100%'}
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
  return (
    <div className='Regalo flex flex-col p-6 items-center justify-around'>
      {!allImagesLoaded ? 
      <div className='l-wrapper flex flex-col items-center justify-center'>
        <div className='l-title flex flex-col items-center justify-center'>PS</div>
      </div> : <></>}
      <div style={style}>

        <img className='header-bg' style={imgStyle} src={Sfondo}  onLoad={() => handleIMGLoad(1)}/>
        <img className='fiore' src={FioreImg}  onLoad={() => handleIMGLoad(2)}/>
        <Header className='header'/>
        
          <div className='titolo-pagina'>Regalo di nozze</div>
          <div className='img'>
            <img src={SposiImg}  onLoad={() => handleIMGLoad(3)}/>
          </div>
          <div className='content'>
          <div className='cari'>Cari invitati,</div><br/>
          Se avete il piacere di contribuire a questo nostro inizio insieme, potrete partecipare concretamente
          alla realizzazione della nostra nuova casa:<br/><br/>

          IBAN: IT70F0306903213100000016354<br/>
          Banca: Intesa Sanpaolo<br/>
          Intestato a: Pietro Quadrini<br/><br/>

          Con gratitudine,<br/>
          <div className='firma'>Pietro e Serena</div>
          {/*  <div className='normal'>Siamo felici di condividere con voi il giorno del nostro <div className='corsivo'>matrimonio</div>! Per chi volesse farci un regalo, abbiamo scelto di concentrare il vostro affetto sul nostro sogno: <div className='corsivo'>il viaggio di nozze</div>.<br/><br/></div>
            Se desiderate contribuire, potete farlo tramite bonifico al seguente IBAN: <br /><br/><div className='iban'>IT70F0306903213100000016354</div><br/><div className='normal'><div className='corsivo'>Grazie</div> di cuore per il vostro affetto e supporto!</div>
          */}
          </div>
      </div>
    </div>
  );
}

export default Regalo;
