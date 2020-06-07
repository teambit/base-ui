import colorStyles from './color-palette.module.scss';

/**
 * Sets the `--base-color` and `--base-highlight` for the specific use case.<br/>
 * Effects the color of many elements, such as `<ThemedText>` and `<Button>`.
 * @name colorPalette
 */
export const colorPalette = {
	primary: colorStyles.primary,
	secondary: colorStyles.secondary, //vigilant, fear,
	complementary: colorStyles.complementary,
	impulse: colorStyles.impulsive, //joy, danger,
	hunger: colorStyles.hungry, //risk, worry, confidence
	success: colorStyles.success,
	emphasized: colorStyles.emphasized,
	neutral: colorStyles.neutral,
	muted: colorStyles.muted,
};
