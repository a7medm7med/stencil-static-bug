let documentDirection = document.documentElement.dir || 'ltr';

export class LocalizeController {
	static {
		console.log('Test static');
	}
	
	constructor( private readonly host: HTMLElement ) {
		this.host = host;
	}

	/**
	 * Gets the host element's directionality as determined by the `dir` attribute. The return value is transformed to
	 * lowercase.
	 */
	dir() {
		return `${ this.host.dir || documentDirection }`.toLowerCase();
	}
}
