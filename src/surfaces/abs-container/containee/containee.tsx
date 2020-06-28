import React, { Component, RefObject } from 'react';
import classNames from 'classnames';
//@ts-ignore
import createRef from 'react-create-ref';

import styles from '../abs-container.module.scss';
import positionStyles from './positions.module.scss';
import displacementStyles from './displacement.module.scss';

export type Position =
	| 'top'
	| 'right'
	| 'bottom'
	| 'left'
	| 'cover'
	| 'none'
	| 'top-start'
	| 'right-start'
	| 'bottom-start'
	| 'left-start'
	| 'top-end'
	| 'right-end'
	| 'bottom-end'
	| 'left-end';

export type ContaineeProps = { position?: Position } & React.HTMLAttributes<HTMLDivElement>;

export class Containee extends Component<ContaineeProps> {
	private ref: RefObject<HTMLDivElement> = createRef();

	render() {
		const { className, position = 'bottom', ...rest } = this.props;
		const positionClass = positionStyles[position];
		const displacement = displacementStyles.displacement;

		return (
			<div
				ref={this.ref}
				className={classNames(styles.containee, displacement, positionClass, className)}
				data-position={position}
				{...rest}
			/>
		);
	}
}
