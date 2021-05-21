import React, { useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Logo from './Logo'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    pageBar: {
      backgroundColor: palette.background.default,
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

const PageBar = React.memo<any>(() => {
  const classes = useStyles()
  const [githubStarsNo, setGithubStarsNo] = React.useState<number | null>(null)

  useEffect(() => {
    const getGithubStars = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/eventflow/EventFlow',
          {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
          }
        )
        const data = await response.json()
        setGithubStarsNo(data.stargazers_count)
      } catch (e: any) {
        console.error('Cannot retrieve Github stars')
      }
    }

    getGithubStars()
  })
  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.pageBar}>
          <Toolbar>
            <div className={classes.framework}>
              <Logo className={classes.frameworkLogo} />
              <span className={classes.frameworkName}>EventFlow</span>
            </div>
            {githubStarsNo && <span>Github Stars: {githubStarsNo}</span>}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  )
})

export default PageBar
