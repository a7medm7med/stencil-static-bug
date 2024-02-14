import { Component, ComponentInterface, Element, h } from '@stencil/core';
import { LocalizeController } from '../../controllers/localize';

@Component({
  tag: 'custom-button',
  styleUrls: ['button.background.scss', 'button.text.scss'],
  shadow: true,
})
export class Button implements ComponentInterface {
	private localizeController!: LocalizeController;

	@Element() el!: HTMLElement;

  connectedCallback() {
		this.localizeController = new LocalizeController( this.el );
    console.log(this.localizeController.dir());
    
  }

  render() {
    return <button class="button">Button Text</button>;
  }
}
