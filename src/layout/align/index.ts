import styles from './align.module.scss';

enum BreakPoints {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	l = 'l',
	lg = 'lg',
	xl = 'xl',
}

type TextOptions = {
	left: string;
	center: string;
	right: string;
};

type TextProps = {
	left: string;
	center: string;
	right: string;

	xs: TextOptions;
	sm: TextOptions;
	md: TextOptions;
	l: TextOptions;
	lg: TextOptions;
	xl: TextOptions;
};

export const text = (() => {
	const baseStyle = {
		left: styles['text-left'],
		center: styles['text-center'],
		right: styles['text-right'],
	};

	const medias = Object.keys(BreakPoints)
		.map(br => ({
			[br]: {
				left: styles[`text-${br}-left`],
				center: styles[`text-${br}-center`],
				right: styles[`text-${br}-right`],
			},
		}))
		.reduce((prev, next) => Object.assign(prev, next), {});

	return {
		...baseStyle,
		...medias,
	} as TextProps;
})();

export const marginCenter = styles.marginCenter;

//consider moving this logic to <Grid/>
export const justifyItems = {
	left: styles['justifyItems-left'],
	center: styles['justifyItems-center'],
	right: styles['justifyItems-right'],
};

export const alignItems = {
	start: styles['alignItems-start'],
	center: styles['alignItems-center'],
	end: styles['alignItems-end'],
};
