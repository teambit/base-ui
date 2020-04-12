import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import elevations from './elevations.module.scss';

export type CardProps = {
	/**
	 * Controls the shadow cast by the card, to generate a "stacking" effects.
	 * For example, a modal floating over elements may have a 'high' elevation
	 */
	elevation?: 'none' | 'low' | 'medium' | 'high',
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A wrapper resembling a physical card, grouping elements and improve readability.
 * @example
 * <Card elevation="medium">
 * 	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Card>
 */
export function Card({ className, elevation = 'low', ...rest }: CardProps) {
	return (
		<div
			data-bit-id="bit.base-ui/surfaces/card"
			className={classNames(styles.card, elevations[elevation], className)}
			{...rest}
		/>
	);
}

Card.defaultProps = {
	elevation: 'low',
};
