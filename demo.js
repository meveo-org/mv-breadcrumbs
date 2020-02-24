import { LitElement, html, css } from "lit-element";
import "mv-container";
import "mv-font-awesome";

import "./mv-breadcrumbs.js";

export class MvBreadcrumbsDemo extends LitElement {
  static get properties() {
    return {
      samples: { type: Array, attribute: false, reflect: true },
      open: { type: Boolean, attribute: true },
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
      
      mv-fa[icon="lightbulb"] {
        font-size: 50px;
        cursor: pointer;
        margin: 20px;
      }
      
      .theme {
        display: flex;
        justify-content: flex-start;
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
    this.open = true;
    this.theme = "light";
  }

  render() {
    const iconColor = `color: ${this.open ? "yellow" : ""}`;
    return html`
      <div class="theme">
        <mv-fa icon="lightbulb" style="${iconColor}" @click=${this.toggleLightBulb}></mv-fa>
      </div>
      ${this.samples.map(items => html`
      <mv-container .theme="${this.theme}">
        <mv-breadcrumbs .items="${items}" .theme="${this.theme}"></mv-breadcrumbs>
      </mv-container>
      `
    )}`;
  }

  toggleLightBulb = () => {
    this.open = !this.open;
    if (this.open) {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
  };
}

customElements.define("mv-breadcrumbs-demo", MvBreadcrumbsDemo);
