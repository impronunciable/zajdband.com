---
description: "I migrated a small real-world app from Express + MongoDB to Now + Firebase. I'm happy I was able to do it in ~10 hours and I don&#8217;t need to maintain or spend money on servers (at least for now)."
socialImage: "/photo.jpg"
title: 'Nowhere to SSH: my journey into the Serverless world'
date: "2019-10-09T16:23:35-05:00"
template: "post"
draft: false
slug: /nowhere-to-ssh-my-journey-into-the-serverless-world/
author: Dan
layout: post
guid: https://zajdband.com/?p=291
category: serverless
tags:
  - serverless
  - gurivr
  - firebase
  - zeit
---
<blockquote class="wp-block-quote">
  <p>
    tl;dr: I migrated a small real-world app from Express + MongoDB to Now + Firebase. I&#8217;m happy I was able to do it in ~10 hours and I don&#8217;t need to maintain or spend money on servers (at least for now).
  </p>
</blockquote>

Since [I&#8217;m](https://twitter.com/jdbothma/status/1100714277185433602) [terrible](https://twitter.com/erik_mh/status/1181399247763202048) [at](https://twitter.com/fcaivano/status/849084831959052288) [](https://twitter.com/erik_mh/status/1181399247763202048)[managing](https://twitter.com/lu_cyP/status/922346987487449088) my personal project&#8217;s servers I wanted to believe the hype around Serverless architectures. My intention was to go to a scenario where I don&#8217;t have to worry about scalability, OS vulnerabilities, web servers, SSL certificates or database backups. Time will tell but for now it seems that&#8217;s the case.

## The state where I was in

To start experimenting with this technology I chose [GuriVR](https://gurivr.com). It was a Preact app with a tiny Express backend using MongoDB as the primary database, you can explore the old [codebase](https://github.com/OpenNewsLabs/guri-vr/tree/3f293ea45b421169e6a8559e3d5df49dcab829d4). It was hosted on a $10/month DigitalOcean droplet along with other apps and sites.

## Changing the mindset

I looked at different platforms and frameworks and decided to give a chance to [Now](https://zeit.co) from Zeit, the magic **now** command played an important part in the decision.

What I understood from the docs is that in the serverless world you get a kind of clean slate on every request. The goal is to return as fast as possible and avoid persistent connection. Firebase was a great fit for my need because it offers two products I needed to implement: Stateless authentication instead of the MongoDB backed user sessions in the old system and the **Firestore** database. One functionality I wasn&#8217;t giving up easily that I got for free in Firebase was the &#8220;passwordless&#8221; authentication.

Besides the database and authentication provider change I haven&#8217;t had to change too much. The Frontend compiles to a static app that **Now** delivers super fast with their Smart CDN. The **Express** app was easy to convert. I just moved each endpoint to a separate file, matching the API structure. For the frontend I used @now/static and for the backend @now/node.

Most of the ~10 hours I had to work on the migration where spent implementing the new firebase authentication and updating the database calls to use Firestore. I also moved the file uploads from AWS S3 to the Firestore Storage service just because I thought it was better to have all the services in the same provider and dashboard ¯\_(ツ)_/¯.

## Platform specific configuration

Besides moving the backend endpoints to different files exporting the lambda functions I had to create a now.json file to hep **Now** figure out how my project should be deployed. This was the first time I did this and I&#8217;m sure there are better ways to do it but this is what I got:

<pre class="wp-block-code"><code>{
  "version": 2,
  "name": "gurivr",
  "builds": [
    { "src": "api/**", "use": "@now/node" },
    { "src": "client/dist/**", "use": "@now/static" }
  ],
  "routes": [
    { "src": "/api/preview", "dest": "api/preview.js" },
    { "src": "/api/stories", "dest": "api/stories.js" },
    { "src": "/api/stories/([^/]+)", "dest": "api/story.js?id=$1" },
    { "src": "/api/assets/search", "dest": "api/assets/search.js", "headers": { "Access-Control-Allow-Origin": "*" } },
    { "src": "/(login|guide|stories)", "dest": "/client/dist/index.html" },
    { "src": "/stories/create", "dest": "/client/dist/index.html" },
    { "src": "/(.*)", "dest": "/client/dist/$1" }
  ],
  "env": {
    "FIREBASE_ADMIN": "@firebase-admin",
    "FLICKR_SECRET_KEY": "@flickr-secret-key",
    "GMAPS_SECRET_KEY": "@gmaps-secret-key",
    "FREESOUND_SECRET_KEY": "@freesound-secret-key",
    "STORAGE_BUCKET": "@storage-bucket"
  }
}</code></pre>

This was maybe the trickiest part of the project but it wasn&#8217;t that hard to be honest. The development phase was a delight. To start a local server I just typed **now dev** and that was it. The node.js backend and the frontend were up in about one second. It also offers live-reload, something that I wasn&#8217;t even expecting 😍. On development mode you can set a _.env_ file to provide environment variables and secrets.

Every time I wanted to see if everything worked well &#8220;in the internets&#8221; I just used the **now** command that returns a nice development url for every deploy.

## The &#8220;deployment&#8221;

This felt like cheating. For deploying to production I had to do 2 things. The first one was setting up the secrets using the **now** tool. This means typing **now secrets add my-secret &#8217;42&#8217;**. Then, to get a production build I executed again the **now** command but with the **&#8211;prod** flag, and that was it (I promise).

## What&#8217;s next?

You can see the [diff](https://github.com/OpenNewsLabs/guri-vr/commit/b8fe814c90f601679cf32fe022280f3bbf77d3a1) on the codebase and get your own conclusion. My next move will be to figure out how to move this blog and my other projects to this schema. You can reach me on [twitter](https://twitter.com/impronunciable) if you have questions or want to add something to the discussion.