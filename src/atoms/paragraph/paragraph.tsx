import React from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '../../../constants/sizes';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
	size: PossibleSizes;
	element: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * Template component for paragraph.
 * @name paragraph
 * @param element The underlying html element (default - 'p')
 * @param size Font size, from a list of presets (default - 'md')
 * @example
 * <Paragraph size="sm">This is some text</Paragraph>
 */
export function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps) {
	return (
		<Element
			className={classNames(styles[size], className)}
			data-bit-id="bit.base/atoms/paragraph"
			{...rest}
		/>
	);
}

Paragraph.defaultProps = {
	size: 'md',
	element: 'p',
};
