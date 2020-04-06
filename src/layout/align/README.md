## Align

A set of CSS components to align elements.

### text

Same as css property text-align.

```tsx
import { text } from '@bit/bit.base-ui.layout.align';
function A() {
	return <div className={text.center}>a</div>;
}
```

### Breakpoints

Align elements according to html breakpoints.

```tsx
import { text } from '@bit/bit.base-ui.layout.align';
function B() {
	return <div className={classNames(text.left, text.md.center text.l.left)}>
			b
	</div>
}
```

### Margin center

Same as `margin-left: auto; margin-right: auto`.

```tsx
import { marginCenter } from '@bit/bit.base-ui.layout.align';

function C() {
	return <div className={classNames(marginCenter)}>this is centered</div>;
}
```

## Breakpoints:
-   (default)	`(all)`
-   xs	`360px`
-   sm	`480px`
-   md	`768px`
-   l	`920px`
-   lg	`1080px`
-   xl	`1440px`
