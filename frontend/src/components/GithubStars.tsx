import React, { useEffect } from 'react'
import Link from '@material-ui/core/Link'
import GithubIcon from './../media/github-icon.svg'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const styles = ({ spacing, typography }: Theme) =>
  createStyles({
    githubStarsContainer: {
      minWidth: '95px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& .gh-btn, .gh-count': {
        fontSize: typography.pxToRem(spacing(2)),
        textDecoration: 'none',
        cursor: 'pointer',
      },
      '& .gh-btn': {
        display: 'flex',
        alignItems: 'center',
      },
      '& .gh-count': {
        minWidth: '53px',
        minHeight: '33px',
        backgroundColor: 'rgb(250, 250, 250)',
        border: '1px solid rgb(212, 212, 212)',
        borderRadius: '4px',
        padding: spacing(0.5, 1),
        marginLeft: spacing(1),
      },
    },
    githubIcon: {
      width: '20px',
      height: '20px',
      marginRight: '4px',
    },
  })

const useStyles = makeStyles(styles)
const GithubStars = React.memo<any>(() => {
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
    <span className={classes.githubStarsContainer}>
      <Link
        color="textPrimary"
        className="gh-btn"
        href="https://github.com/eventflow/EventFlow"
        target="_blank"
      >
        <GithubIcon className={classes.githubIcon} />
        <span className="gh-text">Star</span>
      </Link>
      <Link
        color="textPrimary"
        className="gh-count"
        target="_blank"
        href="https://github.com/eventflow/EventFlow/stargazers"
        style={{ display: 'block' }}
      >
        {githubStarsNo}
      </Link>
    </span>
  )
})

export default GithubStars
