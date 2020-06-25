import React from 'react';
import cn from 'classnames';
import styles from '../abs-container.module.scss';

export type ContainerProps = { open?: boolean } & React.HTMLAttributes<HTMLDivElement>;

export function Container(props: ContainerProps) {
	const { className, open, ...rest } = props;

	return <div className={cn(styles.container, className)} data-open={open} {...rest} />;
}
