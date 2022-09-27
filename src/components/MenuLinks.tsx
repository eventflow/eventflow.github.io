import React from 'react'
import Link from '@mui/material/Link'
import GithubSvg from './../media/github-icon.svg'
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded'
import { styled } from '@mui/material/styles'

const DocsLinks = styled('div')(
  ({ theme: { typography, spacing, breakpoints } }) => ({
    display: 'flex',
    alignItems: 'center',
    '& a': {
      fontSize: typography.pxToRem(16),
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
        fontSize: typography.pxToRem(16),
        marginLeft: spacing(0.5),
      },
    },
  })
)

const LibraryIcon = styled(LibraryBooksRoundedIcon)(
  ({ theme: { typography } }) => ({
    fontSize: typography.pxToRem(28),
  })
)

const GithubIcon = styled(GithubSvg)(({ theme: { spacing } }) => ({
  width: spacing(3),
  height: spacing(3),
}))

export const MenuLinks: React.FC<any> = () => {
  return (
    <DocsLinks>
      <Link color="textPrimary" href="https://docs.geteventflow.net/">
        <LibraryIcon />
        <span>Docs</span>
      </Link>
      <Link color="textPrimary" href="https://github.com/eventflow/EventFlow">
        <GithubIcon />
        <span>Github</span>
      </Link>
    </DocsLinks>
  )
}
