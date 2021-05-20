import React from 'react'
import { Container } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Logo from './../components/Logo'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const styles = () =>
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
  })

const useStyles = makeStyles(styles)

const HomePage = React.memo<any>(() => {
  const classes = useStyles()
  return (
    <div>
      <Container maxWidth="md">
        <header className={classes.header}>
          <Typography component="h1" className={classes.title}>
            Easy to use async/await first CQRS+ES framework{' '}
            <span className={classes.subtitle}>
              for the Microsoft .NET platform
            </span>
          </Typography>
          <Logo className={classes.logo} />
        </header>
      </Container>
    </div>
  )
})

export default HomePage
