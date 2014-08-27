# Stormcrow #

This README will documents the steps necessary to get our app up and running.

### What is this repository for? ###

Awesome d20 gaming system components - starting off with a simple diceroller written in HTML, SCSS and Angular

End game being an app for playing D&D and other rpgs online

### How do I get set up? ###

1. Install Mongodb:  [OSX](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) | [Windows](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)

2. Install Node from [Node](http://nodejs.org/)

3. Install [Grunt](http://gruntjs.com/)  globally  from the command line 'npm install -g grunt-cli'

4. Install [Bower](http://bower.io/)  globally from the command line 'npm install -g bower'

5. Install latest version of [Ruby](http://rubyinstaller.org/)

6. We need bleeding edge version of [SASS](http://sass-lang.com/) with compass so run 'gem install compass --pre'
- check out this [link](http://stackoverflow.com/questions/22427567/is-sass-3-3-3-compatible-with-compass) if having issues.

7. set up your private fork of this repo (see the "working with git" section)

8. Navigate to the folder using the command line

9. Run 'npm install'

10. Run 'bower install'



### How do I work on this bad boy? ###

Once you're all set up following the steps above, you'll need two shells (terminal or commandline) running.  One with Mongodb and one with the app.  Steps below.

1. To start local mongoDB instance, in a terminal/commandline shell run ‘sudo mongod’ on mac or just 'mongod' if windows

2. Navigate to your local Stormcrow folder  using a second shell.

3. Run 'grunt serve' - good to go!

If it isn't working and you've recently pulled from upstream, try doing npm install or bower install to make sure all dependencies are up to date.


### Working with Git ###

1. Fork the [main(upstream) repo](https://github.com/websuperheroes/stormcrow)

2. Create your own 'dev' branch

3. Clone the forked repo into your local file system

4. Create feature branches etc as required

5. When a feature is complete and conforms to quality standards, merge the feature branch back into your local master.

6. issue a pull request from your forked repo to the upstream repo

7. code review will be completed, if necessary, fix code and return to step 6

8. if your code is accepted, it will be pulled to the dev branch of the upstream repo for futher testing and eventual integration in the release/master branch.


### Working with SASS ###

#### The Folder structure ####

* core - Contains a base set of partials that will be part of every project. These include the grid system, normalise, layout and helper classes/functions
* Foundation - This lays on top of core, adding project specific modifiers and config files containing project-wide variables.
* modules - This holds the projects modules. These are independent and reusable chunks of code that can be reused throughout the project and other projects.
* vendor - External libraries
* page specific styles are stored in the folders alongside the html and controllers.

#### Naming conventions / styleguide etc ####

We are using a loosely


### Endpoints ###

The API currently look like this:

    /api
    ├── /users
    │   ├── /               - [GET] List users (all users if admin)
    │   ├── /               - [POST] Create user
    │   ├── /me             - [GET] Get current user
    │   ├── /:id            - [GET] show user by id
    │   ├── /:id            - [DELETE] delete user by id (admin only)
    │   └── /:id/password   - Change a users password
    │
    ├── /games
    │   ├── /               - [GET] Get all games
    │   ├── /open           - [PUT] Get all games accepting new players
    │   ├── /user           - [GET] Get all games user is involved with
    │   ├── /create         - [POST] Create a game
    │   └── /character      - [POST] Create a character in the game
    │
    ├── /dice-rolls
    │   ├── /sides          - [GET] Get all dice sides
    │   ├── /modifiers      - [GET] Get all dice modifiers
    │   └── /amount         - [GET] Set the number of dice
    │
    └── /*                  - index.html



### Who do I talk to? ###

* David Berner @davislurve
* Bard Hovde @bungledup
* Jon Russell
* Gary 'Frog' Wood

### Troubleshooting ###

* If you encounter build errors related to SASS compilation (triggered by compass), try updating your sass to 3.3+ and compass versions to the latest releases.


### Useful Info / Links ###

#### Angular ####

* File structure based on: [generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)
* [Google File structure best practices](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)
* [Learn AngularJS in a day](http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/)
* [Getting Started with Angular](http://www.youtube.com/watch?v=WuiHuZq_cg4&list=PL173F1A311439C05D&context=C48ac877ADvjVQa1PpcFONnl4Q5x8hqvT6tRBTE-m0-Ym47jO3PEE%3D) videos
* [Google Angular Best Practices](http://blog.angularjs.org/2014/02/an-angularjs-style-guide-and-best.html)
*

#### Git ####

* [Git fork-merge workflow](http://x-team.com/2013/09/our-git-workflow-forks-with-feature-branches/) basis for our git workflow


### License ###

Apache License 2.0: i.e Not to be stolen

### Contribution guidelines ###

(All this shizzle to come)

* Writing tests
* Code review
* Other guidelines


