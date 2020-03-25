import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './themed-text.module.scss';

export type ThemedTextProps = HTMLAttributes<HTMLSpanElement>;

export function ThemedText(props: ThemedTextProps) {
	return (
		<span
			{...props}
			className={classNames(props.className, styles.themedText)}
			data-bit-id="bit.base/atoms/themed-text"
		/>
	);
}
