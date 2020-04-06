import React from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '../../constants/sizes';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
	/**
	 * Font size (from a list of presets).
	 */
	size: PossibleSizes,
	/**
	 * The underlying html element
	 */
	element: 'p' | 'div' | 'span',
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Paragraph component prototype. Accepts all properties of a native Paragraph element,
 * @name paragraph
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps) {
	return (
		<Element
			className={classNames(styles[size], className)}
			data-bit-id="bit.base-ui/atoms/paragraph"
			{...rest}
		/>
	);
}

Paragraph.defaultProps = {
	size: 'md',
	element: 'p',
};
