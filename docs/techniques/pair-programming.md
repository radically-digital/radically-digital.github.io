# Pair Programming

Pair programming is the process of working with another engineer in order to increase your productivity or knowledge on a task. It usually involves one engineer writing the code, or 'driving', and the other person guiding or 'navigating'. Pair programming is similar to mob programming with the only major difference being that the latter is done with three or more people. When pair programming its important to consider the following in order for it to be a productive session.

## Ensure the task is well suited to pair programming

Some tasks are naturally better worked on alone. For instance, something that requires a lot of deep diving or repetitive work may not be best suited for pair programming. Similarly, there is little point in pairing up for a simple task which could easily be done by one engineer. The point of pairing is to increase productivity and knowledge. Its important to remember that pairing up will move the engineer away from doing another task and so doing an easy task together will impede team productivity.

You should also ensure that both of you want to pair program on the day in question. Some people may feel like working solo that day for various reasons. You should check in with each other beforehand to ensure you're both still willing to pair.

## If required timebox the session

If one or both engineers have meetings throughout the day then you may have to timebox the session. This often isn't optimal as you rarely know exactly how long it will take you to complete a task. However, it does mean that you're not pairing for more time than is necessary and so productivity will increase.

If you choose (or need) to timebox the session then its best to find a time for the session that allows two or more hours of pairing. Any less than this may not be optimal in terms of productivity.

## Find a suitable environment to work in

The biggest question here is: are you pairing in person or remotely?

If you're pairing in person then ensure you have enough desk space for you to comfortably have both laptops open. If you don't mind working on one laptop then feel free to switch chairs each time you switch roles. You can then use the second laptop for research and looking up documentation. If you want to use separate laptops you can commit and push to your branch frequently and then pull down the code on the other laptop when switching roles.

If you're pairing remotely then you can utilise video call software such as Zoom or Google Meets. You may wish to share one or both of your screens using this. Another option is to use a system such as VS Code's Live Share extension. This allows you to both code within the one IDE in a similar live fashion to working on the same Google Doc. If doing this you must ensure you're not writing over each other's code.

## Stay engaged

Its common for the person who's not driving to become disengaged after a while. Its difficult to focus if you're just watching someone else right code. There's a few methods you can employ to ensure this doesn't happen often.

You must ensure that you're communicating effectively whether you're driving or navigating. The driver should explain what they're doing when writing code and the navigator should provide constructive suggestions if they see fit. Its also important for both parties to ask questions. This is the best way for both engineers to learn and to come up with the best solution possible. You should not be afraid to ask questions no matter if you think they're stupid or not. In any effective pair there should be an open and trusting environment where there are no stupid questions.

On top of effective communication you should also switch roles frequently. You can switch at determined intervals e.g. when a subtask is completed or you can switch whenever either one of you feel like it. The person driving will typically take primary responsibility for suggesting a switch but the navigator can also do this. It may be best for the engineer who's less experienced in the area at hand to drive. This will help them gain knowledge in this area faster.

Its also very important to take regular breaks. Like role switching breaks can come at regular intervals or they can be suggested whenever one person is tired or feeling a little burnt out.

## Consider test driven development

Pair programming and Test Driven Development (TDD) work very well together especially working within the [ping pong pair programming framework](https://anthonysciamanna.com/2015/04/18/ping-pong-pair-programming.html). This is where one engineer will write the test and the other will write enough code just to make this test pass and no more. This continues until all happy paths and edge cases are covered. For the next task you can switch roles so both engineers get to write tests and write code. And alternative way of doing ping pong pair programming is for one engineer to write code that satisfies the previous test and then will write the next test.

While TDD is a great thing to strive for its important to remember that it won't work for all tasks. For example, its more difficult to write the tests first when building UI components. You should use your judgement on a case-by-case basis on whether to use TDD or not.
