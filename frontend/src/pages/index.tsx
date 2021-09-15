import React from 'react'
import Typography from '@material-ui/core/Typography'
import Logo from './../components/Logo'
import Button from '@material-ui/core/Button'
import CodeExample from './../components/CodeExample'
import PageBar from './../components/PageBar'
import FlightRoundedIcon from '@material-ui/icons/FlightRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import LinearScaleRoundedIcon from '@material-ui/icons/LinearScaleRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography, breakpoints }: Theme) =>
  createStyles({
    topSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      flexDirection: 'column',
      padding: spacing(7, 0),
      '& div': {
        display: 'flex',
        flexWrap: 'wrap',
      },
      borderBottom: '1px solid rgb(229, 233, 242)',
      [breakpoints.down('sm')]: {
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
      },
    },
    title: {
      fontSize: typography.pxToRem(spacing(7)),
      fontWeight: 600,
      lineHeight: 'normal',
      maxWidth: '480px',
      marginRight: spacing(3),
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(3)),
        fontWeight: 400,
        marginRight: 0,
      },
    },
    subtitle: {
      fontSize: typography.pxToRem(spacing(4)),
      fontWeight: 400,
      display: 'block',
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(3)),
        display: 'inline',
      },
    },
    logo: {
      fontSize: typography.pxToRem(260),
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    uspButtons: {
      // paddingTop: spacing(7),
    },
    uspButton: {
      paddingTop: spacing(1),
      marginTop: spacing(7),
      paddingBottom: spacing(1),
      color: '#fff',
      borderRadius: `${spacing(0.5)}px`,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: typography.pxToRem(spacing(3)),
      '&:hover, &:active, &:focus': {
        backgroundColor: palette.secondary.main,
        boxShadow: 'none',
      },
      '&:first-of-type': {
        marginRight: spacing(2),
        [breakpoints.down('sm')]: {
          marginRight: spacing(1),
        },
      },
      width: '204px',
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(3)),
        width: 'auto',
      },
    },
    textButton: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      color: '#fff',
      borderRadius: `${spacing(0.5)}px`,
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: typography.pxToRem(spacing(2)),
      minWidth: '150px',
      '&:hover, &:active, &:focus': {
        backgroundColor: palette.secondary.main,
        boxShadow: 'none',
      },
      '&:first-of-type': {
        marginRight: spacing(2),
      },
    },
    keyFeatures: {
      backgroundColor: '#fff',
      padding: spacing(9, 6),
      '& ul': {
        margin: '0 auto',
        padding: 0,
        listStyleType: 'none',
        maxWidth: '740px',
      },
      '& li': {
        display: 'flex',
        margin: 'auto',
        alignItems: 'start',
        '&.centeredIcon': {
          alignItems: 'center',
        },
        '&:not(:first-child)': {
          marginTop: spacing(4),
        },
        '& h2': {
          [breakpoints.down('sm')]: {
            fontSize: typography.pxToRem(spacing(3)),
          },
        },
        '& p': {
          margin: spacing(1, 0, 0),
          maxWidth: '450px',
          fontSize: typography.pxToRem(18),
          [breakpoints.down('sm')]: {
            fontSize: typography.pxToRem(spacing(2)),
          },
        },
      },
      [breakpoints.down('sm')]: {
        padding: spacing(4, 2),
      },
    },
    featureIcon: {
      fontSize: typography.pxToRem(spacing(9)),
      marginRight: spacing(2),
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(6)),
      },
    },
    codeSection: {
      padding: spacing(7, 0),
      backgroundColor: '#0A1931',
    },
    footer: {
      padding: spacing(4, 0),
      backgroundColor: palette.background.default,
      textAlign: 'center',
    },
  })

const useStyles = makeStyles(styles)

const HomePage = React.memo<any>(() => {
  const classes = useStyles()
  const exampleRef = React.useRef<HTMLElement | null>(null)
  const pageBarRef = React.useRef<HTMLElement>()

  const scrollToCodeExample = () => {
    const pageBarWidth = pageBarRef.current?.clientHeight || 0
    const offsetTop =
      exampleRef && exampleRef.current ? exampleRef.current.offsetTop : 0
    window.scrollTo({
      top: offsetTop - (pageBarWidth + 24), // 24 for more spacing
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <PageBar ref={pageBarRef} />
      <section className={classes.topSection}>
        <div>
          <Typography component="h1" className={classes.title}>
            Easy to use async/await first CQRS+ES framework{' '}
            <span className={classes.subtitle}>
              for the Microsoft .NET platform.
            </span>
          </Typography>
          <Logo className={classes.logo} />
        </div>
        <div className={classes.uspButtons}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.uspButton}
            component="a"
            onClick={scrollToCodeExample}
          >
            Example
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.uspButton}
            component="a"
            href="https://docs.geteventflow.net/"
          >
            Documentation
          </Button>
        </div>
      </section>
      <section className={classes.keyFeatures}>
        <ul>
          <li>
            <FlightRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography component="h2" variant="h4">
                Easy to use
              </Typography>
              <p>
                Designed with sensible defaults and implementations that make it
                easy to create an example application.
              </p>
            </div>
          </li>
          <li>
            <SettingsRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography component="h2" variant="h4">
                Highly configurable and extendable
              </Typography>
              <p>
                EventFlow uses interfaces for every part of its core, making it
                easy to replace or extend existing features with custom
                implementation.
              </p>
            </div>
          </li>
          <li className="centeredIcon">
            <LinearScaleRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography component="h2" variant="h4">
                No use of threads or background workers
              </Typography>
            </div>
          </li>
          <li>
            <MenuBookRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography component="h2" variant="h4">
                MIT licensed
              </Typography>
              <p>Easy to understand and use license for enterprise.</p>
            </div>
          </li>
        </ul>
      </section>
      <section
        className={classes.codeSection}
        id="code-example-section"
        ref={exampleRef}
      >
        <CodeExample />
      </section>
      <section className={classes.footer}>
        <div>
          <Button
            color="secondary"
            variant="contained"
            className={classes.textButton}
            component="a"
            href="https://docs.geteventflow.net/"
          >
            Documentation
          </Button>
          <Button
            color="secondary"
            variant="contained"
            className={classes.textButton}
            component="a"
            href="https://github.com/eventflow/EventFlow"
          >
            GitHub
          </Button>
        </div>
      </section>
    </div>
  )
})

export default HomePage
