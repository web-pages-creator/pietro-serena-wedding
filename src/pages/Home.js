import './style/Home.css';
import SposiImg from './../static/images/sposi-nobg.png'
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from './../components/ui/drawer';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";


function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className='Home w-full h-full box-border p-6 flex flex-col items-center justify-start'>
      <div className='main w-screen h-screen flex flex-col items-center justify-start'>
        <div className='h-titolo'>Pietro e Serena</div>
        <div className='h-sottotitolo'>annunciano con gioia il loro matrimonio</div>
        <div className='h-data'>26 aprile 2025</div>
        <DrawerRoot className='h-drawler' open={open} placement="end" onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger>
          <GiHamburgerMenu className='hamburger' />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle><div className='titolo-drawler'>Pietro e Serena</div></DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className='d-body'>
              <Link to='/'>Home</Link>
              <Link to='/'>Programma</Link>
              <Link to='/regalo-di-nozze'>Regalo di Nozze</Link>
              <Link to='/'>Viaggio di Nozze</Link>
            </div>
          </DrawerBody>
          <DrawerCloseTrigger className='close'/>
        </DrawerContent>
      </DrawerRoot>
        <div className='h-img'>
          <img className='h-img-i' src={SposiImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
