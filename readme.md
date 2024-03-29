

# Student Opportunity Design System

Use this design system to make your service consistent with Student Opportunity. Learn from the research and experience of SO IT Team and Central Warwick Web Team and avoid repeating work that’s already been done.


## Local prototyping environment

This codebase allows you to quickly get a local node server running using nunjucks templating, Express, SASS compiling and LiveReload. This drastically speed ups UI compoment development and documentation. It includes the latest warwick ID7 design as nunjucks templates.

## Requirements

You'll usually need admin access to your machine to install the software. If you do not have admin access, ask your IT team to install the software for you.

You'll need:

Node.js 8.x.x and NPM
Atom or VSCode etc.
Command line tools (Mac)
Git desktop of equivalent


## Installation

1. Clone the code source into your home directory
2. Navigated to this directory from Terminal
3. npm install - this will install all the Node modules required
4. npm start
5. view at localhost:3000
6. Install LiveReload extension for chrome and enable


```bash
  git clone https://github.com/Warwick-Careers-IT/SO-Design-System.git
  cd SO-Design-System
  npm install
  npm start
```

The codebase includes build scripts for things like SASS to CSS and static site generation. Running:

```bash
  gulp build
```
Will compile SASS in site.css and write out static html files into dist folder

Pushing changes back to the remote git repository will deploy these static build files to the following address:

[https://warwick-so-design-system.netlify.com](https://warwick-so-design-system.netlify.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1f3cba9c-a238-4e89-b2ea-1eeec7fd0c88/deploy-status)](https://app.netlify.com/sites/warwick-so-design-system/deploys)


## Design system

The docs folder contains a design system and guidance how to use the various typographical and design elements in Student Careers and Skills design system

### styles
Guides for applying layout, typography, colour and images.

### components
Save time with reusable, accessible components for forms, navigation, panels, tables and more.

### patterns
Help users complete common tasks like entering names and addresses, filling in forms and creating accounts.

