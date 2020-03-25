import React from 'react';
import classNames from 'classnames';

import size from '../size-definition.module.scss';
import shadow from '../shadow-definition.module.scss';
import colors from '../color-definition.module.scss';
import brands from '../brand-definition.module.scss';
import margins from '../heading-margin-definition.module.scss';
import font from '../book-font.module.scss';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.  
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				size.heading,
				size.text,
				font.bookFont,
				texts.defaults,
				shadow.shadowTheme,
				colors.primaryPalette,
				brands.brands,
				margins.headingMargins
			)}
		></div>
	);
}
