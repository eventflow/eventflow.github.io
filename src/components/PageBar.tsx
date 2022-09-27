import React from 'react'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { Logo as SvgLogo, MenuLinks } from './'
import { styled } from '@mui/material/styles'

interface IElevationScrollProps {
  children: React.ReactElement
}

const ElevationScroll = React.memo<IElevationScrollProps>(({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
})

const AppBar = styled(MuiAppBar)<AppBarProps>(({}) => ({
  background:
    'linear-gradient(to right, rgb(219, 230, 253) 0%, rgb(241, 236, 195) 100%)',
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({}) => ({
  justifyContent: 'space-between',
}))

const Framework = styled('div')(({ theme: { typography, palette } }) => ({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    fontWeight: 800,
    fontSize: typography.pxToRem(24),
    color: palette.text.primary,
  },
}))

const Logo = styled(SvgLogo)(({ theme: { typography, spacing } }) => ({
  fontSize: typography.pxToRem(32),
  marginRight: '12px',
}))

export const PageBar = React.memo<any>(() => {
  return (
    <ElevationScroll>
      <>
        <AppBar position="sticky">
          <Toolbar>
            <Framework>
              <Logo />
              <span>EventFlow</span>
            </Framework>
            <MenuLinks />
          </Toolbar>
        </AppBar>
      </>
    </ElevationScroll>
  )
})
