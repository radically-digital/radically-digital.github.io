# Coding Etiquette

Its important to remember when you're writing and reviewing code that you're part of a team. One of the most important features of a good engineering team is coding etiquette.

```
Etiquette
the customary code of polite behaviour in society or among members of a particular profession or group.
```

If you don't have good coding etiquette then others will find it difficult to work with you. The team will be less productive as a result and the team environment may become hostile.

The primary type of etiquette we'll be discussing here is etiquette during code reviews. This not only comes from the reviewer but also from the person who wrote the code.

The following is a set of guidelines you should abide by to keep up a good standard of etiquette within your team. A large part of this content has been inspired by and adapted from [Codacy's blog on the matter](https://blog.codacy.com/code-review-etiquette/).

## Coding etiquette when writing code

### Review your own code before asking others to review

Its important to review your own code before sending it to anyone else. You may find simple mistakes in there that you didn't pick up previously. For example, you may have left a console log in your code as a hangover from the debugging process. Sending this to a reviewer will not only slow down the review process but may also frustrate the reviewer if its clear you've not checked you're own work. They may see this as you regarding your own time to be more valuable than their time. Only ask someone to review your code if you are 100% happy with it.

### Ensure your tests pass before submitting a review

If your tests don't pass it means your code isn't working as expected and will therefore need additional changes. Don't submit something for review before ensuring your tests have passed. If the tests fail and the reviewer checks the code then they will have to review it again when the fixes are made. This wastes both your time and the reviewer's time.

### If something needs explained then explain it

If you made a design choice in your code and you feel you need to explain your reasoning behind it then feel free to do so in the comments of the PR. For example, if you had to choose between using one of two different algorithms and you found a reason why one algorithm won't work then highlight this in the comments. This can be thought of as anticipating questions to arise about it and therefore leaving a comment so the reviewer has all information at hand at first glance. This will save the reviewer time and they will appreciate the thought.

### Don't take it personally

If you received comments on your code then take these in the way they are meant in all good teams - constructive ways to improve your code. Don't take any comment on your code as a personal attack. Try to see the comment from the reviewers point of view. If you disagree with it then feel free to reply to the comment to have a constructive debate.

## Coding etiquette when reviewing code

### Be constructive

There is nothing worse than a reviewer who just says "this is wrong" without suggesting any way to improve it. If the solution is completely obvious (e.g. a mistakenly left in console log) then purely pointing out the mistake should be enough to rectify the problem. Anything more complex than this should be the subject of a more constructive comment. If required feel free to write snippets of code to illustrate your point.

Its important to remember that, whilst you should always be constructive, you should also make sure you're not talking down to or being condescending towards the other person.

### Use supportive language

Closely related to being constructive -- ensure you're not belittling the person or using offensive language towards them. Do not vent frustrations towards code that you consider to be substandard but instead exercise patience and help them become better. If you are seeing repeat mistakes then feel free to chat to them offline to see how you can help them improve. Approach every conversation with the engineer's best interests at heart.

## Discussion?

<!-- To be had in person - link to recordings -->
