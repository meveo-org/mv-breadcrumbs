import { LitElement, html, css } from "lit-element";

export class MvBreadcrumbs extends LitElement {
  static get properties() {
    return {
      /* items is an Object with the following structure:
      {
        label,        -> the label of the current node/page, REQUIRED, e.g. "Accounts"
        url,          -> the url of the current node/page, OPTIONAL, e.g. "https://github.com/meveo-frontend/mv-breadcrumbs"
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
      */
      items: { type: Object, attribute: false, reflect: true }
    };
  }

  static get styles() {
    return css`
			:host {
        font-family: var(--mv-font-family, Arial);
				font-size: var(--mv-font-size-m, 1.2rem);
      }

      ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: row;        
        align-items: center;
        justify-content: flex-start;
      }

      li {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      li * {
        color: var(--mv-breadcrumbs-color, #4F4F4F);
      }

      li .url a {
        text-decoration: var(--mv-breadcrumbs-link-decoration, underline);        
      }

      li:hover .url .label {
        text-decoration: underline;
        color: var(--mv-breadcrumbs-hover-color, #B8CCE0);
      }

      .separator {
        font-size: inherit;
        padding: 0;
        margin: var(--mv-breadcrumbs-separator-margin, 0 10px);
      }

      .icon {
        font-size: inherit;
      }
		`;
  }

  constructor() {
    super();
    this.items = {};
  }

  render() {
    const { label, separator, links } = this.items;
    const hasLabel = !!label;
    const linksCount = !!links && links.length;
    const hasLinks = linksCount > 0;
    return hasLabel
      ? html`
      <nav>
        <ul>
          ${hasLinks
            ? links.map((link, index) =>
                this.renderLink(link, separator, index)
              )
            : html``}
            ${this.renderLink(this.items, separator, linksCount)}
        </ul>
      </nav>
    `
      : html``;
  }

  renderLink(link, separator, index) {
    const { label, url, icon } = link;
    const hasUrl = !!url;
    return html`
      <li>
        ${index > 0
          ? html`<span class="separator">${!!separator
              ? separator
              : html`&rsaquo;`}</span>`
          : html``}
        ${hasUrl
          ? html`
          <span class="url">
            <span class="icon">${icon}</span>
            <a href="${url}"><span class="label">${label}</span></a>
          </span>`
          : html`<span class="icon">${icon}</span><span class="label">${label}</span>`}
      </li>
    `;
  }
}

customElements.define("mv-breadcrumbs", MvBreadcrumbs);
