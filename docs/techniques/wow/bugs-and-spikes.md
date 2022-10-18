# Bugs and Spikes

## Estimating bugs

There is no "one-size-fits-all" solution and there are a number of factors that should influence the teams decision. As a general rule of thumb, bugs could be categorised into existing and introduced.

One school of thought is the existing bugs, that is bugs not introduced recently or by the existing team, are estimated as they deliver value in stability or user experience for example. New bugs, or bugs introduced by the existing team, are a measure of the teams current performance. If the team needs to improve the quality of their work, it's reasonable for this to reduce their overall velocity.

**This largely depends on the client, team, and product. Diificult clients and immature product teams may battle to justify to the businesss the metrics and logic behind the above method.**

To summarise a few options:

- No estimation: Since the velocity is a measure of the teams performance, a bug is a point towards reduced quality and therefore should reduce the teams velocity so they can improve the quality of their output.
- Default estimation: Jeff Sutherland, one of the creators of Scrum recommends to use placeholders for bug estimation, eg 0.5 – 1 days. This works well when the product is complex. The output should be treated like a spike - there should be an output of either written evidence or a fix. This can also be combined with the following method when the allocated period is not sufficient.
- Dedicated time: some teams just set aside some time each sprint/day/week/month for bug fixing. It doesn’t mean though that they never estimate bugs. If after the initial investigation it turns out to be a bigger fix, or it requires a change to the behaviour of the product, they would still estimate it, but most likely treat it almost like a feature, that might, if needed, go through the complete process of specification, design, development, testing, release.

## Guidelines for Spikes

Spikes involve creating a small program, research activity, or test that demonstrates some aspect of new functionality.

Spikes primarily come in two forms: technical and functional.

**Functional spikes** – They are used to analyze overall solution behavior and determine:

- How to break it down
- How to organize the work
- Where risk and complexity exist
- How to use insights to influence implementation decisions

**Technical spikes** – They are used to research various approaches in the solution domain. For example:

- Determine a build-versus-buy decision
- Evaluate the potential performance or load impact of a new user story
- Evaluate specific technical implementation approaches
- Develop confidence about the desired solution path

The output of a spike is demonstrable, both to the team and to any other stakeholders, which brings visibility to the research and architectural efforts, and also helps build collective ownership and shared responsibility for decision-making. The Product Owner accepts spikes that have been demoed and meet its acceptance criteria.

Since they represent uncertainty in one or more potential stories, planning for both the spike and the resulting stories in the same iteration is sometimes risky. However, if it’s small and straightforward, and a quick solution is likely to be found, then it can be quite efficient to do both in the same iteration.

## Resources

- [Spikes](https://www.scaledagileframework.com/spikes/)
