import styles from './four-grid.module.scss';

/**
 * @name fourGrid
 * @description
 * A a pure CSS component, let the preset arrange your grid elements!
 * 
 * Default view:
 * ```
 *  <1>
 *  <2>
 *  <3>
 *  <4>
 * ```
 *
 * Tablet and above:
 * ```
 * <1> <2>
 * <3> <4>
 * ```
 *
 * @example
 * <Grid className={fourGrid}>
 * 	<div>element 1</div>
 * 	<div>element 2</div>
 * 	<div>element 3</div>
 * 	<div>element 4</div>
 * </Grid>
 */

export const fourGrid = styles.fourGrid;
