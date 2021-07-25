import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import Tooltip from 'flarum/common/components/Tooltip';

const prefix = 'therealsujitk-gifs';

export default class ResultButton extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.loading = false;
        this.hidden = true;                         // Hide the image until the height has been adjusted
        this.rowSpan = Math.random() * 15 + 25;     // The number of rows the button takes
        
        this.id;
        this.icon = 'far fa-star';
    }

    view() {
        const attrs = this.attrs.attributes || {};
        
        this.id = attrs.id;
        this.favourite = attrs.favourite;

        const title = attrs.title;
        const url = attrs.url;
        const onclick = attrs.onclick;

        if (attrs.isFavourite) {
            this.icon = 'fas fa-star';
        }

        return <div style={this.rowSpan && `grid-row-end: span ${Math.round(this.rowSpan)}`}>
            <img alt={title} src={url} style={this.hidden ? 'visibility: hidden' : ''} onclick={(e) => {onclick(e, this.id)}} onload={this.setRowSpan.bind(this)} />
            <Tooltip showOnFocus={false} text={'Add Me'}>
                <Button className={`Button Button--icon hasIcon`} style={this.hidden ? 'visibility: hidden' : ''} icon={!this.loading ? this.icon : ''} loading={this.loading} onclick={this.handleFavourite.bind(this)} />
            </Tooltip>
        </div>;
    }

    setRowSpan(e) {
        this.rowSpan = e.target.height / 5 + 2;
        this.hidden = false;
    }

    async handleFavourite() {
        this.loading = true;
        var result = await this.favourite(this.id);

        if (result) {
            if (this.icon === 'fas fa-star') {
                this.icon = 'far fa-star';
            } else {
                this.icon = 'fas fa-star';
            }

            this.attrs.attributes.isFavourite = !this.attrs.attributes.isFavourite;
        }

        this.loading = false;
        m.redraw();
    }
}
