import React, { FC } from 'react'
import { CodeExample } from '../components'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ spacing }: Theme) =>
  createStyles({
    codeSection: {
      padding: spacing(7, 0),
      backgroundColor: '#0A1931',
    },
  })

const useStyles = makeStyles(styles)

export const CodeSection: FC<any> = React.forwardRef(
  (_, ref: React.ForwardedRef<HTMLElement>) => {
    const classes = useStyles()
    return (
      <section
        className={classes.codeSection}
        id="code-example-section"
        ref={ref}
      >
        <CodeExample />
      </section>
    )
  }
)
