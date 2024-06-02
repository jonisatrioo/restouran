class MenuFooter extends HTMLElement{
    _shadowRoot = null;
    _style = null;

    constructor(){
        super();

        this._shadowRoot = this.attachShadow({mode: 'open'});
        this._style = document.createElement('style');
    }

    _updateStyle(){
        this._style.textContent = `
        :host {
            display: block;
        }

        div {
            padding: 24px 20px;

            background-color: #D17C44;
            color: white;
            
            text-align: center;
        }
        `;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = '';
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML +=`
        <div class="footer">
            Restaurant Apps &copy; 2024
        </div>
        `;
    }
}

customElements.define('menu-footer', MenuFooter);