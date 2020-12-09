---
title: Message in a Bottle - A Simple Clojure App
date: '2020-12-05'
description: I built a very simple app to start learning Clojure
tags:
    - clojure
---

## The Social Network for Deserted Islanders

I've been spending time learning Clojure lately, and I wanted to build a super simple web application to put my learning to use. Message in a Bottle is a fake social network for people stranded on deserted islands. It allows them to read and send messages to other stranded people. Messages are at the mercy of the wind and waves so you'll never know who will get your message or what you will receive. But that's part of the fun!

People stranded on deserted islands aren't lucky enough to have access to the social networks you and I use and enjoy every day. How can they waste hours of their day scrolling through timelines or experience extreme jealousy at that new rainwater collector their friend built? Message in a Bottle is the answer.

In this post, I'll dive into how I built the app and what I learned. If you'd like to check out the app, visit [https://message-in-a-bottle-1.herokuapp.com/](https://message-in-a-bottle-1.herokuapp.com/). My apologies if the performance is slow or the app takes a minute to respond. I'm using the Free level of Heroku which sleeps after 30 minutes of inactivity. Feel free to read and write a few messages! I need to find a way to increase the daily active users of Message in a Bottle before the IPO... 😆

You can find the source code [here](https://github.com/joerter/message-in-a-bottle).

## Overview

In order to keep Message in a Bottle simple, I decided to use an MVC-style approach with no client-side code. That way, I could just focus on a simple request-response cycle with a simple form and data store for persisting the messages. Since the messages aren't relational in any way, I decided to persist them using Redis. I've used Redis in the past with JavaScript and C# and generally find it to be a joy to use.

Here's a quick list of the main tools I used:

-   [Leiningen](https://leiningen.org/) - Leiningen is the main build and dependency manager in Clojure. Think of it as a bit like NPM if you're coming from JavaScript land.
-   [Ring](https://github.com/ring-clojure/ring) - HTTP web stack
-   [Compojure](https://github.com/weavejester/compojure) - Routing library for Ring.
-   [Hiccup](https://github.com/weavejester/hiccup) - Write HTML in Clojure!
-   [Environ](https://github.com/weavejester/environ) - For managing environment variables.
-   [Carmine](https://github.com/ptaoussanis/carmine) - Clojure Redis client
-   [Redis](https://redis.io/) - Message persisitance
-   [Docker and Docker Compose](https://www.docker.com/) - Local development
-   [Heroku](https://heroku.com) - Deployment and hosting

## Routing and Handling Requests

I used the Compojure Leiningen template to scaffold the app with `lein new compojure`. That template starts you off with a `handler.clj` file that contains a sample route and app setup with the default settings. Here's how my routes ended up at the end:

```clojure
(defroutes app-routes
  (GET "/" [] (handlers/home))
  (GET "/read-message" [] (handlers/read-message))
  (GET "/send-message" [] (handlers/send-message))
  (POST "/send-message" [message] (handlers/sent-message message))
  (route/resources "/")
  (route/not-found "Not Found"))
```

Each HTTP method function from Compojure takes a string for the route url along with a function to run for the response. I chose to set up these functions in a `handlers.clj` file. I'm not sure if that's idiomatic Clojure or not since they are essentially controllers, but that's how I did it. I would love to hear any stylistic improvements or suggestions anyone has here.

Take a closer look at the `(POST "/send-message" [message] (handlers/sent-message message))` form. The `[message]` argument is the value of the message textbox POSTed to the server from the web browser. It is passed on as an argument to the `handlers/sent-message` function.

This is one of the reasons I really enjoy writing Clojure. This code is highly readable and low-ceremony. If I compare this to C# and ASP.NET Core, which is where I spend most of my time writing web applications, I notice the lack of syntax, keywords (public, class, namespace, etc.), and type declarations. We can debate the merits of statically vs. dynamically typed languages, but there's no denying that Clojure is a simple and beautiful language to read.

## Writing HTML with Hiccup

Using Hiccup to write HTML in Clojure is a joy as well. The idea is to use vectors for elements, and maps for attributes. Here's an example of the form to send a message:

```clojure
(defn send-message
  [validation-message]
  (layouts/default "Send Message"
    [:p "Write your message below. Unfortunately, the paper can only hold 250 characters."]
    (if (nil? validation-message) [:span] [:p validation-message])
    (hf/form-to [:post "/send-message"]
                [:textarea {:name "message" :autofocus "true" :rows "10"}]
                [:input {:type "submit" :value "Send"}]
                (rf/anti-forgery-field))))
```

In this function, I'm using a `layouts/default` function I created as well. This function adds in some default HTML I wanted to have on every page like CSS, a page title, and simple app header.

The `hf/form-to` is a hiccup defined function that creates a form with an action on submission. Inside the form, I've added a simple `textarea` element along with a submit button.

## Storing Messages with Redis and Carmine

Let's get to the good stuff!

My basic idea for storing and reading the messages using Redis was to store each message using a random UUID as the key. Then, I could use Redis' `RANDOMKEY` command to easily get a random message every time a user wants to read a new message.

Carmine, the Clojure Redis client I used, gives an example of a `wcar*` macro to use when issuing commands to Redis. I'm still learning about Clojure macros, but this one seems pretty simple. Here's the definition:

```clojure
(defmacro wcar* [& body] `(car/wcar server1-conn ~@body))
```

This saves me from having to reference the `server1-conn` definition every time I use a command. Therefore, saving a message is as easy as calling `SET` with a UUID:

```clojure
(defn save-message [message]
  (wcar*
   (car/set (uuid) message)))
```

Where `uuid` is a function that returns the unique string.

Then, to read out a message I just need to get a random key from Redis:

```clojure
(defn random-key []
  (wcar*
   (car/randomkey)))
```

And use that random key with the `GET` command:

```clojure
(defn get-message []
  (wcar*
   (car/get (random-key)))
```

Easy peasy!

## Wrap Up

I learned quite a bit with this project. It was a challenge to get started, but I'm glad I picked something simple enough to finish quickly. Next, I'm going to focus on some front-end ClojureScript development by working through the [https://eugenkiss.github.io/7guis/](https://eugenkiss.github.io/7guis/) project.

Don't forget to subscribe to my newsletter so you'll get notified when I write my next post!

Until then, I'd love to hear what you thought about this post. Feel free to reach out to me on any of the methods listed in the [About](/about) page. If you're an experienced Clojure dev, I'd love to hear any improvements or suggestions you have. If you're new to Clojure let me know your thoughts on the language and if you found my explanations easy to understand.
