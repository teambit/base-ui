import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './error.module.scss';

export function Error(props: HTMLAttributes<HTMLDivElement>) {
	const { className, children, ...rest } = props;
	if (!children) return null;

	return <div className={classNames(styles.error, className)} {...rest}>{children}</div>;
}
