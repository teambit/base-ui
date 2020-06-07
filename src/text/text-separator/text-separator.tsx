import React from 'react';
import styles from './text-separator.module.scss';
import classNames from 'classnames';

/**
 * Separating line spanning the whole line, with room for text. Behaves like a regular `div` element.<br/>
 * Currently, there is no way to customize the border-style.
 * 
 * Border color is applied from css variable `--separator-color`
 * @name TextSeparator
 */
export function TextSeparator(props: React.HTMLAttributes<HTMLDivElement>) {
	const { children, className, ...rest } = props;

	return (
		<div {...rest} className={classNames(styles.textSeparator, props.className)}>
			<div className={styles.line} />
			{children}
			<div className={styles.line} />
		</div>
	);
}
