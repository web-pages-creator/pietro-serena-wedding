import { CloseButton } from './close-button'
import * as React from 'react'
import { Drawer as ChakraDrawer, Portal } from '@chakra-ui/react'

export const DrawerContent = React.forwardRef(
  function DrawerContent(props, ref) {
    const { children, portalled = true, portalRef, offset, ...rest } = props
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraDrawer.Positioner padding={offset}>
          <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
            {children}
          </ChakraDrawer.Content>
        </ChakraDrawer.Positioner>
      </Portal>
    )
  },
)

export const DrawerCloseTrigger = React.forwardRef(
  function DrawerCloseTrigger(props, ref) {
    return (
      <ChakraDrawer.CloseTrigger
        position='absolute'
        top='2'
        insetEnd='2'
        {...props}
        asChild
      >
        <CloseButton size='sm' ref={ref} />
      </ChakraDrawer.CloseTrigger>
    )
  },
)

export const DrawerTrigger = ChakraDrawer.Trigger
export const DrawerRoot = ChakraDrawer.Root
export const DrawerFooter = ChakraDrawer.Footer
export const DrawerHeader = ChakraDrawer.Header
export const DrawerBody = ChakraDrawer.Body
export const DrawerBackdrop = ChakraDrawer.Backdrop
export const DrawerDescription = ChakraDrawer.Description
export const DrawerTitle = ChakraDrawer.Title
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger