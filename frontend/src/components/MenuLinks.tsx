import React from 'react'
import Link from '@material-ui/core/Link'
import GithubIcon from './../media/github-icon.svg'
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = ({ spacing, typography, breakpoints }: Theme) =>
  createStyles({
    links: {
      display: 'flex',
      alignItems: 'center',
      '& a': {
        fontSize: typography.pxToRem(spacing(2)),
        textDecoration: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        '&:first-of-type': {
          marginRight: spacing(3),
          [breakpoints.down('sm')]: {
            marginRight: spacing(1),
          },
        },
        '& span': {
          fontSize: typography.pxToRem(spacing(2)),
          marginLeft: spacing(0.5),
        },
      },
    },
    docsIcon: {
      fontSize: typography.pxToRem(28),
    },
    githubIcon: {
      width: `${spacing(3)}px`,
      height: `${spacing(3)}px`,
    },
  })

const useStyles = makeStyles(styles)
export const MenuLinks: React.FC<any> = () => {
  const classes = useStyles()
  return (
    <div className={classes.links}>
      <Link color="textPrimary" href="https://docs.geteventflow.net/">
        <LibraryBooksRoundedIcon className={classes.docsIcon} />
        <span>Docs</span>
      </Link>
      <Link color="textPrimary" href="https://github.com/eventflow/EventFlow">
        <GithubIcon className={classes.githubIcon} />
        <span>Github</span>
      </Link>
    </div>
  )
}
