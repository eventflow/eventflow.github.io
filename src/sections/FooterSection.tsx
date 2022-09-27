import React, { FC } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const FooterContent = styled('section')(({ theme: { palette, spacing } }) => ({
  padding: spacing(4, 0),
  backgroundColor: palette.background.default,
  textAlign: 'center',
}))

const TextButton = styled(Button)(
  ({ theme: { typography, spacing, palette } }) => ({
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    color: '#fff',
    borderRadius: spacing(0.5),
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: typography.pxToRem(16),
    minWidth: '150px',
    '&:hover, &:active, &:focus': {
      backgroundColor: palette.secondary.main,
      boxShadow: 'none',
    },
    '&:first-of-type': {
      marginRight: spacing(2),
    },
  })
) as typeof Button

export const FooterSection: FC<any> = () => {
  return (
    <FooterContent>
      <div>
        <TextButton
          color="secondary"
          variant="contained"
          component="a"
          href="https://docs.geteventflow.net/"
        >
          Documentation
        </TextButton>
        <TextButton
          color="secondary"
          variant="contained"
          component="a"
          href="https://github.com/eventflow/EventFlow"
        >
          GitHub
        </TextButton>
      </div>
    </FooterContent>
  )
}
