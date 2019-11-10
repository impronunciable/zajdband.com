---
id: 14
title: Installing HackDash
date: 2013-04-18T20:47:20-05:00
author: Dan
template: post
guid: http:/?p=14
draft: false
description: "In a previous post I explained the project  
history, goals and involved people. Shortly saying HackDash is a dashboard where  
you can put your project ideas. It was specially designed for Hackatons but it  
was used for other purposes with really good results."
slug: /installing-hackdash/
category: HackDash
tags:
  - HackDash
---
In a [previous post](https://zajdband.com/hackdash) I explained the project  
history, goals and involved people. Shortly saying HackDash is a dashboard where  
you can put your project ideas. It was specially designed for Hackatons but it  
was used for other purposes with really good results.

Since I received lots of mails asking how to install it in different servers  
I decided to make this post explaining how can you install it for yourself.

Furthermore I will explain the steps I usually do in order to install a  
HackDash instance using Heroku and MongoLab (you can use it for free for small  
projects, the free version for both services can hold a HackDash instance with an interesting amount of users and projects).

<img src="https://i.cloudup.com/1tMglJ30bK.png" width="1266" height="771" class="aligncenter" /> 

## Basic Install

### Installation Prequisites

HackDash is based on top of 2 open-source projects:

  * [Node.js](https://nodejs.org/): You can install it using the install button on the home page. If you are using Linux you can build the sources or use your favorite package manager.
  * [MongoDB](https://www.mongodb.org/downloads): the downloads page will help you with the installation process.

That&#8217;s it. If you can run node.js and MongoDB, you can then install a HackDash instance.

### Download the project and install the dependencies

First, download the project source. You can Download it from [this link](https://github.com/danzajdband/hackdash/archive/master.zip) or clone the repo:

<pre>$ git clone git@github.com:danzajdband/hackdash.git
</pre>

Then, inside the project folder, install the dependencies

<pre>$ npm install
</pre>

### Project configuration

When this process finish you&#8217;ll need to config the app. The easiest way is to  
copy the file called `config.json.sample` to `config.json` and  
`keys.json.sample` to `keys.json`.

Open your `config.json` file and set yur config settings.

The `keys.json` file allows different auth providers. You need to fill at least  
one of those to make your users LogIn. I want to provide email + password login  
for the future but now is not available at the moment.

At the moment we allow 4 different auth providers: Twitter, Facebook, Meetup and  
Github. Choose the services you want and fill the file with your credentials.

For example to get Twitter credentials you need to go to  
[Twitter dev](https://dev.twitter.com/) and create a new application.

Keep in mind that the callback url format is /auth/{provider}/callback while you generate the provider  
credentials.

### Run the app

To run the app you just need to start MongoDB (the fork option is optional, it  
will run MongoDB in background) and init the node server.

<pre>$ mongod --fork your/log/file
$ node server.js
</pre>

Then open your browser using the address you provide and will have a fully-working HackDash instance.

### Deploy options

This apply to any node.js project but I left it as a good remainder (don&#8217;t  
forget the HackDash is not more than a [ExpressJS](https://expressjs.com) app) some deployment good advices.

  * If you are going to deploy it in a production environment, start the script with the production flag. 
    $ NODE_ENV=production node server.js</li> 
    
      * It is recommended to use a node script reloader. I recommend  
        [Up](https://github.com/LearnBoost/up) but is up to you.  
        [Forever](https://github.com/nodejitsu/forever) is also widely used.</ul> 
    
    ### Make yourself the Dashboard admin
    
    If you point your browser to yourdomain.com/install while logged in you&#8217;ll  
    became the admin of the Dashboard. The /install route will redirect to the  
    previous page you visited if the admin was selected before.
    
    ## Installation using Heroku and MongoLab
    
    I choose these services because I made some successful installations on this  
    environment, and it&#8217;s pretty easy to work with.
    
    ### Prequisites
    
      * Create a [Heroku](https://heroku.com) account and install the CLI.
    
    ### Download and Configure
    
    The steps (Download and Configure) are the same as the Basic installation, you&#8217;ll want to  
    check it out above. For this type of installation I&#8217;ll ask you to clone the  
    project instead of downloading the source tarball (It will be easy to deploy then). Once you finish configuring your project instance, this are  
    the next steps
    
    ### Create a Procfile
    
    Create a file in the root project folder called `Procfile` and write inside
    
    <pre>web: node server.js
</pre>
    
    ### Create the Heroku application
    
    To create a Heroku app, follow this steps
    
    <pre>$ heroku login
$ heroku create
</pre>
    
    ### Add the MongoLab add-on to the app
    
    I choose the starter package that is free, you can select [https://addons.heroku.com/mongolab](the%20one%20you%20need).
    
    <pre>$ heroku addons:add mongolab:starter
</pre>
    
    Then add your MongoLab URI to the config file, the url will override other db  
    config. To get your MongoLab URI perform this command in your terminal
    
    <pre>$ heroku config | grep MONGOLAB_URI
</pre>
    
    ### Commit the changes, and deploy
    
    You need to commit the changes you made to push the files to heroku.
    
    <pre>$ git add config.json Procfile
$ git commit -m "Heroku deploy config"
$ git push heroku master
</pre>
    
    ### Scale the app
    
    If you want to use more than one process it&#8217;s cool, you just need to change the  
    1 in the following command
    
    <pre>$ heroku ps:scale web=1
</pre>
    
    ### Logs
    
    If you want to see the logs you can do `$ heroku logs`
    
    ## Final notes
    
    This is the process I usually do for both kind of deployments. If you have any  
    questions, please [contact me](mailto:dan.zajdband@gmail.com). The project is under  
    development, I&#8217;ll be glad to add more people to the list of [awesome  
    contributors](https://github.com/danzajdband/hackdash/contributors). [Git  
    tips](https://www.gittip.com/dzajdband/) are also welcome.