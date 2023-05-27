In this post I am going to attempt to respond to some pushback I’ve read online relative to TDD. I’m going to do my best to characterize some of the arguments I’ve read online even though I know this doesn’t fully address all of the concerns people may have with practicing TDD. This may just turn into a giant straw man, but I hope that some point I make here resonates with you, dear reader. If it does, shoot me a note or post a comment and let me know!

The common sentiment I read online about why someone has tried TDD and didn’t like it usually goes something like this:

> “The trouble with TDD is that usually I don’t really know how my programs will work when I begin writing them, and I often make design choices iteratively as I start to realize how the program should behave.”

Put another way, I think many developers think it’s silly to write tests that will immediately break or need to be rewritten because the production code they are testing has changed.

If you agree with this line of thinking on TDD, I would invite you to consider that perhaps you are writing your tests at the incorrect level. Let me explain.

Somewhere along the way, a misconception was created that there should be a 1:1 relationship of production code files to test files. 

For example, if I create a file called `createOrder.js`, conventional wisdom says that I should create a test file called `createOrder.spec.js`, and any dependencies should be faked (or mocked, stubbed, or whatever you prefer to call it).

The issue this creates is that your test code is so tightly coupled to your production code that the slightest refactor could break all your tests and your spirit.

Instead, focus on the _behavior_ of your production code not the _structure_. By organizing your test suite around the behavior of code and avoiding mocking dependencies, your tests become far less responsive to refactoring. You might actually experience the joy and wonder of totally changing the structure of your code and continuing to see green in your test runner.

The moment this really clicked for me was when I first started using React Testing Library. RTL encourages you to write tests that use your app the way a real user would. This means that I can write a test that renders a component along with all of its children, and exercise the functionality of the component without being concerend with how it's composed. If I decide to refactor the component and move state around, or move buttons from a child up to the parent or vice versa, the tests will still pass as long as the DOM elements used in the tests haven't changed.

This concept works on the backend as well. It's not always necessary to mock the direct dependencies of a class or function. Instead, consider only mocking the hard boundaries of your app. For most apps this means mocking network requests and database queries.

In closing, focus on the behavior of your code when writing tests, not the structure. As long as you know how your code should behave, you can write a test that asserts on a small part of that behavior, and grow from there.
