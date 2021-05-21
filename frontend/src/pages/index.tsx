import React from 'react'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Logo from './../components/Logo'
import Button from '@material-ui/core/Button'
import CodeExample from './../components/CodeExample'
import PageBar from './../components/PageBar'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
    topSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: '100px',
    },
    title: {
      fontSize: typography.pxToRem(spacing(7)),
      fontWeight: 600,
      lineHeight: 'normal',
      maxWidth: '480px',
    },
    subtitle: {
      fontSize: typography.pxToRem(spacing(4)),
      fontWeight: 400,
      display: 'block',
    },
    logo: {
      fontSize: typography.pxToRem(400),
    },
    uspButton: {
      marginTop: spacing(4),
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      color: '#fff',
      borderRadius: '13px',
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
  })

const useStyles = makeStyles(styles)

const HomePage = React.memo<any>(() => {
  const classes = useStyles()
  return (
    <div>
      <Container maxWidth="md">
        <PageBar />
        <section className={classes.topSection}>
          <div>
            <Typography component="h1" className={classes.title}>
              Easy to use async/await first CQRS+ES framework{' '}
              <span className={classes.subtitle}>
                for the Microsoft .NET platform
              </span>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.uspButton}
            >
              Getting Started
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.uspButton}
            >
              Documentation
            </Button>
          </div>
          <Logo className={classes.logo} />
        </section>
        <CodeExample />
      </Container>
    </div>
  )
})

export default HomePage
