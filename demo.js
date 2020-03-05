import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";

import "./mv-breadcrumbs.js";

export class MvBreadcrumbsDemo extends LitElement {
  static get properties() {
    return {
      samples: { type: Array, attribute: false, reflect: true },
      theme: { type: String, attribute: true }
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
      
      fieldset > label, label > input {
        cursor: pointer;
      }
      
      fieldset {
        width: 120px;
        margin-left: 10px;
        border:2px solid red;
        -moz-border-radius:8px;
        -webkit-border-radius:8px;	
        border-radius:8px;
        color: #818181;
      }
      
      legend {
        font-weight: 500;
        color: red;
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
    this.theme = "light";
  }

  render() {
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
        <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
      </fieldset>
      ${this.samples.map(items => html`
      <mv-container .theme="${this.theme}">
        <mv-breadcrumbs .items="${items}" .theme="${this.theme}"></mv-breadcrumbs>
      </mv-container>
      `
    )}`;
  }

  changeTheme = originalEvent => {
    const { target: { value } } = originalEvent;
    this.theme = value;
  };
}

customElements.define("mv-breadcrumbs-demo", MvBreadcrumbsDemo);
