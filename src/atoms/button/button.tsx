import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

//@ts-ignore
import Spinner from '@bit/joshk.react-spinners-css.ellipsis';

import styles from './button.module.scss';

const defaultSpinner = (
	<Spinner color="#ffffff" size={18} style={{ verticalAlign: 'middle' }} />
);

export type ButtonProps = {
	/**
	 * loader to show while button is busy. Turns on when onClick returns a promise (until it resolves), or when `loading={true}`.
	 */
	loader?: ReactNode;
	/**
	 * explicitly toggle loader on and off
	 */
	loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Base button, with very basic styles. Accepts all parameters of native html button.
 * If onClick returns a promise, BaseButton will show a loader automatically, until the promise is resolved or rejected.
 */
export default class Button extends Component<ButtonProps> {
	state = { isLoading: false };

	static defaultProps = {
		loader: defaultSpinner,
		loading: false,
	};

	handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { onClick } = this.props;
		if (!onClick) return;

		this.setState({ isLoading: true });

		Promise.resolve(onClick.call(this, event))
			.catch(() => {})
			.then(() => {
				this.setState({ isLoading: false });
			});
	};

	render() {
		const { onClick, className, children, loader, loading, ...rest } = this.props;
		const { isLoading } = this.state;

		//ignore internal state when component is controlled
		const content = (loading !== undefined && loading) || isLoading ? loader : children;

		return (
			<button
				data-bit-id="bit.base/atoms/button"
				{...rest}
				onClick={this.handleClick}
				className={classNames(className, styles.vanillaButton)}
			>
				{content}
			</button>
		);
	}
}
