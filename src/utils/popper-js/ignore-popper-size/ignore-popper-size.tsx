import { Modifier } from '@popperjs/core';

/**
 * @name ignorePopperSize
 * @description
 * # Ignore popper size
 * A [Popper.js](https://popper.js.org/) plugin.  
 * It removes the sizes from the popper element, thus preventing it from interfering with position calculation.
 * 
 * The plugin is used in the border-highlight component, which should cover the whole target
 */

export const ignorePopperSize: Modifier<{}> = {
	name: 'ignorePopperSize',
	enabled: true,
	phase: 'beforeRead',
	fn({ state }) {
		state.rects.popper = {
			...state.rects.popper,
			height: 0,
			width: 0,
		};
	},
};
