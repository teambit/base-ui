import React from 'react';
import styles from './text-separator.module.scss';
import classNames from 'classnames';

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
