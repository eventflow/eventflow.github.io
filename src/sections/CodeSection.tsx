import React, { FC } from 'react'
import { CodeExample } from '../components'
import { styled } from '@mui/material/styles'

const CodeContent = styled('section')(({ theme: { spacing } }) => ({
  padding: spacing(7, 0),
  backgroundColor: '#0A1931',
}))

export const CodeSection: FC<any> = React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <CodeContent id="code-example-section" ref={ref}>
        <CodeExample />
      </CodeContent>
    )
  }
)
