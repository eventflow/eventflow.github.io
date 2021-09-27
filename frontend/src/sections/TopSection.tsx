import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Logo } from './../components'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
  })

const useStyles = makeStyles(styles)

export const TopSection: FC<{ scrollToCodeExample: () => void }> = ({
  scrollToCodeExample,
}) => {
  const classes = useStyles()

  return (
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
      <div>
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
  )
}
