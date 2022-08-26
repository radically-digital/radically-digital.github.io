# Engineering Culture

We have the [Radically Digital Culture Document](https://drive.google.com/file/d/17-uRlmKsrOKU8Kgyjk_TMpNNjLVYCL9V/view). However, when we make decisions on what and how to do engineering, we need guiding principles. These are the things that make Radically Digital's development culture unique and that drive us to do great work.

### Psychological Safety

At it's core, engineering is the practice of learning. To learn effectively and to be productive, engineers
**must** feel safe asking questions and discussing mistakes. Everyone in Artsy Engineering, but especially those in
leadership positions, are responsible for fostering a psychologically safe work environment. Specifically, that
means:

- Admitting and discussing mistakes ("We introduced this bug, what can we learn from it?").
- Framing work primarily as a learning experience ("Let's pair on this feature so we can learn X new framework
  together.").
- Demonstrating curiosity and praising curiosity in others ("(When asked a question in a DM) This is a good
  question, would you mind asking in #channel-name so others can learn too?").

#### Further Reading

- [What it Feels Like to Work in a Supportive Environment for Female Engineers](https://medium.com/artsy-blog/what-it-feels-like-to-work-in-a-supportive-environment-for-female-engineers-3c994a001007)
- [Building Better Software by Building Better Teams](https://ashfurrow.com/blog/building-better-software-by-building-better-teams/)
- [Building Compassionate Software](https://ashfurrow.com/blog/building-compassionate-software/)
- [High-Performing Teams Need Psychological Safety. Here’s How to Create It](https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it)
- [Psychological Safety, Risk Tolerance and High Functioning Software Teams](https://hackernoon.com/psychological-safety-risk-tolerance-and-high-functioning-software-teams-75701ed23f68)

### Incremental Revolution

Introduce new technologies slowly and incrementally. Avoid re-writes. Build tools to allow hybrids of different
types of technology when possible. Sometimes you need to make a big leap, but aim to approach them incrementally.

Explore bleeding-edge technologies on projects with an end-date and can become safely classed "done". These can be
used to inform decisions on long-running projects. Run spike projects when trying to settle between technology
trade-offs.

### Being Nice is Nice

Behind every piece of code is a human, internal or external to Radically Digital. Give people the benefit of the doubt and
always assume positive intent. Take the time to understand why they made a decision before making assumptions.
Realize that you may come across differently on Slack/GitHub than in-person and consider how the person on the
other side might respond to what you're saying. There's always a nice way to handle a situation, and we strive for
that.

### Minimal Viable Process

As a team grows, so does the need for processes. Find ways to get the value of process without additional work.
Build automated tools to help others feel in the loop. Use systems like RFCs to broaden the availability of
information on process changes.

For meetings over 2-3 people, provide agendas and make as many people optional as possible. We've seen great
success on automation via documentation for recurring meetings.

#### Examples

- [Danger](http://danger.systems)
- [Peril](https://github.com/danger/peril#README)
- [RFC Process](/playbooks/rfcs.md)
- [10 things all agile teams need to know to run effective retrospectives](https://blog.retrium.com/10-things-all-agile-teams-need-to-know-to-run-effective-retrospectives)
- [Retrospective](https://www.atlassian.com/team-playbook/plays/retrospective)
- [psychological safety](https://ashfurrow.com/blog/building-compassionate-software/#teams-with-psychological-safety-perform-better)
- [Spotify Retro Kit](https://labs.spotify.com/2017/12/15/spotify-retro-kit/)
- [How we made our team retros more effective](https://engineering.thetrainline.com/how-we-made-our-team-retros-more-effective-c205501a2306)

### Leverage Your Impact

We built a large reputation for our size as an engineering team via these principles. This gives engineers
the ability to move local impact to a larger communal impact.

Consider ways in which you can expand the scope of impact for your time:

- Avoid private messaging when you could communicate in a relevant public channel
- Team presentations could be re-worked for public consumption
- Internal notes could be turned into blog posts
- Documentation on teams and processes could be open for others to reference and learn from
- A regular meetup could be converted into a franchisable system for others to replicate

The small improvements eventually add up so that you can do industry-impact work as a part of building Radically Digital.

<!-- TODO REVIEW -->

### De-silo Engineers

Provide people the ability to work in many spaces and not feel blocked by another team. Common languages, common
terminology and common idioms. There's definitely space for experimentation inside a shared framework. The aim here
is not to stifle creativity, but increase individual scope. By consolidating and de-siloing you can put concentrate
your efforts into maximizing value for time.

We intentionally try to avoid teams/people being silo'd from an organizational perspective by allowing ourselves to
re-staff periodically throughout a year.

#### Further Reading

- [Loosely Held Strong Convictions](https://www.youtube.com/watch?v=hlLhtWLghGA)
- [DevSwap: An Experiment in Randomizing Teams](https://artsy.github.io/blog/2017/09/11/DevSwap/)

<!-- TODO REVIEW end -->

### Build for 10x

Technology choices should strive to be "optimal" while avoid over-engineering. When designing systems or evaluating
scalability and performance, we aim for today's decisions to withstand 10x the traffic, data, or scale. This
realistic horizon helps us balance the need to move quickly with the sometimes-competing need to invest in
infrastructure and architecture. It also recognizes that solutions are expected to evolve and be replaced.

#### Further Reading

- [Migrations: the sole scalable fix to tech debt](https://lethain.com/migrations/)
- [Productivity in the age of hypergrowth.](https://lethain.com/productivity-in-the-age-of-hypergrowth/)

### Done Means Done

You can't just throw your code over a fence, shipping code is one part of an equation but running QA and ensuring
stability is just as important. Done being done means feeling confident in that you've protected your changes with
tests, ensured deployment works and feel confident in your tools for measuring.

When something is done, it doesn't mean that you'll never need to go back to it, but that going back to it is a new
project. It's done.
