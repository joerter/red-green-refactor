---
title: 10 Tips For Awesome Angular Apps
date: '2020-11-07'
description: 10 tips from my experience building Angular apps.
tags:
    - angular
---

This article started out as an explanation of my approach to handling state management in Angular apps. Instead, it's turned into a list of lessons I've learned while using Angular for around 3 years. I hope you find a point or two useful or at least find one of the articles I've linked to informative and a good jumping off point for your own exploration and learning. Enjoy!

1. When it comes to state management in Angular apps, there are plenty libraries to choose from. A few examples are [NGRX](https://ngrx.io/),
[Akita](https://datorama.github.io/akita/), and [NGXS](https://www.ngxs.io/).
You can even use libraries more popular in the React ecosystem like [Redux](https://redux.js.org/) and [Mobx](https://mobx.js.org/README.html). In my experience, these libraries add boilerplate and knowledge overhead and you're usually better off using vanilla Angular with @Input and @Output properties and services. [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) is a great article about this topic from the React perspective, but I think the same principles apply to Angular.

2. "Prop drilling" is the problem where you need to pass @Input or @Output properties through multiple layers in the component tree. I recommend utilizing a service to manage state when passing data through 3 or more layers of components. You can even use [hierarchical dependency injection](https://angular.io/guide/hierarchical-dependency-injection) to make services visible only to a certain component tree instead of global to the entire application.

3. [Favor composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance). Since Angular components use TypeScript classes, it can be tempting to reach for inheritance to share common functionality. In my experience, this leads to a rigid architecture that is difficult to debug and follow. Compose components, refactor shared functionality into services, or use shared directives instead.

4. [Dynamic component loading](https://angular.io/guide/dynamic-component-loader) is possible in Angular, but almost never useful at the application level. I can see its uses in libraries, but for applications, I've never seen a problem solved with dynamic components that couldn't have been solved more easily with a simple `*ngFor` or `*ngIf` directive.

5. Use the OnPush Change Detection Strategy. This results in increased performance, but that's not the main reason I recommend it. OnPush gives you more control over when change detection runs and forces good practices when it comes to immutability and changing @Input properties. Netanel Basal has a fantastic article about OnPush [here](https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4).

6. Use the [async pipe](https://angular.io/api/common/AsyncPipe). Subscribing to streams in components can cause memory leaks if not unsubscribed during the `OnDestroy` lifecycle method. Instead, let the async pipe handle this for you. It runs change detection when using OnPush Change Detection too!

7. For DTOs and communicating with your backend, favor interfaces over classes. The simple reason is that TypeScript interfaces only exist at compile time and are not present at runtime. Classes, on the other hand, are bundled with the application and can cause unnecessary weight if you're only using them as a data structure.

8. Strive for immutability in your applications. You may find success using a library like [Immutable.js](https://immutable-js.github.io/immutable-js/docs/#/) to force immutability, but I've found that using OnPush change detection and having a good code review process can be just as good without the 3rd party library overhead. This can really be as simple as using [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and reassigning to array and object fields in components.

9. Use [Spectator](https://github.com/ngneat/spectator) for your unit tests. This library is awesome. When I first started using Angular, I found the TestBed and built in testing tools so cumbersome I favored writing [class based tests for every component](https://angular.io/guide/testing-components-basics#component-class-testing). With Spectator, tests are a breeze to setup and it helps you write better tests. It does this by emulating the same selectors used by the [Testing Library](https://testing-library.com/) family.

10. Don't test implementation details of your components. Another way of saying this is that you shouldn't have a test file for every single one of your components, directives, or services. Instead, test the **behavior** of your application like a user would at a higher level in the component tree. In the OOP world, Uncle Bob calls this [Test Contra-variance](https://blog.cleancoder.com/uncle-bob/2017/10/03/TestContravariance.html). By following this, you will end up with tests that may exercise the functionality of multiple components at once. This leads to tests that are far more valuable and less prone to breaking due to minor refactors in component structure.

Thanks for reading! Let me know if you've found this article helpful or disagree with any of these points.
