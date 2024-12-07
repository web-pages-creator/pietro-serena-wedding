import { DrawerActionTrigger, DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerFooter, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { useState } from 'react';
import './style/Header.css';
import Titolo from './Titolo';
import { Button } from '@chakra-ui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
/* IMAGES */

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="Header w-full box-border flex flex-row items-center justify-between">
      <Link to='/'><div className='titolo'>Pietro e Serena</div></Link>
      <DrawerRoot className='root' open={open} placement="end" onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger>
          <GiHamburgerMenu className='hamburger' />
        </DrawerTrigger>
        <DrawerContent className='d'>
          <DrawerHeader>
            <DrawerTitle><div className='titolo-drawler'>Pietro e Serena</div></DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <div className='d-body'>
              <Link to='/'>Home</Link>
              <Link to='/'>Programma</Link>
              <Link to='/'>Regalo di Nozze</Link>
              <Link to='/'>Viaggio di Nozze</Link>
            </div>
          </DrawerBody>
          <DrawerCloseTrigger className='close'/>
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
}

export default Header;
