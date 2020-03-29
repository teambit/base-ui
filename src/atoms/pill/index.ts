import styles from './pill.module.scss';

/**
 * Tried and tested pure css pill component.  
 * Add border-radius to dom elements in a safe and predicable way.
 * The component also inclues `overflow: hidden` to prevent artifacts and border issues when zoomed out.
 * 
 * @example
 * <div className={pillClass}>this is a pill</div>
 */
export const pillClass = styles.pill;
