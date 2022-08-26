# Working in Legacy Codebases

As consultant engineers one of the most important skills we can have is to quickly get up to speed in a legacy, and sometimes suboptimal, codebase. Being the experts in the field we need to join a new client and provide value as quickly as possible.

It's equally as important to be able to work within the constraints of said codebases - improving standards where possible and conforming to them when needed.

These codebases are often initially built within a great deal of constraint. The initial engineers may have been working to a tight deadline, with changing requirements or the project may have been mismanaged. It's important to take all of this into consideration when looking at a legacy codebase. You must try to empathise with the initial engineers. This is especially important if these engineers are still part of the team.

Please consider the following when working in legacy codebases. Most of these steps can be done in any order and some may need to be done multiple times at different stages of the process.

## The mental toll of working in existing codebases

Starting work in a complex existing codebase can be a very daunting task. Often you will feel as though you're not as productive as you should be and you may feel disheartened if you're not fully up to speed yet. It's important to remember that there will always be a dip in speed when you start on a new codebase. It will take time to get fully used to the new functionality, patterns, tech, terminology and ways of working. In the vast majority of cases the only person who is frustrated by your performance is you. The client is either aware that there will be ramp up time or will be reminded by the RAD person in charge of the client relationship.

It's important to remember these feelings are completely normal and they should soon go away when you feel you are fully up to speed. However, depending on the complexity of the codebase or codebases this could take from a few days to months. This guide should help you minimise the amount of time this takes but it will not completely eliminate ramp up time.

## Getting up to speed quickly

### Look up any documentation

It's important to get a high level view of what the system looks like. The best piece of documentation you can start with here is the systems architecture diagram or diagrams. They will show you a birds eye view of exactly how each part of the system is put together. This will show you how each component, and therefore each codebase, interacts with one another. This is imperative to know especially dealing with APIs.

If the architecture highlights that it is a [single tier system](https://www.guru99.com/n-tier-architecture-system-concepts-tips.html#1-Tier) then your job has just become much easier! You likely won't have to deal with APIs or connecting different systems unless you are talking to (or being spoken to by) external systems.

If APIs are involved in any way then you should look into any API documentation that may exist. These often come in the form of automatically generated docs such as Swagger or OpenAPI docs. This will tell you what endpoints are available and what parameters they take. This will enable you to interact with the product on a fundamental level.

There may additional documentation within the codebase (e.g. the readme file) or outwith the codebase on a system such as Confluence or Slab. Try to find and read as much of this as possible - you never know where relevant information could be hiding.

For all of this documentation you will likely need to ask someone where It's stored. It's also likely, especially in suboptimal codebases, that not all of this documentation exists. You must be prepared for this eventuality and know how to get around this issue. For instance, if there's no high level systems architecture diagram available then the team may need to conduct a survey of the infrastructure themselves. If there is Infrastructure as Code available then this will make this task much easier.

Similarly, if there is no API documentation available then the team will likely need to map out each endpoint and It's parameters by investigating the code. If a frontend which connects to this API is available then it is a great idea to open the network tab while using this frontend and go through several user journeys. This will list all of the times it contacts the API and which endpoint it hit. This is a fantastic method of finding out more about the API and it should be one of the first port of calls when API docs are not available.

If you do find that there is missing documentation then this is a great chance to show the client what good looks like. You should create this documentation whenever it is an appropriate time to do so and then store either it in codebase or in the client's chosen documentation system.

### Hit the APIs or visit the website

When getting up to speed It's important to actually use the product you'll be working on. If you don't already know what It's detailed purpose is then look into it. Investigate everything it can do and everything it can't do. If you need further clarification on why things are the way they are from a product perspective then you can speak to the product owner or project manager.

If you risk affecting production data then find out where the UAT environment is deployed and use this instead.

When looking to prioritise which APIs or website functionality to approach first it may be worth identifying the product's [red routes](https://medium.muz.li/red-routes-critical-design-paths-that-make-or-break-your-app-a642ebe0940a). You can then follow these routes and identify all functionality and APIs called. You should be able to identify red routes by looking at end to end (e2e) tests or speaking to relevant people.

### Talk to the relevant people

In the vast majority of the time there will be at least one or two people who have previously worked on the project available to help you. You may have product owners, project managers, business analysts or engineers there to get you up to speed. These may be part of RAD or may work for the client.

Whether you are one of the first people on a client or not It's important to quickly find out who is who in the client organisation. If there is an organisation chart available then this will make this task much easier. If there is not one available and there are many stakeholders then it may be useful for you to create a relevant portion of an organisation chart to circle around the RAD people on this client.

Once you know who is who then you can work out who is best to speak to. If you are trying to get up to speed with the more technical aspects of the codebase then your optimum port of call is the project's lead engineer. If this person is not available then any other engineer should be able to help you. If your queries are more product focussed then one of the less technical people on the team may the best person to ask.

Before speaking to this person you should ensure they're the right person to talk to and then you should prepare a list of questions for them. These questions may be as open as a request to take you through the codebase or they may be much more pointed. It's important to prepare at least some starter questions in advance so you don't waste this person's time and risk frustrating them.

Most of the times when working with legacy codebases there’s always someone who has been working there for some time, who has the knowledge and context. When you’re that person with context and you are involved with day to day development it’s very easy to miss things when onboarding or passing context onto someone (i.e. forgetting small details that could really make the difference when explaining things).
When joining a new project some people can be afraid of asking simple questions because they think they might look stupid. Some engineers have a 'fake it till you make it' attitude that will greatly impact their own onboarding. Don’t be afraid to ask questions no matter how stupid you think they might sound.

### Run the codebase(s) locally

Once you've narrowed down exactly which codebases you'll be working in (this often isn't trivial in large organisations) then you can jump in and try to run things locally. You can ensure you have the right tools installed, your development environment is primed for this new codebase and you can get everything running. You should also make sure that you can run the tests and you can hook up any codebases to either local or mock versions of any other system it needs to interact with. Try to do this just by following the readme at first. If you have to ask anyone for additional information then this information should likely be captured in the readme in the future.

### Identify the workflows and deployment process

It's massively important for you to be able to work properly alongside the team. This is true whether it's an existing team or a completely new one.

If It's an existing team that you'll be working with then It's important to understand their current workflow. What project management software do they use? What branching strategy do they employ? How are pull requests reviewed and merged in?

Understanding how the team works will not only help you to get up to speed more quickly but it will also mitigate the risk of teething problems within the team when you join.

One of the most crucial technical parts of the team workflow you must understand is how code is deployed. This will not only help you get up to speed initially but will also be extremely valuable if there's ever any issues with deployments. You should identify any CICD software that's used and find any configuration files related to these. Go through the file and ensure you understand all of it. Ensure you know where things are deployed and what automated process (such as testing) are run before this deployment takes place.

### Get your hands dirty

Once you have a base knowledge of the system and you have the project running locally It's time to get your hands dirty! What this usually involves is picking up a relatively small ticket from the current sprint and working on that. This can either be done solo or pairing with another developer depending on your preferred method of learning.

Ideally, the ticket you work on will be small, not time sensitive and not require intricate knowledge of the codebase. It should also ideally be a ticket that touches as many layers of the codebase as possible to enable you to get an overview of a great deal of the system.

Working on a ticket will provide more value in terms of knowledge gained than any other part of the onboarding process. It will allow you to experience what It's really like to work in this codebase and it will highlight any quirks that you may have missed in your previous overviews of the codebase.

<!-- To be created

## Continuing work in legacy codebases

## Gradual improvements

## Deprecating codebases -->
