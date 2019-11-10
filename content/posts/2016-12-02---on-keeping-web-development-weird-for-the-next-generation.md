---
id: 213
title: On keeping Web Development weird for the next generation
date: 2016-12-02T04:09:06-05:00
author: Dan
template: post
draft: false
guid: https://zajdband.com/?p=213
slug: /on-keeping-web-development-weird-for-the-next-generation/
image: /wp-content/uploads/2016/12/1480830286_8e73e9d664_o.jpg
category: Web
description: "Enjoying a Spring Friday in December, looking for ways to ruin my existence, I was inclined to read a couple of pending resources from the excellent Rust Docs. Catching errors at compile time, Static type-checking, immutable bindings, we can do these things now in JavaScript — that’s amazing!"
tags:
  - opennews
  - thoughts
  - prototyping
---
Enjoying a Spring Friday in December, looking for ways to ruin my existence, I was inclined to read a couple of pending resources from the excellent [Rust Docs](https://www.rust-lang.org/en-US/documentation.html). Catching errors at compile time, Static type-checking, immutable bindings, we can do these things now in JavaScript — that’s amazing!

But wait! Rust is a System Programming Language, its main goal is to make programs work as intended, super fast and avoiding memory management issues. I'd love my payment processor, self-driving car, or my OS to be written in a language based on these principles. Don’t get me wrong it's not that I don’t want my home banking website to mistakenly empty my account or Amazon to offer me a product again as soon as I buy it ?. The issue here is that in order to guarantee all the promises we get from a language we must concede some freedom at development time.

Your program correctness and memory safety is based on following a number of unbreakable rules. If you try to break them, you’ll get a message from the compiler and your program won’t run. In web development, we don’t usually have these limitations. If you ever used the Internet you’ll know that this freedom can lead to a lot of broken sites and apps. Because of that, it is great that every day we get new tools for improving our websites and apps.

&nbsp;

<img style="margin: 0 auto" class="size-medium wp-image-215" src="https://zajdband.com/wp-content/uploads/2016/12/14430037620_976ddf0df1_z-300x188.jpg" alt="Messi can be Messy and awesome, like web dev." width="300" height="188" srcset="https://zajdband.com/wp-content/uploads/2016/12/14430037620_976ddf0df1_z-300x188.jpg 300w, https://zajdband.com/wp-content/uploads/2016/12/14430037620_976ddf0df1_z-35x22.jpg 35w, https://zajdband.com/wp-content/uploads/2016/12/14430037620_976ddf0df1_z.jpg 640w" sizes="(max-width: 300px) 100vw, 300px" /> 

<p style="text-align: center; font-size: 15px;">
  Messi can be Messy and awesome, like web dev
</p>

It worries me that we are focusing too much on making the web correct, fast and scalable that we forget that part of the beauty in Web Dev is about being able to transmit your ideas and unleash your creativity with the tiniest possible friction. [I](https://zajdband.com/screencast-in-spanish-introduccion-a-preact-con-webpack-y-babel/) [love](https://zajdband.com/universal-rendering-with-preact/) [to](https://zajdband.com/exploring-new-techniques-building-composable-widgets-for-the-web/) [use](https://gurivr.com) (p)react, Typescript, Flow, Babel and Webpack for my apps. But I also love to be able to throw a bunch of script tags and create [a weird VR scene](https://impronunciable.github.io/webvr-experiments/village/) or a [crazy Web Audio API experiment](https://impronunciable.github.io/isopo/).

I don’t want part of the next generation of web developers to think that you need to transpile, type-check, use a package manager, a framework for UI, another framework for global state, and a Service Worker automatic generation tool to be able to play around or to do an interactive piece. I think these concepts are important for some part of the web, but not for the web ecosystem as a whole. Being messy is a big part of learning, even to learn that it’s not the best path.

The question will then be: Are we keeping web development weird enough?

<small style="font-size: 13px;"><a href="https://www.flickr.com/photos/jimmiehomeschoolmom/1480830286/in/photolist-3fRDfE-c1piBN-apV9yp-9rP4hU-9rP4j1-85HcT-spNLud-dxNDVJ-nME1EL-dKBky1-aJGYvi-961nv8-di5kH1-6d7sak-aoCx48-bZJMAG-ajxosJ-9eJiWK-7Lr1ne-dNdvPx-inupcY-7AUfvg-nkDPX4-gr7W4K-9r5tfZ-fJAgRi-r9tqA3-pNb4Ak-dC9iMR-ow7PEx-6vNmg1-7jS6rM-dC47Uq-2nfz2C-7xQJHe-bfqLyc-5i2Hit-7jVULw-a3bDeL-6jzMQY-h8tEDJ-7jS1wH-azEzLn-atUMP4-6dVNxf-owCSc5-6qtgKa-6MBMb2-7Ujiwf-azEAo6">Manatee drawing</a> by <a href="https://www.flickr.com/photos/jimmiehomeschoolmom/">Jimmie</a></small>  
<small style="font-size: 13px;">Thanks <a href="https://twitter.com/sandhya__k">Sandhya</a> for the spell and grammar check 🙂</small>