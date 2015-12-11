# react-kit
React Starter Kit for Quick Start on React !

# Demo

[https://reactstarterkit.herokuapp.com/](https://reactstarterkit.herokuapp.com/)

# Install and work
```
npm install webpack -g
npm install grunt-cli -g
git clone git@github.com:nsisodiya/react-kit.git
cd react-kit
npm install
grunt start-dev-server
```

Now Open

[http://localhost:8000/component/Counter](http://localhost:8000/component/Counter)
or
[http://localhost:8000](http://localhost:8000)

# Video
[![Youtube Video YRL - https://www.youtube.com/watch?v=g4WnyBfiejg](http://img.youtube.com/vi/g4WnyBfiejg/0.jpg)](http://www.youtube.com/watch?v=g4WnyBfiejg)

# Task

Features

- [x] Bable 6 and React 14, Webpack latest
- [x] Hot Reload of JS
- [x] Live-Reload from dist folder !
- [x] react-css-modules
- [x] Component Creator
- [x] Component Viewer
- [x] normalize.css and box-sizing.css
- [x] Inbuilt Flux Implementation
- [x] Sample CounterStore
- [x] Store Creator
- [x] Store Viewer
- [x] Routing - Component Replacement
- [x] Routing - Confirm Navigation Dialog
- [x] Routing - Tabbing - Show/Hide
- [x] Auto Deploy on Heroku
- [ ] Extract Routing Code outside this repo (WIP)
- [ ] Hot Reload of CSS module
- [ ] autoprefixing
- [ ] Test cases adding
- [ ] build failed if test fails.
- [ ] Travis builds
- [ ] Linting and preprocessing etc
- [ ] Animation
- [ ] Image loader
- [ ] svg-icons to font generator !
- [ ] External CSS Loader (WIP)
- [ ] External CSS - Font Awesome or Elemental UI - http://elemental-ui.com/css
- [ ] Minification of JS/CSS
- [ ] grunt deploy to create distribution folder

Basic Components

- [x] Counter Example
- [x] Left Navigator
- [ ] Popup
- [ ] DataTables and Graphs


Other Features (If Possible)
- [ ] Debug in Webstrom
- [ ] Theming
- [ ] Internationalisation
- [ ] Performance Stats - time executions on various components loading/unloading etc
- [ ] Inline Edit Forms etc
- [ ] Isomorphic
- [ ] Show build Error Directly on UI using Red Block


# Directory Structure

```
 ├── Gruntfile.js
 ├── LICENSE
 ├── README.md
 ├── index.html
 ├── package.json
 ├── server.js
 ├── start.sh
 ├── webpack.config.js
 ├─┬ dist/
 │ ├── app.css
 │ └── bundle.js
 ├─┬ scripts/
 │ ├── createComponent.sh
 │ └── createStore.sh
 └─┬ src/
   ├── entry.js
   ├─┬ common/
   │ ├── Actions.js
   │ ├── GenerateSingletonStore.js
   │ ├── dispatcher.js
   │ ├── simpleReactRouter.js
   │ └── util.js
   ├─┬ components/
   │ ├─┬ About/
   │ │ ├── About.css
   │ │ └── About.js
   │ ├─┬ ComponentLoader/
   │ │ ├── ComponentLoader.css
   │ │ └── ComponentLoader.js
   │ ├─┬ ContentArea/
   │ │ ├── ContentArea.css
   │ │ └── ContentArea.js
   │ ├─┬ Counter/
   │ │ ├── Counter.css
   │ │ └── Counter.js
   │ ├─┬ Header/
   │ │ ├── Header.css
   │ │ └── Header.js
   │ ├─┬ InputText/
   │ │ ├── InputText.css
   │ │ └── InputText.js
   │ ├─┬ LeftNav/
   │ │ ├── LeftNav.css
   │ │ └── LeftNav.js
   │ ├─┬ MainApp/
   │ │ ├── MainApp.css
   │ │ └── MainApp.js
   │ ├─┬ StoreActionsViewer/
   │ │ ├── StoreActionsViewer.css
   │ │ └── StoreActionsViewer.js
   │ ├─┬ StoreLoader/
   │ │ ├── StoreLoader.css
   │ │ └── StoreLoader.js
   │ ├─┬ UserInfo/
   │ │ ├── UserInfo.css
   │ │ └── UserInfo.js
   │ └─┬ UserList/
   │   ├── UserList.css
   │   └── UserList.js
   ├─┬ css/
   │ ├── loadcss.js
   │ ├── style.css
   │ ├── images/
   │ └── svg-icons/
   └─┬ stores/
     └── CounterStore.js
```