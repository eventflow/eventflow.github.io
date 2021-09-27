import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Logo, MenuLinks } from './'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography, mixins }: Theme) =>
  createStyles({
    pageBar: {
      background:
        'linear-gradient(to right, rgb(219, 230, 253) 0%, rgb(241, 236, 195) 100%)',
    },
    pageBarOffset: mixins.toolbar,
    toolbar: {
      justifyContent: 'space-between',
    },
    framework: {
      display: 'flex',
      alignItems: 'center',
    },
    frameworkLogo: {
      fontSize: typography.pxToRem(spacing(4)),
      marginRight: '12px',
    },
    frameworkName: {
      fontWeight: 800,
      fontSize: typography.pxToRem(spacing(3)),
      color: palette.text.primary,
    },
  })

const useStyles = makeStyles(styles)

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

export const PageBar = React.memo<any>(() => {
  const classes = useStyles()
  return (
    <ElevationScroll>
      <>
        <AppBar className={classes.pageBar} position="fixed">
          <Toolbar className={classes.toolbar}>
            <div className={classes.framework}>
              <Logo className={classes.frameworkLogo} />
              <span className={classes.frameworkName}>EventFlow</span>
            </div>
            <MenuLinks />
          </Toolbar>
        </AppBar>
        <div className={classes.pageBarOffset} />
      </>
    </ElevationScroll>
  )
})
