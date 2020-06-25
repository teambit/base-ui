import { ElevationHeight } from './elevation-height';
import styles from './elevations.module.scss';
export * from './elevation-height';

export const elevationClass: { [key in ElevationHeight]: string | undefined } = {
	low: styles.low,
	medium: styles.medium,
	high: styles.high,
	none: undefined,
};
