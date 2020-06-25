import React, { Component, ReactNode } from 'react';
import onClickOutside, {
	OnClickOutProps,
	InjectedOnClickOutProps,
} from 'react-onclickoutside';

type Props = {
	children: ReactNode;
	disable?: boolean;
	onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
} & InjectedOnClickOutProps;

class MyComponent extends Component<Props> implements OnClickOutProps<any> {
	componentDidUpdate(prevProps: Props) {
		const nextProps = this.props;

		if (prevProps.disable !== nextProps.disable) {
			if (nextProps.disable) {
				this.props.disableOnClickOutside();
			} else {
				this.props.enableOnClickOutside();
			}
		}
	}

	handleClickOutside = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
		this.props.onClick(evt);
	};

	render() {
		return this.props.children;
	}
}

export const ClickOutside = onClickOutside(MyComponent);
