import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, typography }: Theme) =>
  createStyles({
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
    footer: {
      padding: spacing(4, 0),
      backgroundColor: palette.background.default,
      textAlign: 'center',
    },
  })

const useStyles = makeStyles(styles)

export const FooterSection: FC<any> = () => {
  const classes = useStyles()
  return (
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
  )
}
