import './style/Home.css';
import SposiImg from './../static/images/sposi-nobg.png'
import { useState } from 'react';
import Drawer from '../components/Drawer';


function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className='Home w-full box-border p-2 flex flex-col items-center justify-around'>
      <div className='h-writes'>
        <div className='h-titolo'>Pietro e Serena</div>
        <div className='h-sottotitolo'>annunciano con gioia il loro matrimonio</div>
        <div className='h-data'>26 aprile 2025</div>
      </div>
      <Drawer />
      <div className='h-img'>
        <img className='h-img-i' src={SposiImg}></img>
      </div>
    </div>
  );
}

export default Home;
