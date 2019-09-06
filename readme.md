

# Student Opportunity Design System

Use this design system to make your service consistent with Student Opportunity. Learn from the research and experience of SO IT Team and Central Warwick Web Team and avoid repeating work that’s already been done.


## local prototyping environment

This codebase allows you to quickly get a local node server running using nunjucks templating, Express, SASS compiling and LiveReload. This drastically speed ups UI compoment development and documentation. It includes the latest warwick ID7 design as nunjucks templates.

The codebase includes build scripts for things like SASS to CSS and static site generation. Running:

```javascript
  gulp build
```

Pushing changes back to the remote git repository will deploy these static build files to the following address:

https://warwick-scs.netlify.com/

See the [technical docs for more details of how to get setup](docs/technical/introduction.md)

## Design system

The docs folder contains a design system and guidance how to use the various typographical and design elements in Student Careers and Skills design system

### styles
Guides for applying layout, typography, colour and images.

### components
Save time with reusable, accessible components for forms, navigation, panels, tables and more.

### patterns
Help users complete common tasks like entering names and addresses, filling in forms and creating accounts.

See the [style guide docs for more details of how to use](docs/style-guide/introduction.md)
