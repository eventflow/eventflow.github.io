import React, { useEffect } from 'react'
import Prism from 'prismjs'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    codeContainer: {
      borderRadius: spacing(1),
      maxWidth: '700px',
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

const CodeExample = React.memo<any>(() => {
  const classes = useStyles()
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  return (
    <pre className={clsx('line-numbers', classes.codeContainer)}>
      <code className="language-csharp">{code}</code>
    </pre>
  )
})

export default CodeExample
