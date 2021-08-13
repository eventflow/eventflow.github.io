import React from 'react'
import { Typography } from '@material-ui/core'
import Logo from './../components/Logo'
import Button from '@material-ui/core/Button'
import CodeExample from './../components/CodeExample'
import PageBar from './../components/PageBar'
import FlightRoundedIcon from '@material-ui/icons/FlightRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import LinearScaleRoundedIcon from '@material-ui/icons/LinearScaleRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography }: Theme) =>
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
      },
      borderBottom: '1px solid rgb(229, 233, 242)',
    },
    title: {
      fontSize: typography.pxToRem(spacing(7)),
      fontWeight: 600,
      lineHeight: 'normal',
      maxWidth: '480px',
      marginRight: spacing(3),
    },
    subtitle: {
      fontSize: typography.pxToRem(spacing(4)),
      fontWeight: 400,
      display: 'block',
    },
    logo: {
      fontSize: typography.pxToRem(260),
    },
    uspButtons: {
      paddingTop: spacing(7),
    },
    uspButton: {
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      color: '#fff',
      borderRadius: '4px',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: typography.pxToRem(spacing(3)),
      '&:hover, &:active, &:focus': {
        backgroundColor: palette.primary,
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
        '& p': {
          margin: 0,
          maxWidth: '450px',
          fontSize: typography.pxToRem(18),
        },
      },
    },
    featureIcon: {
      fontSize: typography.pxToRem(spacing(9)),
      marginRight: spacing(2),
    },
    featureTitle: {},
  })

const useStyles = makeStyles(styles)

const HomePage = React.memo<any>(() => {
  const classes = useStyles()
  return (
    <div>
      <PageBar />
      <section className={classes.topSection}>
        <div>
          <Typography component="h1" className={classes.title}>
            Easy to use async/await first CQRS+ES framework{' '}
            <span className={classes.subtitle}>
              for the Microsoft .NET platform
            </span>
          </Typography>
          <Logo className={classes.logo} />
        </div>
        <div className={classes.uspButtons}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.uspButton}
          >
            Getting Started
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.uspButton}
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
              <Typography
                component="h2"
                variant="h4"
                className={classes.featureTitle}
              >
                Easy to use
              </Typography>
              <p>
                Designed with sensible defaults and implementations that make it
                easy to create an example application
              </p>
            </div>
          </li>
          <li>
            <SettingsRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography
                component="h2"
                variant="h4"
                className={classes.featureTitle}
              >
                Highly configurable and extendable
              </Typography>
              <p>
                EventFlow uses interfaces for every part of its core, making it
                easy to replace or extend existing features with custom
                implementation
              </p>
            </div>
          </li>
          <li className="centeredIcon">
            <LinearScaleRoundedIcon
              className={classes.featureIcon}
              color="primary"
            />
            <div>
              <Typography
                component="h2"
                variant="h4"
                className={classes.featureTitle}
              >
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
              <Typography
                component="h2"
                variant="h4"
                className={classes.featureTitle}
              >
                MIT licensed
              </Typography>
              <p>Easy to understand and use license for enterprise</p>
            </div>
          </li>
        </ul>
      </section>
      <CodeExample />
    </div>
  )
})

export default HomePage
