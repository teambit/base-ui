import React from 'react';

export type LinkProps = {
	/**
	 * opens link in a new tab
	 */
	external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Base component for link, equivalent to a `<a/>` tag.
 *
 * This component is a placeholder for future implementations,
 * where different applications can override this component with their underlying navigation system.
 */
export function Link(props: LinkProps) {
	const { external, children, ...rest } = props;

	const externalProps = external ? { rel: 'noopener', target: '_blank' } : {};

	return (
		<a data-bit-id="bit.base/atoms/link" {...externalProps} {...rest}>
			{children}
		</a>
	);
}
