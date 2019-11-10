---
id: 110
title: Exploring new techniques on building composable widgets for the web
date: 2016-03-21T12:45:53-05:00
author: Dan
template: post
draft: false
guid: http://zajdband.com/?p=110
slug: /exploring-new-techniques-building-composable-widgets-for-the-web/
description: "During my first days at the Coral Project I experimented with a feature intimately related with the collaborative nature of the Cral initiative. The main idea is to build a tool to create embeddable widgets to embed into media sites giving more insights to the users about their contributions as well as other readers."
category: Web
tags:
  - Coral
  - node.js
  - opennews
  - prototyping
---
During my first days at the [Coral Project](https://coralproject.net) I experimented with a feature intimately related with the collaborative nature of the Cral initiative. The main idea is to build a tool to create embeddable widgets to embed into media sites giving more insights to the users about their contributions as well as other readers.

Because we want publishers to make their online identity stronger, we don't want the widgets to look like other websites. For that reason, the focus was into mimic our components inside the website's characteristic aesthetic. Having this as a rule I formulated a series of goals for this component series:

  * Mimic with the host website
  * Make the loading of the widgets non-blocking for the rest of the host website
  * Allow to do server-side rendering on the components, reducing the amount of requests needed from the client
  * The downloaded script should be really small
  * Allow the composition of widgets
  * Offer pre-styled components for sites that want that kind of widget

To accomplish the mimicking of the widget style and having the book [Third-Party JavaScript](https://thirdpartyjs.com/) as my main inspiration y found 2 ways to tackle the requirement: The first one is to serve the widget on an HTML document situated in our site, insert an iframe on the host website and using heuristics, retrieve the styles from the host site and apply the rules into the iframe. The second option is simply inserting the widget code intro the host website, automatically obtaining the styles from the context. The latter was my to-go choice.

The main problem with this approach is that **the styles from the host website can break the widget**. The recommendation for this scenario used to be a concept that was kind of prohibited in the Front End world some years ago but now is back. The answer is just to use **inline styles. **I found out that the most used framework nowadays (React) use a technique to compose styles that relies also on inline styles, being perfect for this use case. React also solves server-side rendering and composing widgets as JSX tags, matching two other goals for the widgets.

It seemed a solved problem, except for a big problem. React's download size is 36kb (gzipped + minified), which is a lot for an embed (at least for me). Welcome [Preact](https://developit.github.io/preact/), a framework  with a React compatible API but in 3kb. Preact, despite it's small size, allows us to do virtually everything React does, even [server-side rendering](https://github.com/developit/preact-render-to-string).

Once I've got the widgets working I found out that the difference between the iframe and the \`in-site\` script was only the way they were wrapped. So by writing different wrappers we can offer both the iframe and the injected script experience to the websites. Having both versions working it's easy to see how the iFrame isolation harms the User Experience

[<img class="aligncenter wp-image-112 " src="https://zajdband.com/wp-content/uploads/2016/03/iframe.gif" alt="iframe" width="616" height="579" />](https://zajdband.com/wp-content/uploads/2016/03/iframe.gif)
  

I'll continue working with this tool and blogging improvements. I'd love to know your experiences related to Third-Party applications in the web. You can find me on Twitter as [@impronunciable](https://twitter.com/impronunciable).

<p style="font-size: 12px;">
  Thanks <a class="ProfileHeaderCard-screennameLink u-linkComplex js-nav" href="https://twitter.com/sandhya__k">@<span class="u-linkComplex-target">sandhya__k</span></a> for reviewing this article.
</p>