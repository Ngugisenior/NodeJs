/**
 * @property {string} selector
 * @property {Component} component
 * @property {HTMLElement} queryRoot
 */
export default class Finder {

	/**
	 * @param {string} selector
	 * @param {HTMLElement} scope
	 * @param {Component} component
	 * @param {Function} func
	 */
	constructor(selector, scope, component, func = null) {
		this.selector = selector;
		this._component = component;
		this.queryRoot = scope;
		if (func) this.each(func);
		this.on = {
			click: (handler, debounce = 0) => {return this.listen('click', handler, debounce);},
			contextMenu: (handler, debounce = 0) => {return this.listen('contextmenu', handler, debounce);},
			dblclick: (handler, debounce = 0) => {return this.listen('dblclick', handler, debounce);},
			wheel: (handler, debounce = 0) => {return this.listen('wheel', handler, debounce);},
			submit: (handler, debounce = 0) => {return this.listen('submit', handler, debounce);},
			input: (handler, debounce = 0) => {return this.listen('input', handler, debounce);},
			change: (handler, debounce = 0) => {return this.listen('change', handler, debounce);},
			clipboard: {
				paste: (handler, debounce = 0) => {return this.listen('paste', handler, debounce);},
				cut: (handler, debounce = 0) => {return this.listen('cut', handler, debounce);},
				copy: (handler, debounce = 0) => {return this.listen('copy', handler, debounce);}
			},
			touch: {
				start: (handler, debounce = 0) => {return this.listen('touchstart', handler, debounce);},
				end: (handler, debounce = 0) => {return this.listen('touchend', handler, debounce);},
				move: (handler, debounce = 0) => {return this.listen('touchmove', handler, debounce);},
				cancel: (handler, debounce = 0) => {return this.listen('touchcancel', handler, debounce);}
			},
			mouse: {
				down: (handler, debounce = 0) => {return this.listen('mousedown', handler, debounce);},
				enter: (handler, debounce = 0) => {return this.listen('mouseenter', handler, debounce);},
				leave: (handler, debounce = 0) => {return this.listen('mouseleave', handler, debounce);},
				over: (handler, debounce = 0) => {return this.listen('mouseover', handler, debounce);},
				up: (handler, debounce = 0) => {return this.listen('mouseup', handler, debounce);},
				click: (handler, debounce = 0) => {return this.listen('click', handler, debounce);},
				contextMenu: (handler, debounce = 0) => {return this.listen('contextmenu', handler, debounce);},
				dblclick: (handler, debounce = 0) => {return this.listen('dblclick', handler, debounce);},
				wheel: (handler, debounce = 0) => {return this.listen('wheel', handler, debounce);}
			},
			key: {
				down: (handler, debounce = 0) => {return this.listen('keydown', handler, debounce);},
				press: (handler, debounce = 0) => {return this.listen('keypress', handler, debounce);},
				up: (handler, debounce = 0) => {return this.listen('keyup', handler, debounce);}
			},
			focus: {
				focus: (handler, debounce = 0) => {return this.listen('focus', handler, debounce);},
				in: (handler, debounce = 0) => {return this.listen('focusin', handler, debounce);},
				out: (handler, debounce = 0) => {return this.listen('focusout', handler, debounce);},
				blur: (handler, debounce = 0) => {return this.listen('blur', handler, debounce);}
			},
			drag: {
				drag: (handler, debounce = 0) => {return this.listen('drag', handler, debounce);},
				end: (handler, debounce = 0) => {return this.listen('dragend', handler, debounce);},
				enter: (handler, debounce = 0) => {return this.listen('dragenter', handler, debounce);},
				leave: (handler, debounce = 0) => {return this.listen('dragleave', handler, debounce);},
				over: (handler, debounce = 0) => {return this.listen('dragover', handler, debounce);},
				start: (handler, debounce = 0) => {return this.listen('dragstart', handler, debounce);},
				drop: (handler, debounce = 0) => {return this.listen('drop', handler, debounce);}
			}
		}
	}


	/**
	 * returns the first matching node
	 * @returns {Element | null}
	 */
	get node() {
		if (this.selector === null) return this.queryRoot;
		let elements = this.queryRoot.querySelectorAll(this.selector);
		for (let i in elements) {
			if (elements[i]?.parentElement?.closest('[is]').component === this._component) return elements[i];
		}
		return null;
	}
	/**
	 * returns the first matching node's component
	 * @returns {Component | null}
	 */
	get component() {
		let element = this.node;
		return (element && element.hasOwnProperty('component')) ? element.component : null;
	}

	/**
	 * returns the first matching node, and do something with it through a callback method
	 * @param {function} func
	 * @returns {Element | null}
	 */
	first(func) {
		let node = this.node;
		if (node) func(node);
		return node;
	}

	/**
	 * returns all matching nodes
	 * @returns {Element[]}
	 */
	get nodes() {
		if (this.selector === null) return [this.queryRoot];
		let elements = this.queryRoot.querySelectorAll(this.selector);
		return Array.prototype.filter.call(elements, element => element.parentNode.closest('[is]').component === this._component);
	}
	/**
	 * returns all matching nodes, and do something with those through a callback method
	 * @param {function} func
	 * @returns {Element[]}
	 */
	each(func) {
		let nodes = this.nodes;
		nodes.forEach(node => func(node));
		return nodes;
	}

	/**
	 * attach an event listener to the adressed nodes
	 * @param {string | Array<string>} events
	 * @param {function} handler
	 * @param {number} debounce
	 * @returns {Finder}
	 */
	listen(events, handler, debounce = 0) {
		if (typeof events === 'string') events = [events];
		this.each((element) => {
			events.forEach(eventType => {
				if (debounce !== 0 && typeof debounce === 'number') {
					let debouncer = new Debouncer(handler, debounce);
					handler = (event, target) => debouncer.trigger(event, target);
				}
				element.addEventListener(eventType, event => handler(event, element));
			});
		});
		return this;
	}

	/**
	 * shortcut for click events through the listen method
	 * @param {function} handler
	 * @param {number} debounce
	 * @returns {Finder}
	 */
	click(handler, debounce = 0) {return this.listen('click', handler, debounce);}

	/**
	 * shortcut for contextMenu (right-click) events through the listen method
	 * @param {function} handler
	 * @param {number} debounce
	 * @returns {Finder}
	 */
	contextMenu(handler, debounce = 0) {return this.listen('contextmenu', handler, debounce);}

	/**
	 * changes the search scope
	 * @param {HTMLElement} scope
	 * @param {function} func
	 * @returns {Finder}
	 */
	scope(scope, func = null) {return new BrickFinder(this.selector, scope, this._component, func);}

	/**
	 * deep filtering from the initial selector
	 * @param {string} filter
	 * @param {Function} func
	 * @returns {Finder}
	 */
	filter(filter, func = null) {
		let bases = this.selector.split(',');
		let filters = filter.split(',');
		let selector = [];
		for (let i in bases) for (let j in filters) selector.push(bases[i] + filters[j]);
		selector = selector.join(',');
		return new BrickFinder(selector, this.queryRoot, this._component, func);
	}

}

class Debouncer {

	constructor(callback, wait) {
		this.callback = callback;
		this.wait = wait;
	}

	trigger(event, target) {
		if (this.timeout) clearTimeout(this.timeout)
		this.timeout = setTimeout(() => this.callback(event, target), this.wait);
	}

}