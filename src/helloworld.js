import { html, css, LitElement } from 'lit'

export class helloworld extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `

  static properties = {
    name: { type: String },
  }

  constructor() {
    super()
    this.name = 'World'
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`
  }
}
customElements.define('hello-world', helloworld)
