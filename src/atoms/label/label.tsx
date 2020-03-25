import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export type LabelProps = {
	/**
	 * override label background color
	 */
	color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Short text block with background.
 *
 * ### CSS variables:
 * The following variables apply to this component
 * -   `--base-color` (background color)
 * -   `--primary-label-text` (text color)
 * -   `--primary-label-width` (max-width)
 * -   `--primary-label-height` (height)
 */
export function Label({ color, className, ...rest }: LabelProps) {
	return (
		<div
			className={classNames(styles.label, className)}
			style={{ background: color }}
			data-bit-id="bit.base/atoms/label"
			{...rest}
		/>
	);
}
