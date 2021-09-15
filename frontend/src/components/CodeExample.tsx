import React, { useEffect } from 'react'
import Prism from 'prismjs'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing, breakpoints, typography }: Theme) =>
  createStyles({
    codeContainer: {
      borderRadius: spacing(0.5),
      maxWidth: '700px',
      background: 'transparent !important',
      margin: '0 !important',
      border: '1px solid #DBE6FD',
    },
    centerCodeBlock: {
      maxWidth: '700px',
      margin: '0 auto',
    },
    codeSectionTitle: {
      color: '#DBE6FD',
      textAlign: 'center',
      marginBottom: spacing(6),
      fontWeight: 700,
      [breakpoints.down('sm')]: {
        fontSize: typography.pxToRem(spacing(4)),
      },
    },
  })

const useStyles = makeStyles(styles)

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

const CodeExample: React.FC<any> = () => {
  const classes = useStyles()
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return (
    <div className={classes.centerCodeBlock}>
      <Typography
        component="h3"
        variant="h3"
        className={classes.codeSectionTitle}
      >
        Example
      </Typography>
      <pre className={clsx('line-numbers', classes.codeContainer)}>
        <code className="language-csharp">{code}</code>
      </pre>
    </div>
  )
}

export default CodeExample
