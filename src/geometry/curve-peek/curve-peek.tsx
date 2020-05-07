import React from 'react';
import classNames from 'classnames';

import fillingStyle from './filling.module.scss';

type PossibleFilling = 'none' | 'white' | 'cloud';

export type SemicircleProps = {
	filling: PossibleFilling;
} & React.SVGProps<SVGSVGElement>;

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
