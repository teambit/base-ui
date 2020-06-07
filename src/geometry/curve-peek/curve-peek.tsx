import React from 'react';
import classNames from 'classnames';

import fillingStyle from './filling.module.scss';

type PossibleFilling = 'none' | 'white' | 'cloud';

export type SemicircleProps = {
	/** Select the color for the curve background. */
	filling: PossibleFilling;
} & React.SVGProps<SVGSVGElement>;

/**
 * An SVG component shaped like a parabola. Useful for separating two sections.<br/>
 * Being an html element, this component is very light and don't require an additional network request.<br/>
 * 
 * The component comes with 2 predefined colors, 'white' and 'cloud'.<br/>
 * To use a custom color, set fillings to be "none", and apply the color with a css rule, e.g. `{ filling: '#7f1ae5' }`
 * @name CurvePeek
 */
export function CurvePeek(props: SemicircleProps) {
	const { className, filling, ...rest } = props;

	return (
		<svg
			{...rest}
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
			className={classNames(fillingStyle[filling] || undefined, className)}
		>
			<path
				d="
				M 0,100
				Q 50,-100 100,100"
			/>
		</svg>
	);
}

CurvePeek.defaultProps = {
	filling: 'white',
};
