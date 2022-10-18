# Don't Optimize Prematurely

Before you make any kinds of optimizations, make sure that there is a reason for them. Following e best practice blindly is a waste of effort unless it’s impacting your application in a way.

Yes, it’s important to be aware of certain things but prioritize building readable and maintainable components before performance. Well written code is easier to improve.

When you notice a performance problem in your application - measure and identify the cause of your problem. No point in trying to reduce rerender count if your bundle size is enormous.

Once you know where the performance problems are coming from, fix them in the order of their impact.
