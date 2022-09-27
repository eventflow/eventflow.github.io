import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Logo as LogoSvg } from './../components'
import { styled } from '@mui/material/styles'

const Section = styled('section')(({ theme: { spacing, breakpoints } }) => ({
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
}))

const SectionTitle = styled(Typography)(
  ({ theme: { typography, spacing, breakpoints } }) => ({
    fontSize: typography.pxToRem(56),
    fontWeight: 600,
    lineHeight: 'normal',
    maxWidth: '480px',
    marginRight: spacing(3),
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(24),
      fontWeight: 400,
      marginRight: 0,
    },
    '& span': {
      fontSize: typography.pxToRem(32),
      fontWeight: 400,
      display: 'block',
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(24),
        display: 'inline',
      },
    },
  })
) as typeof Typography

const Logo = styled(LogoSvg)(({ theme: { typography, breakpoints } }) => ({
  fontSize: typography.pxToRem(260),
  [breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const UspButton = styled(Button)(
  ({ theme: { typography, spacing, palette, breakpoints } }) => ({
    paddingTop: spacing(1),
    marginTop: spacing(7),
    paddingBottom: spacing(1),
    color: '#fff',
    borderRadius: spacing(0.5),
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: typography.pxToRem(24),
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
      fontSize: typography.pxToRem(24),
      width: 'auto',
    },
  })
) as typeof Button

export const TopSection: FC<{ scrollToCodeExample: () => void }> = ({
  scrollToCodeExample,
}) => {
  return (
    <Section>
      <div>
        <SectionTitle component="h1">
          Easy to use async/await first CQRS+ES framework{' '}
          <span>for the Microsoft .NET platform.</span>
        </SectionTitle>
        <Logo />
      </div>
      <div>
        <UspButton
          variant="contained"
          color="secondary"
          component="a"
          onClick={scrollToCodeExample}
        >
          Example
        </UspButton>
        <UspButton
          variant="contained"
          color="secondary"
          component="a"
          href="https://docs.geteventflow.net/"
        >
          Documentation
        </UspButton>
      </div>
    </Section>
  )
}
