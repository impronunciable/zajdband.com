---
id: 263
title: Fellowship in review
date: 2017-01-12T15:27:16-05:00
author: Dan
template: post
draft: false
guid: https://zajdband.com/?p=263
slug: /fellowship-in-review/
description: "Since tomorrow is my last day as a Knight-Mozilla OpenNews Fellow I feel the need to revisit this past 10 months to document what I did, what I left unfinished and some things I'd like to do in the future."
category: Fellowship
tags:
  - Coral
  - opennews
---
Since tomorrow is my last day as a  [Knight-Mozilla OpenNews Fellow](https://opennews.org/blog/introducing-2016-fellows/) I feel the need to revisit this past 10 months to document what I did, what I left unfinished and some things I'd like to do in the future. An important note is that even if I'm going to talk mostly about projects, the most important takeaway from this process is the people I met, the experiences I lived and all the things I learned. Without further delay, this is what I've been doing during the last year:

## The Coral Project

The organization that hosted me during my fellowship was  [The Coral Project](https://coralproject.net), A Mozilla Foundation project in collaboration with the New York Times and the Washington Post created to build Open Source Software, research and tools to improve online conversation around journalism. As soon as I arrived to the Coral I found not only a super diverse and proactive team but also a great human group, making my job easier and more enjoyable.

The great thing (and also a little terrifying) of the fellowship perspective both from OpenNews and The Coral Project was the total freedom to do the work I wanted to do. They believed I could do interesting and creative things and they gave me the tools and the time so I can develop. Besides having a lot of time to experiment with ideas, some of them with good results, other that didn't work, my main job with the project was to help developing the core Open Source tools that the Coral Project offer to newsrooms of all sizes to improve their communities.

### Trust

[<img class="aligncenter wp-image-232" src="https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-1024x579.png" alt="trust_screenshot" width="802" height="454" srcset="https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-1024x579.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-300x170.png 300w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-768x435.png 768w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot.png 1200w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-800x453.png 800w, https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot-35x20.png 35w" sizes="(max-width: 802px) 100vw, 802px" />](https://zajdband.com/wp-content/uploads/2017/01/trust_screenshot.png)



[Trust](https://coralproject.net/products/trust.html) is a tool that allows a better understanding of commenters behavior in your site by applying filters, creating dynamic user lists. The main idea is that by generating the user lists, filtering by customizable variables, you can detect behavior and engagement patterns. Once identified the user groups we can take actions like sending an E-mail to a user with a gift once it's comments are good enough for our criteria.

The development of Trust was already going on when I started my fellowship and I participated mostly in the development on the tool [Front End](https://github.com/coralproject/cay/graphs/contributors). We use React and Redux for all the Coral Project Front End projects and Go, node.js & MongoDB for the Back End.

### Ask

[<img class="aligncenter size-large wp-image-233" src="https://zajdband.com/wp-content/uploads/2017/01/asking-1024x565.gif" alt="asking" width="1024" height="565" srcset="https://zajdband.com/wp-content/uploads/2017/01/asking-1024x565.gif 1024w, https://zajdband.com/wp-content/uploads/2017/01/asking-300x166.gif 300w, https://zajdband.com/wp-content/uploads/2017/01/asking-768x424.gif 768w, https://zajdband.com/wp-content/uploads/2017/01/asking-800x442.gif 800w, https://zajdband.com/wp-content/uploads/2017/01/asking-35x19.gif 35w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/asking.gif)

The first project I was involved from the beginning was  [Ask](https://coralproject.net/products/ask.html). As it's name says, the idea behind this product is to allow journalists ask their audience questions, manage the submissions and embed answer galleries to display in their website.

Because The Coral is a very ambitious project we can't waste time. Since we knew we will need to embed widgets in 3rd party sites for Ask and subsequent projects, just one week after starting my fellowship I started investigating good practices and new ideas around creating embeddable widgets and ended up with [a blogpost](https://zajdband.com/exploring-new-techniques-building-composable-widgets-for-the-web/), a ton of ideas thanks to [Ted Han](https://twitter.com/knowtheory) insights and my first steps with [Preact](http://preactjs.com), a framework that gave me a lot of satisfaction during the year (yep, a front end framework can give you satisfactions) and that I then used in Ask and personal projects. That's also how I met [Jason](https://twitter.com/_developit) who became a great inspiration on how to maintain an open project.

Since I've been playing with embeds it was natural to work with this aspect of Ask. That's how we worked mainly with [Pablo Cuadrado](https://twitter.com/pablocubico) on the [embeds engine](https://github.com/coralproject/elkhorn) with more than great results. In fact we don't even really know how but the Ask embeds often load much faster than the host websites ?. Besides working with the embeds y spent a long time with the Ask Front End that lives next to the Trust one and it's called [Cay](https://github.com/coralproject/cay).

Ask is in beta and we already had experiencies collaborating with newsrooms, for example for the president election in the United States.

### Talk

The last big project for the Coral Project in 2016 and likely the most expected one is [Talk](https://coralproject.net/products/talk.html). Just like Ask was built for unidirectional communication from audience to journalists, talk is about conversation. It is our approximation to the comments section on a website, but unlike any other comment system we want to create a configurable software so the comment box after your article stop being that and starts being something more appropriate and engaging to each audience.

Talk is under heavy development and we expect a beta really soon. I also worked on the core development for this project but as in Ask, I could focus at least for a while in a specific aspect I was especially interested in: Comment moderation. I developed the moderation system that was then integrated into the administration tool. For the moderation tool I focused on user input speed and allowing the tool to be used without connectivity or under restricted data scenarios. That's how I met the [Offline first](http://offlinefirst.org/) community, and learned a lot about the development of Progressive Web Apps.

Aas anything we build at The Coral Project, Talk is Open Source and the Source Code is [available on GitHub](https://github.com/coralproject/talk).

### Alternative Front End for Ask

[<img class="aligncenter size-large wp-image-239" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-1024x556.png" alt="Screen Shot 2017-01-12 at 12.48.56 PM" width="1024" height="556" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-1024x556.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-300x163.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-768x417.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-800x434.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM-35x19.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.48.56-PM.png)

When we started planning Ask, one of the architectural goals was to decouple the Front End from the Back End and from the widget generation (forms and galleries). One of the effects of that decision is the possibility to create new ways to build the forms without using the tool we developed from inside the Coral Project but just our Back End API.

Trying to showcase what is possible using the Ask API and also applying some tricky I learned while working on the Natural Language Processing aspect for [GuriVR](https://gurivr.com), I built an [alternative form generator](https://impronunciable.github.io/askme/) that instead of using the typical widgets drag & drop, it tries to engage in a conversation with the journalist, anticipating some things and making it reflecting about the questions asked and the input type of each question (E-mail, Number, Long text, etc). [The code](https://github.com/impronunciable/askme) is available in GitHub and I also talked a little about the input type inference on a [Source post](https://source.opennews.org/en-US/articles/low-budget-natural-language-processing/).

### Ask WordPress Plugin

[<img class="aligncenter size-large wp-image-237" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-1024x498.png" alt="Screen Shot 2017-01-12 at 11.57.13 AM" width="1024" height="498" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-1024x498.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-300x146.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-768x373.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-800x389.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM-35x17.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-11.57.13-AM.png)



WordPress plays a big part in the online news scenario and that's why creating integrations for our products is a priority. I built this integration to embed Ask Galleries and Forms and also being able to do administration tasks without leaving the WP admin. The plugin and it's code will be available soon.

### Ask bot

[<img class="aligncenter size-full wp-image-238" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png" alt="Screen Shot 2017-01-12 at 12.02.06 PM" width="711" height="300" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png 711w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM-300x127.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM-35x15.png 35w" sizes="(max-width: 711px) 100vw, 711px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-12.02.06-PM.png)



After a conversation with people at BuzzFeed Labs, when they showed us their [BuzzBot](https://github.com/buzzfeed-openlab/buzzbot) I thought about doing an Ask Bot that, when configured pointing to an Ask instance it talk with users that want to complete questionnaires.

The code is available on [GitHub](https://github.com/impronunciable/askbot) and I'm more than happy to help you implement it next to your ask implementation ?.

### Coral Native

[<img class="aligncenter wp-image-240" src="https://zajdband.com/wp-content/uploads/2017/01/quick.gif" alt="quick" width="292" height="553" />](https://zajdband.com/wp-content/uploads/2017/01/quick.gif)



During the first"Coral Week" at the Washington Post HQ, y took some hours to prototype a native mobile app for Trust, the first Coral Project product using React Native and also adding some proof of concepts for moderation in Talk. For example the above gif shows "Quick moderation" that allows comment moderation using our products APIs to moderate comments in a tinder-like fashion.

I killed this project after that week since it wasn't aligned with the Coral roadmap and there were other priorities but it was pretty fun and a very good proof of concept on what can be done without modifying the core code from Trust.  The other takeaway from this project for me was a proof that I could experiment with freedom at the Coral thanks to the support of the team, especially from [Andrew](https://twitter.com/losowsky) and [David](https://twitter.com/daviderwin).

### Muddy

[<img class="aligncenter size-full wp-image-242" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png" alt="Screen Shot 2017-01-12 at 1.29.13 PM" width="597" height="448" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png 597w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM-300x225.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM-35x26.png 35w" sizes="(max-width: 597px) 100vw, 597px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.29.13-PM.png)

As mentioned before, one of my interests while working with Talk was related with comments moderation. Before even starting formally with the project I had some time to research and prototype a moderation app. This app never saw the light of day but most of the concepts were included into the current Talk moderation interface.

The codename for this project is Muddy (a tribute to Muddy Waters) and it's what is called a Progressive Web Application. The idea was to build a moderation app that could be used not only by moderators but also by journalists for example while riding the subway. I had 2 main goals at the time I developed it:

  * It must work under bad connectivity and offline scenarios
  * It should allow different types of input so users can emit moderation actions efficiently under diverse scenarios and use cases

To make the app work offline I used new web standards to make a "Progressive Web Application" that can cache resources and sync when the user is online the next time. On the input types side I worked with Speech Recognition, Keyboard Shortcuts and Touch gestures. I also combined what I did with "Coral Native" adding a "Swipe mode" with Tinder-like cards to make moderation more approachable.

I mentioned some decisions taken for Muddy on my BAFrontend Progressive Web Apps [talk](https://www.acamica.com/charlas/45/un-electrizante-viaje-a-las-progressive-web-applications).

## Personal project and other experiments

### GuriVR

[<img class="aligncenter size-large wp-image-246" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-1024x559.png" alt="Screen Shot 2017-01-12 at 1.53.17 PM" width="1024" height="559" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-1024x559.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-300x164.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-768x419.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-800x437.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM-35x19.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM.png 1440w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.53.17-PM.png)

If there's a project that identifies my fellowship, then that is [GuriVR](https://gurivr.com). It was born from a question I asked myself during the 2015 MozFest after seeing great Virtual Reality related projects.: How far can we simplify the prototyping for VR experiences? Can we make it so a journalist (or any non-graphic-programmer) could do VR? This question mutated into a couple of prototypes before taking the final form of a Virtual Reality [online editor](https://gurivr.com) using natural language as the input both in English and Spanish, a [Twitter bot](https://twitter.com/guri_vr) that takes tweets and returns a VR scebe, a [Slack bot](https://github.com/OpenNewsLabs/guri-slack) and many more things.

I [wrote](http://gurivr.com/guide) [extensively](https://source.opennews.org/en-US/articles/virtual-reality-rest-us/) on the technical side of the project, but there is another important aspect of the project that is tied to the Fellowship spirit on working with this project as I was interested in new things during the year and as you can see in the chart below my interest fluctuate a lot

[<img class="aligncenter size-full wp-image-248" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png" alt="Screen Shot 2017-01-12 at 1.55.12 PM" width="998" height="277" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png 998w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-300x83.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-768x213.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-800x222.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM-35x10.png 35w" sizes="(max-width: 998px) 100vw, 998px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-1.55.12-PM.png)

This project is tied to my interests (and other people requests) but it also helped me test some ideas I had during the year, and that's why even if I worked from time to time during the whole fellowship on this project there were 2 specific nights where I wrote the key parts of Guri:

The first one was the night of the [March Hacks/Hackers New York meetup](https://www.meetup.com/hacks-hackers-nyc/events/229647574/). I had the idea of doing simple VR for everyone in my mind but I didn't have a clear way to implement it. During that Meetup, [Sisi Wei](https://twitter.com/sisiwei) from ProPublica showed how they translate articles to different languages using Google Docs and structuring the translations with [ArchieML](http://archieml.org/). That same night, after asking some questions on the matter to [Mike Tigas](https://twitter.com/mtigas), I named the project and started the first version. "Write your story on a Google Docs, add annotations with ArchieML and get your VR piece":



[<img class="aligncenter wp-image-249 size-full" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png" alt="Screen Shot 2017-01-12 at 2.08.32 PM" width="645" height="662" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png 645w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM-292x300.png 292w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM-35x35.png 35w" sizes="(max-width: 645px) 100vw, 645px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-2.08.32-PM.png)



The second night was the one before presenting Guri to [Miguel Paz](https://twitter.com/miguelpaz) CUNY J-School class. At this point I had this project that took an annotated Google Docs and turned it into a VR scene, but I felt there was still a big learning curve for people not used to structure data (and I also wanted to impress the students). So that same night I started writing a parser that takes natural language from the Google Docs (instead of ArchieML annotations) and transforms it into a VR experience. The code I wrote that night is practically what we have now in the [NLP side](https://github.com/OpenNewsLabs/guri-vr/blob/master/client/shared/nlp.js) for GuriVR.com.

Just as those 2 nights that changed the course of the project based in new ideas I had at the time, there were many more nights and days that piled more features into what you can use now on GuriVR. That hands-on spirit, that was transmitted from OpenNews, helped me develop my creativity and my interests on this project that now has many different use cases.

As an extra, Guri made me start participating on the  [A-Frame](https://aframe.io) community, the VR Framework developed by Mozilla, and also their creators that were really helpful during the whole process.

### Next.js

[<img class="aligncenter size-full wp-image-251" src="https://zajdband.com/wp-content/uploads/2017/01/next.png" alt="next" width="224" height="144" srcset="https://zajdband.com/wp-content/uploads/2017/01/next.png 224w, https://zajdband.com/wp-content/uploads/2017/01/next-35x23.png 35w" sizes="(max-width: 224px) 100vw, 224px" />](https://zajdband.com/wp-content/uploads/2017/01/next.png)



[Guillermo](https://twitter.com/rauchg) showed me the main concepts for this Universal Front End Framework many months ago. That's why after spending many hours configuring a new project I asked him if they had plans to finish implementing the framework. That's how I started contributing to [Next](https://github.com/zeit/next.js).

This is one of the projects I enjoy both contributing, since I learned so much from the amazing [Zeit](https://zeit.co) team and also benefit as a user, a win-win.

### Isopo

[<img class="aligncenter size-full wp-image-252" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png" alt="Screen Shot 2017-01-12 at 3.03.34 PM" width="631" height="289" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png 631w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM-300x137.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM-35x16.png 35w" sizes="(max-width: 631px) 100vw, 631px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.03.34-PM.png)

During the Fellows work week in Buenos Aires, After [Martín](https://twitter.com/tincho_for_ever) showed me the Inception app for Android, It occurred to me to work on [Isopo](https://impronunciable.github.io/isopo/), a web technologies version of that app adding configurable audio filters. The idea is that to make Augmented Reality is not required to use the user camera, we can just listen what's coming from the phone microphone, apply some filters and feed it back to the ears, modifying our reality perception.

### StoryTeller

[<img class="aligncenter size-large wp-image-253" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-1024x532.png" alt="Screen Shot 2017-01-12 at 3.07.10 PM" width="1024" height="532" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-1024x532.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-300x156.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-768x399.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-800x415.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM-35x18.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM.png 1437w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.07.10-PM.png)

[StoryTeller](https://zajdband.com/storyteller/vr.html) is an experiment that uses speech recognition technologies to interact with WebVR, allowing VR exploration using the human voice.

I didn't finish this project but it helped into the development of other [GuriVR](https://gurivr.com) features and showcase the posibilities we have to experiment in the VR space.

### A-Frame Chartbuilder component

[<img class="aligncenter size-full wp-image-254" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png" alt="Screen Shot 2017-01-12 at 3.11.01 PM" width="721" height="339" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png 721w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM-300x141.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM-35x16.png 35w" sizes="(max-width: 721px) 100vw, 721px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.11.01-PM.png)

ExperimentingE with dataviz in 3d I created this [A-Frame](https://github.com/impronunciable/aframe-chartbuilder-component) component that takes charts generated with [ChartBuilder](https://quartz.github.io/Chartbuilder/)  and renders it into a WebVR scene. This experiment talks about the interoperability between the WebVR world and popular web libraries such as d3js.

### Shooting 360 at Coachella

[<img class="aligncenter size-large wp-image-256" src="https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-1024x768.jpg" alt="IMG_20160423_190623" width="1024" height="768" srcset="https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-1024x768.jpg 1024w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-300x225.jpg 300w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-768x576.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-800x600.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623-35x26.jpg 35w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/IMG_20160423_190623.jpg)

I was working on WebVR projects involving a lot of 360 video but I've never filmed in my life, that's when [Miguel](https://twitter.com/miguelpaz) told me he had a student that was interested in filming with his new 360 camera and I met him immediately.

Joseph told me he was about to go to Coachella to film in 360 so I got a press pass and we went to film to the festival. This was one of the experiences I couldn't have in a different context and that helped me understand much better the content producers I worked with.

## Bla Bla Bla | Talks

### WebVR & GuriVR

[<img class="aligncenter size-large wp-image-255" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-1024x510.png" alt="Screen Shot 2017-01-12 at 3.21.40 PM" width="1024" height="510" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-1024x510.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-300x149.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-768x383.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-800x399.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM-35x17.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM.png 1425w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.21.40-PM.png)

  * [SRCCON](http://schedule.srccon.org/#_session-webvr)
  * [MozFest](https://app.mozillafestival.org/#_session-568)
  * [Buenos](https://www.youtube.com/watch?v=r1d8Mc4pJSM)[Aires](https://www.youtube.com/watch?v=r1d8Mc4pJSM), [Miami](http://www.fiumediainnovationlab.com/mediaparty/) y [Africa](https://mediapartyafrica2016.sched.com/event/8aLK/creating-your-first-virtual-reality-experience-with-gurivr-and-a-frame) Media parties

### Offline-First & Progressive Web Applications

[<img class="aligncenter size-large wp-image-257" src="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-1024x578.png" alt="Screen Shot 2017-01-12 at 3.36.56 PM" width="1024" height="578" srcset="https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-1024x578.png 1024w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-300x169.png 300w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-768x433.png 768w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-800x451.png 800w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM-35x20.png 35w, https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM.png 1439w" sizes="(max-width: 1024px) 100vw, 1024px" />](https://zajdband.com/wp-content/uploads/2017/01/Screen-Shot-2017-01-12-at-3.36.56-PM.png)

  * [Encryption and](https://mediapartyafrica2016.sched.com/event/8YYq/encryption-and-offline-access-for-your-site)[offline access for your site](https://mediapartyafrica2016.sched.com/event/8YYq/encryption-and-offline-access-for-your-site) @ Africa Media Party
  * [Progressive Web Apps](https://www.acamica.com/charlas/45/un-electrizante-viaje-a-las-progressive-web-applications) @ BAFrontend
  * Offline-First Panel @ SXSW 2017

## Articles

  * [Virtual Reality for the rest of us](https://source.opennews.org/en-US/articles/virtual-reality-rest-us/)
  * [Enabling Offline First Experiences on the Web with Service Workers](https://medium.com/offline-camp/enabling-offline-first-experiences-on-the-web-with-service-workers-e4bc8c773dae#.2wk7eulgn)
  * [Universal Rendering with Preact](https://zajdband.com/universal-rendering-with-preact/)
  * [Exploring new techniques on building composable widgets for the web](https://zajdband.com/exploring-new-techniques-building-composable-widgets-for-the-web/)
  * [Low-Budget Natural Language Processing](https://source.opennews.org/en-US/articles/low-budget-natural-language-processing/)
  * [Introduction to Preact and Webpack screencast](https://www.youtube.com/watch?v=nZqTzjl2DwE)  
    ## 

## Fellow-Fellows

[<img class="aligncenter size-full wp-image-260" src="https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg" alt="2016fellows-3" width="1000" height="668" srcset="https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg 1000w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-300x200.jpg 300w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-768x513.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-800x534.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3-35x23.jpg 35w" sizes="(max-width: 1000px) 100vw, 1000px" />](https://zajdband.com/wp-content/uploads/2017/01/2016fellows-3.jpg)  
I spent such a great time with my Fellow OpenNews Fellows, and as they say, I had the honor of introducing them into the Alfajor world.

[<img class="aligncenter wp-image-258" src="https://zajdband.com/wp-content/uploads/2017/01/alfajor-819x1024.jpg" alt="alfajor" width="275" height="344" srcset="https://zajdband.com/wp-content/uploads/2017/01/alfajor-819x1024.jpg 819w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-240x300.jpg 240w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-768x960.jpg 768w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-800x1000.jpg 800w, https://zajdband.com/wp-content/uploads/2017/01/alfajor-28x35.jpg 28w, https://zajdband.com/wp-content/uploads/2017/01/alfajor.jpg 1080w" sizes="(max-width: 275px) 100vw, 275px" />](https://zajdband.com/wp-content/uploads/2017/01/alfajor.jpg)

## See you soon!

I'm ending the fellowship and new things will start. I will be back to talk about my new (for now uncertain) adventures.

See you soon ?