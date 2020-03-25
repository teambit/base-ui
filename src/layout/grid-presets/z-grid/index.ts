import styles from './z-grid.module.scss';

/**
 * @name zGrid
 * @description
 * A a pure CSS component, let the preset arrange your grid elements!
 * 
 *
 * Default view:
 * ```
 *  <text-1>
 *  <image-1>
 *  <text-2>
 *  <image-2>
 * ```
 *
 * Tablet and above:
 * ```
 *  <text-1>    <image-1>
 *  <image-2>   <text-2>
 * ```
 *
 * @example
 * <Grid className={fourWayGrid}>
 *   <div>element 1</div>
 *   <image src={1}>
 *   <div>element 2</div>
 *   <image src={2}>
 * </Grid>
 */

export const zGrid = styles.zGrid;
export const halfZGrid = styles.halfZGrid;
