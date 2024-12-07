import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger, DrawerContent, DrawerHeader, DrawerRoot, DrawerTitle, DrawerTrigger } from './ui/drawer';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
/* IMAGES */

function Drawer() {
  const [open, setOpen] = useState(false)
  return (
    <div className="Drawer">
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
              <Link to='/regalo-di-nozze'>Regalo di Nozze</Link>
              <Link to='/'>Viaggio di Nozze</Link>
            </div>
          </DrawerBody>
          <DrawerCloseTrigger className='close'/>
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
}

export default Drawer;
