import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './error.module.scss';

/**
 * Shows an error message. Avoids rendering when prop `children` is empty.<br/>
 * 
 * Uses error color from css variable `--error-color`
 * @name Error
 */
export function Error(props: HTMLAttributes<HTMLDivElement>) {
	const { className, children, ...rest } = props;
	if (!children) return null;

	return <div className={classNames(styles.error, className)} {...rest}>{children}</div>;
}
