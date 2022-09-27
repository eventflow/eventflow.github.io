import React, { useEffect } from 'react'
import Prism from 'prismjs'
import clsx from 'clsx'
import MuiTypography, { TypographyProps } from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// const styles = ({ spacing, breakpoints, typography }: Theme) =>
//   createStyles({
//     codeContainer: {
//       borderRadius: spacing(0.5),
//       maxWidth: '700px',
//       background: 'transparent !important',
//       margin: '0 !important',
//       border: '1px solid #DBE6FD',
//     },
//     centerCodeBlock: {
//       maxWidth: '700px',
//       margin: '0 auto',
//     },
//     codeSectionTitle: {
//       color: '#DBE6FD',
//       textAlign: 'center',
//       marginBottom: spacing(6),
//       fontWeight: 700,
//       [breakpoints.down('sm')]: {
//         fontSize: typography.pxToRem(spacing(4)),
//       },
//     },
//   })

// const useStyles = makeStyles(styles)

const code = `using (var resolver = EventFlowOptions.New
    .AddEvents(typeof (TestAggregate).Assembly)
    .AddCommandHandlers(typeof (TestAggregate).Assembly)
    .UseInMemoryReadStoreFor<TestAggregate, TestReadModel>()
    .CreateResolver())
  {
    var commandBus = resolver.Resolve<ICommandBus>();
    var eventStore = resolver.Resolve<IEventStore>();
    var readModelStore = resolver.Resolve<IInMemoryReadModelStore<
      TestAggregate,
      TestReadModel>>();
    var id = TestId.New;
  
    // Publish a command
    await commandBus.PublishAsync(new PingCommand(id));
  
    // Load aggregate
    var testAggregate = await eventStore.LoadAggregateAsync<TestAggregate>(id);
  
    // Get read model from in-memory read store
    var testReadModel = await readModelStore.GetAsync(id);
  }
  `

const Example = styled('div')(({}) => ({
  maxWidth: '800px',
  margin: '0 auto',
}))

const Typography = styled(MuiTypography)<TypographyProps>(
  ({ theme: { spacing, breakpoints, typography } }) => ({
    color: '#DBE6FD',
    textAlign: 'center',
    marginBottom: spacing(6),
    fontWeight: 700,
    [breakpoints.down('sm')]: {
      fontSize: typography.pxToRem(32),
    },
  })
) as typeof MuiTypography

const CodeContainer = styled('pre')(({ theme: { spacing } }) => ({
  borderRadius: spacing(0.5),
  maxWidth: '800px',
  background: 'transparent !important',
  margin: '0 !important',
  border: '1px solid #DBE6FD',
}))

export const CodeExample: React.FC<any> = () => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return (
    <Example>
      <Typography variant="h3" component="h3">
        Example
      </Typography>
      <CodeContainer className="line-numbers">
        <code className="language-csharp">{code}</code>
      </CodeContainer>
      {/* <pre className={clsx('line-numbers' /*classes.codeContainer)}>
        <code className="language-csharp">{code}</code>
      </pre> */}
    </Example>
  )
}
