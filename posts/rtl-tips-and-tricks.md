After using React Testing Library for some time now, I wanted to write down some of the tips and tricks I’ve learned so that I can solidify the knowledge in my own head if nothing else. If any of these tips help you as well on your RTL journey, let me know! I would be happy to hear that this article was helpful to you.

> NOTE: I’ll be using RTL as an abbreviation for “React Testing Library” throughout the post.

## Visualizing Debug Results
The unfortunate part of RTL when compared to a tool like Cypress is that it’s much harder to visualize your app as the tests are running or when tests fail. When an RTL query fails, it will helpfully spit out the current state of the DOM, but sometimes you need a little more. Here are two techniques to help with that:

### Use DEBUG_PRINT_LIMIT
[The docs on debugging](https://testing-library.com/docs/dom-testing-library/api-debugging/)have a helpful hint for increasing the amount of lines you see printed to the console. Simply set `DEBUG_PRINT_LIMIT` to a value greater than the default of 7000 and search through that DOM to your hearts content!

### Testing Playground
As an alternative, you might want to actually _see_ the visual nature of your component under test. For that, you can use [Testing Playground and `screen.logTestingPlaygroundURL()`.](https://testing-library.com/docs/queries/about/#screenlogtestingplaygroundurl) This will log a url to your console that you can open in Testing Playground, see the output, and even get some help on the correct query to use! Amazing!

## State Update Error
Every once in a while, you may run into an error similar to this when your tests run:
```
Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount
method
```

The way I understand this error, it means that after your test finished running and the component  or components were unmounted, a React state update was attempted somewhere in the component tree.

Usually, this happens as a result of a network request either inside a  `useEffect` hook or on an event handler. However you're faking the network request (I strongly recommend [msw](https://github.com/mswjs/msw)), the request resolved and the component attempted to update state after the test had already finished.

The first thing I look for when I encounter this error is if I am properly using a `findBy` or `waitFor` statement to wait for an element that corresponds with the network request to either appear or disapear. 

For example, let's say I'm writing a test for a modal that sends a `POST` request in the `onSubmit` handler of a form. In this example, the modal will close once the `POST` request resolves successfully. In this case, I would ensure that I am not ending the test until the modal has disappeared. This would ensure that the state update caused by the resolved network request doesn't happen after the test has finished.

In cases where the state update is happening inside of a `useEffect`, this approach may not work. In these cases, I decide to bring out the trusty `isMounted` conditional and only `setState` when `isMounted` is true. For example:

```javascript
// fetch some data on mount
useEffect(() => {
  let isMounted = true;
  
  const fetchPosts = async () => {
    const posts = await getPosts();
    if (isMounted) {
      setPosts(posts);
    }
  }

  fetchPosts();

  return () => { isMounted = false; }
}, [])
```

Thanks for reading! I hope this has helped you.
