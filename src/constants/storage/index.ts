import definitions from './_storage.module.scss';

/**
 * Provides constant url for images CDN.
 * @example
 * //in ts/js file:
 * <image src={staticStorageUrl + '/some/image.png'}/>
 * @example
 * //in scss file:
 * background-image: url($staticStorageUrl + '/some/image.svg');
 */

export const staticStorageUrl = definitions.staticStorageUrl.replace(/["']/g, '');
