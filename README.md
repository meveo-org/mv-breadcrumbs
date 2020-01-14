# mv-breadcrumbs

 MvBreadcrumbs is a Meveo component (based on lit-element) that renders breadcrumb links.

## Features
* Allows custom elements to be used in breadcrumb labels
* Written in vanilla javascript


## Quick Start

To experiment with the MvBreadcrumbs component.

1. Clone this repo.
2. Serve the project from the root directory with some http server (best served with meveo itself)
3. Sample breadcrumbs usage is included in the `demo.js`

The links to be displayed are passed into the component in an `items` object with the following structure:
```javascript
{
  label,        -> the label of the current node/page, REQUIRED, e.g. "Accounts"
  url,          -> the url of the current node/page, OPTIONAL, e.g. "https://github.com/meveo-org/mv-breadcrumbs"
  icon,         -> the icon of the current node/page, OPTIONAL, e.g. html`<mv-fa icon="heart"></mv-fa>`
  separator,    -> the separator to be used between items, OPTIONAL, e.g. html`<mv-fa icon="angle-right"></mv-fa>` or "&rsaquo;" or ">"
  links: [      -> array of links for each node/page in the breadcrumb history, fields are same as above, OPTIONAL
    {
      label,
      url,
      icon
    }
  ]
}
```

## Sample usage
```javascript
const items = {
  label: "mv-breadcrumbs",
  icon: html`<mv-fa icon="bread-slice"></mv-fa>`,
  url: "https://github.com/meveo-org/mv-breadcrumbs",
  links: [
    {
      label: "github.com",
      icon: html`<mv-fa icon="github-alt"></mv-fa>`,
      url: "https://github.com"
    },
    {
      label: "mv-frontend",
      icon: html`<mv-fa icon="door-open"></mv-fa>`,
      url: "https://github.com/meveo-org/mv-frontend"
    }
  ]
};

<mv-breadcrumbs .items="${items}"></mv-breadcrumbs>
```
You can also check this [demo](https://breadcrumbs.meveo.org/)