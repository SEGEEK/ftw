# Full Stack + Typescript + Webpack + Anglular 1 For the win!

> Warning: Very much a work in progress by someone who is very much a noob with both Typescript and Webpack.

I found myself very irritated by the lack of full stack samples for angular 1 applications built with typescript bundled with a module loader.  So I am rolling my own, this is mainly a way to enable me to start migrating my angular 1 code to angular 2, there is plenty of guidance that say the first step of the migration are 'use typescript and use a module loader' but I am irritated that all the samples I can find seem to forget the server component.

General webpack setup for server and client based on ideas mentioned on this [excellent blog post series](http://jlongster.com/Backend-Apps-with-Webpack--Part-I) by [James Long](https://github.com/jlongster)
And then shamlessly mixing in ideas from [Angular Typescript Webpack](https://github.com/brechtbilliet/angular-typescript-webpack)

### Setup

```
npm install -g gulp
npm install
gulp run
```
This will build the server and the client app, and watch both.  The server will reload when changes are made

### Todo
- [ ] Get Typescript actually working
- [ ] Get typings setup
- [ ] Get angular included
- [ ] Get something like browser sync in place
- [ ] All the other proper open-sourcy type things
- [x] ?
- [ ] Profit!