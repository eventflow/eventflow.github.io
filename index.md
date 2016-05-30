---
layout: frontpage
---

[EventFlow](https://github.com/rasmus/EventFlow)
is a easy to use async/await first CQRS+ES framework for the Microsoft .NET
platform.

{% highlight csharp %}
using (var resolver = EventFlowOptions.New
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
{% endhighlight %}


View the GitHub project page at
[https://github.com/rasmus/EventFlow](https://github.com/rasmus/EventFlow)
for more information.

