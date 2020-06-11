import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import elevations from './elevations.module.scss';
import roundnessStyles from './roundness.module.scss';

export type CardProps = {
	/**
	 * Controls the shadow cast by the card, to generate a "stacking" effects.
	 * For example, a modal floating over elements may have a 'high' elevation
	 */
	elevation?: 'none' | 'low' | 'medium' | 'high',
	/** Controls the border radius of the card */
	roundness?: 'sharp' | 'default' | 'medium' | 'circle',
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * A wrapper resembling a physical card, grouping elements and improve readability.
 * @example
 * <Card elevation="medium">
 * 	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * </Card>
 */
export function Card({ className, elevation = 'low', roundness = 'default', ...rest }: CardProps) {
	return (
		<div
			data-bit-id="bit.base-ui/surfaces/card"
			className={classNames(styles.card, elevations[elevation], roundnessStyles[roundness], className)}
			{...rest}
		/>
	);
}

Card.defaultProps = {
	elevation: 'low',
	roundness: 'default'
};
