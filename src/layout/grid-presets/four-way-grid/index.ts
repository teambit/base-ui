import styles from './four-way-grid.module.scss';

/**
 * @name fourWayGrid
 * @description
 * A a pure CSS component, let the preset arrange your grid elements!
 *
 * Default view:
 * ```
 *  <text-1>
 *  <image-1>
 *  <text-2>
 *  <image-2>
 *  <text-3>
 *  <image-3>
 *  <text-4>
 *  <image-4>
 * ```
 *
 * Tablet:
 * ```
 * image-1	text-1
 * image-2	text-2
 * image-3	text-3
 * image-4	text-4
 * ```
 *
 * Desktop:
 * ```
 * image-1	image-2
 * text-1	text-2
 * image-3	image-4
 * text-3	text-4
 * ```
 *
 * @example
 * <Grid className={fourWayGrid}>
 *   <div>element 1</div>
 *   <image src={1}>
 *   <div>element 2</div>
 *   <image src={2}>
 *   <div>element 3</div>
 *   <image src={3}>
 *   <div>element 4</div>
 *   <image src={4}>
 * </Grid>
 */

export const fourWayGrid = styles.fourWayGrid;
