import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Navigation } from './Navigation'

interface sidebarProps {
    collapse: boolean
}

const SideBar: FC <sidebarProps> = (props) => {
  return (
    <React.Fragment>
    <Box w="full">
      <Navigation collapse={props.collapse} />
    </Box>
  </React.Fragment>
  )
}

export default SideBar