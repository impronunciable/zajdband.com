---
id: 147
title: Universal rendering with preact
date: 2016-05-09T20:26:06-05:00
author: Dan
template: post
draft: false
guid: http://zajdband.com/?p=147
slug: /universal-rendering-with-preact/
image: /wp-content/uploads/2016/05/Screen-Shot-2016-05-09-at-3.44.24-PM.png
category: Web
description: "In this article I explain a technique and conventions to follow in order to achieve Universal rendering (the ability to render an app both client and server side) using preact, node and redux."
tags:
  - HackDash
  - node.js
  - opennews
---
As [@rauchg](https://twitter.com/rauchg) stated, [server renderer pages are not optional](https://rauchg.com/2014/7-principles-of-rich-web-applications/#server-rendered-pages-are-not-optional). On my journey redoing the [HackDash](https://hackdash.org) front-end I&#8217;m trying to apply best practices on this software piece, so implementing Universal rendering was one of the first challenges.

In this article I explain a technique and conventions to follow in order to achieve Universal rendering (the ability to render an app both client and server side) using [preact](https://preactjs.com/), node and [redux](https://redux.js.org). This is not the only way to do it but it can help you understand some concepts behind this technique. You can see a demo of the Work in Progress using [now](https://zeit.co/now) for the deployment [here](https://hackdash-front-pgalvabhlc.now.sh), the code is [Open-Source](https://github.com/impronunciable/hackdash-front).

**TL;DR**

An easy way to develop this kind of single-page apps with universal rendering is to break your app in pages (in my case each page refer [1-on-1 with a route](https://github.com/impronunciable/hackdash-front/blob/master/src/components/App.js#L13)) and provide an initial fetch redux action for each page. Then, on the server, [provide a middleware](https://github.com/impronunciable/hackdash-front/blob/master/server.js#L25) to fetch that data and when you get the redux action that indicates the data is loaded, [render the page](https://github.com/impronunciable/hackdash-front/blob/master/template.js) along with a JSON representation of the initial state of the app.

**Transpile your server-side code (too)**

Because we want to render our client-side preact app on the server, importing the client code into the server, we need to transpile our node code too. Webpack allows to specify a [node target](https://github.com/impronunciable/hackdash-front/blob/master/webpack.config.back.js) that deals for this specific environment while helping with, for example, the jsx components.

**Avoid the usage of browser specific variables**

Using browser-only variables like _window_ and _document_ will break your server builds. If you must use them you can access to [global polyfills](https://github.com/Raynos/global) or declare them as external on your webpack configuration.

**Share as much code as you can**

The only difference between the code executed in the server and the client is a [minimal express app](https://github.com/impronunciable/hackdash-front/blob/master/server.js). This code is in charge of fetching the initial data for the required page (using the same redux store as the front-end) and render the initial HTML document. Is important to notice the 1-on-1 mapping between the [client](https://github.com/impronunciable/hackdash-front/blob/master/src/components/App.js#L13) and the server [routes](https://github.com/impronunciable/hackdash-front/blob/master/server.js#L39).

**Identify each page first render data**

This may be the hardest part of this technique. There should be one entry point for each page. This doesn&#8217;t mean that you can do only one request for a page, you only need to identify when the first render data is loaded and dispatch a _SERVER_READY _action. This will allow the middleware to know when to render your app. The way I prevent the first data to be fetched again on the client is just with [a boolean](https://github.com/impronunciable/hackdash-front/blob/master/src/actions.js#L7) indicating if the app was already mounted once.

**More to come**

As I said, this is just a WIP. This is the first of a serie of follow-ups on the development of the app. You can follow me on twitter as [@impronunciable](https://twitter.com/impronunciable).

&nbsp;