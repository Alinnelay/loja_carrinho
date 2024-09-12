class Card extends HTMLElement {
    constructor() {
        super();
    }

  connectedCallback() {

        const div = document.createElement("div");
        div.className = "card mb-3 mt-3";
        div.innerHTML = `
        <div class="col">
            <div class="card">
              <img src="${this.getAttribute('imgScr')}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"> ${this.getAttribute('title')} </h5>
                <p class="card-text fw-bold"> ${this.getAttribute('text')} </p>
                <p class="card-text"> ${this.getAttribute('textDesc')} </p>
                <a href="detalhes.html?id=${this.getAttribute('id')}" class="btn btn-primary"> veja mais </a>
              </div>
            </div>
        </div>`;
        this.appendChild(div);
    }
}

customElements.define("card-news", Card);