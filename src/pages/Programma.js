import './style/Programma.css';
import Header from '../components/Header';
import SposiImg from './../static/images/sposi-nobg.png'
import FioreImg from './../static/images/fiori2.png'
import Sfondo from './../static/images/wc.jpg'
import SM from './../static/images/sm.png'
import { Link } from 'react-router-dom';

function Programma() {
  const imgStyle = window.innerHeight > window.innerWidth ? {height: '50em', zIndex: '0'} : {width: '100%',  zIndex: '0'}
  return (
    <div className='Programma flex flex-col p-6 items-center justify-around'>
      <img className='header-bg' style={imgStyle} src={Sfondo}/>
      <img className='fiore p-fiore' src={FioreImg}/>
      <Header className='header'/>
      <div className='titolo-pagina'>Programma</div>
      <div className='app-sm'>ore 15 inizio celebrazione presso
        <a href='https://g.co/kgs/AHjeGKH' target='_blank' className='parrocchia'>Parrocchia San Marco Evangelista<br/>in Agro Laurentino</a>
        <a href='https://g.co/kgs/AHjeGKH' target='_blank' className='via'>p.zza Giuliani e Dalmati 20, 00143 Roma</a>
      </div>
      <img className='san-marco' src={SM}/>
      <div className='app-sm'>conclusa la celebrazione si terrà il ricevimento presso
        <a href='https://www.google.com/maps/dir//collina+dei+sogni/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x132f55c2be7bc799:0x54015d1d51d3360d?sa=X&ved=1t:3061&ictx=111' target='_blank' className='parrocchia'>Collina dei Sogni</a>
        <a href='https://www.google.com/maps/dir//collina+dei+sogni/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x132f55c2be7bc799:0x54015d1d51d3360d?sa=X&ved=1t:3061&ictx=111' target='_blank' className='via'>Piazzale borgo s. martino 00052 cerveteri rm</a>
      </div>
    </div>
  );
}

export default Programma;
