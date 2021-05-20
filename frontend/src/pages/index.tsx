import React from 'react'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Logo from './../components/Logo'
import Button from '@material-ui/core/Button'
import CodeExample from './../components/CodeExample'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: '50px',
      fontWeight: 600,
      lineHeight: 'normal',
      maxWidth: '480px',
    },
    subtitle: {
      fontSize: '30px',
      fontWeight: 400,
      display: 'block',
    },
    logo: {
      fontSize: '400px',
    },
    uspButton: {
      marginTop: spacing(4),
      paddingTop: spacing(1),
      paddingBottom: spacing(1),
      color: '#fff',
      borderRadius: '13px',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '20px',
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
        <header className={classes.header}>
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
        </header>
        <CodeExample />
      </Container>
    </div>
  )
})

export default HomePage
