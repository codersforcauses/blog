---
title: GraphQL Hype
date: 2019-04-26
---

Facebook initially developed GraphQL for internal consumption in 2012/2013 before publically releasing it in 2015 and subsquently moved it to a foundation hosted by the non-profity Linux Foundation. Since then it has gained a lot of developer attention and many inflential companies and people have used it in production.
The question is should you as a developer use it? As with most new technologies the answer is probably not. If you have read my previous articles there is a commom theme about new things. **If it doesn't solve a major problem for you then you should not use it in your next project.** That doesn't mean you shouldn't use it at all but rather if you have a professional project where people depend on you its always best to stick with what you are familiar with. Why? The answer is obvious, you will likely encounter many bugs, challenges, quirks once you start developing a real app. This will decrease your productivity and quality of your software. The end user isn't going to care about what fancy technology you are using, what they do care about is whether your software solves their business problem.

So with that caveat out of the way lets take a look at GraphQL.

## A quick overview
I think the best way to look a technology is just to get stuck in with the code and see for yourself how it behaves at an implementation level then we can talk about some more fluffy stuff once you get the basics out of the way.

### Advantages
* **Typed** - This is really cool if you are used to just json getting passed into your functions you will likely have to write additional validation to verify the data is correct. By having types of the data getting passed in you get to have some free validation. Types also have many other benefits such as autocompletion for your IDE and arguably makes your code easier to reason with because at a glance when we a look at a function we know what exactly the inputs and outputs are.
* **Flexibility** - Unlike monolithic frameworks like ASP.NET and Laravel GraphQL is closer to express (in fact you can run GraphQL with express) where it is less opinionated on how you do things. This can be a double edged sword because it could lead to more boiler plate code

### Disadvantages
* **Too low level** - I touched on this point a bit in the flexibility point under advantages but the biggest killer for me is this. Now this is why you shouldn't always follow the big players in the tech industry because their resources and teams are different to the majority of tech companies out there. Most of us work in small teams and in small companies where time and resources are very important. We operate under conditions where we have to be highly productive while producing high quality software with a small team or even no team at all. 

GraphQL reminds me of Express in the sense where it is an unopinonated framework giving the developer the freedom to implement their own authentication and file structure. As a consquence we have to implement or utilise third party libaries for lower level features that you would normally get for free from other frameworks e.g. ORMs, database migrations, testing, authentication, authorisation, validation, error handling, security. This is fine if you have the time, resources and knowledge within your team but if you don't dangerous consquences could arise besides wasting a lot of time trying to integrate all these dam third party libraries. For example security, if you have a lot of freedom and you don't know what you are doing it is very easy to introduce security vulnerabilities e.g. forgetting to not protect an endpoint.

Having said all that there are reliable services that build upon GraphQL that remove a lot of the boilerplate for us. I think these services are probably more suitable for the majority of developers. https://hasura.io/ & https://www.prisma.io/ & https://tipe.io/ (If ever it is going to be released)
