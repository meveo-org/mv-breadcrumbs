import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";

import "./mv-breadcrumbs.js";

export class MvBreadcrumbsDemo extends LitElement {
  static get properties() {
    return {
      samples: { type: Array, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      mv-container {
        margin: 20px;
      }
    `;
  }

  constructor() {
    super();
    this.samples = [
      {
        label: "mv-breadcrumbs"
      },
      {
        label: "mv-breadcrumbs",
        icon: html`<mv-fa icon="bread-slice"></mv-fa>`
      },
      {
        label: "mv-breadcrumbs",
        icon: html`<mv-fa icon="bread-slice"></mv-fa>`,
        url: "https://github.com/meveo-frontend/mv-breadcrumbs"
      },
      {
        label: "mv-breadcrumbs",
        icon: html`<mv-fa icon="bread-slice"></mv-fa>`,
        url: "https://github.com/meveo-frontend/mv-breadcrumbs",
        links: [
          {
            label: "github.com",
            icon: html`<mv-fa icon="github-alt"></mv-fa>`,
            url: "https://github.com"
          },
          {
            label: "mv-frontend",
            icon: html`<mv-fa icon="door-open"></mv-fa>`,
            url: "https://github.com/meveo-frontend"
          }
        ]
      },
      {
        label: "mv-breadcrumbs",
        icon: html`<mv-fa icon="bread-slice"></mv-fa>`,
        url: "https://github.com/meveo-frontend/mv-breadcrumbs",
        separator: "/",
        links: [
          {
            label: "github.com",
            icon: html`<mv-fa icon="github-alt"></mv-fa>`,
            url: "https://github.com"
          },
          {
            label: "mv-frontend",
            icon: html`<mv-fa icon="door-open"></mv-fa>`,
            url: "https://github.com/meveo-frontend"
          }
        ]
      },
      {
        label: "mv-breadcrumbs",
        separator: html`<mv-fa icon="play"></mv-fa>`,
        links: [
          {
            label: "github.com",
            icon: html`<mv-fa icon="github-alt"></mv-fa>`,
            url: "https://github.com"
          },
          {
            label: "mv-frontend",
            url: "https://github.com/meveo-frontend"
          }
        ]
      }
    ];
  }

  render() {
    return html`${this.samples.map(
      items => html`
      <mv-container>
        <mv-breadcrumbs .items="${items}"></mv-breadcrumbs>
      </mv-container>
      `
    )}`;
  }
}

customElements.define("mv-breadcrumbs-demo", MvBreadcrumbsDemo);
