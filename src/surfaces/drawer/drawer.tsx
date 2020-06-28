import React, { Component, ReactNode, ComponentType } from 'react';

import { Container } from '../abs-container';
import { ClickOutside } from '../click-outside';

import { DefaultPlaceholder, DrawerPlaceholderProps } from './default-placeholder';

export type DrawerProps = {
	open?: boolean;
	PlaceholderComponent?: ComponentType<DrawerPlaceholderProps>;
	placeholder: ReactNode;

	clickToggles?: boolean;
	clickPlaceholderToggles?: boolean;
	clickOutside?: boolean;
	hoverToOpen?: boolean;

	onChange?: (evt: React.MouseEvent | undefined, open: boolean) => void;
	onContainerToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onPlaceholderToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onContaineeToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onClickOutside?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & React.HTMLAttributes<HTMLDivElement>;

type DrawerState = {
	isOpen: boolean;
};

export class Drawer extends Component<DrawerProps, DrawerState> {
	state: DrawerState = {
		isOpen: this.props.open || false,
	};

	static defaultProps = {
		PlaceholderComponent: DefaultPlaceholder,
		clickPlaceholderToggles: true,
		clickOutside: true,
		clickToggles: true,
	};

	componentWillReceiveProps(nextProps: DrawerProps) {
		const prevProps = this.props;

		if (prevProps.open !== nextProps.open && nextProps.open !== undefined) {
			this.setState({ isOpen: nextProps.open });
		}
	}

	private get isControlled() {
		return this.props.open !== undefined;
	}

	toggle = (evt: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = !isOpen;

		if (!this.isControlled) {
			this.setState({ isOpen: nextOpen });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	close = (evt: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = false;

		if (!this.isControlled && isOpen) {
			this.setState({ isOpen: nextOpen });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	open = (evt: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = true;

		if (!this.isControlled && !isOpen) {
			this.setState({ isOpen: true });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	private handePlaceholderClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		//TODO - consider stopping event propagation
		this.props.clickPlaceholderToggles && this.toggle(e);

		this.props.onPlaceholderToggle && this.props.onPlaceholderToggle(e);
	};

	private handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.props.clickToggles && this.toggle(e);

		this.props.onClick && this.props.onClick(e);
	};

	private handleClickOutside = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		this.props.clickOutside && this.close(e);

		this.props.onClickOutside && this.props.onClickOutside(e);
	};

	private handleLeaveContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		//TODO - add grace period
		this.props.hoverToOpen && this.close(e);

		this.props.onMouseLeave && this.props.onMouseLeave(e);
	};

	private handleEnterContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.props.hoverToOpen && this.open(e);

		this.props.onMouseEnter && this.props.onMouseEnter(e);
	};

	render() {
		const {
			placeholder,
			children,
			PlaceholderComponent = DefaultPlaceholder,
			clickOutside,

			//replaced by handlers:
			onMouseEnter,
			onMouseLeave,

			//virtualProps (should not be included in 'rest')
			open,
			hoverToOpen,

			onChange,
			onPlaceholderToggle,
			onContaineeToggle,
			onClickOutside,

			...rest
		} = this.props;
		const { isOpen } = this.state;

		return (
			<ClickOutside
				onClick={this.handleClickOutside}
				disable={!isOpen && clickOutside}
				//initial disable :(
				disableOnClickOutside={!isOpen && clickOutside}
			>
				<Container
					{...rest}
					open={isOpen}
					onMouseLeave={this.handleLeaveContainer}
					onMouseEnter={this.handleEnterContainer}
					onClick={this.handleContainerClick}
				>
					{children}
					<PlaceholderComponent onClick={this.handePlaceholderClick}>
						{placeholder}
					</PlaceholderComponent>
				</Container>
			</ClickOutside>
		);
	}
}
