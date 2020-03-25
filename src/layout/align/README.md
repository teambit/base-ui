## Align

A set of CSS components to align elements.

### text

Same as css property text-align.

```tsx
import { text } from '@bit/bit.base.layout.align';
function A() {
	return <div className={text.center}>a</div>;
}
```

### Breakpoints

Align elements according to html breakpoints.

```tsx
import { text } from '@bit/bit.base.layout.align';
function B() {
	return <div className={classNames(text.left, text.md.center text.l.left)}>
			b
	</div>
}
```

### Margin center

Same as `margin-left: auto; margin-right: auto`.

```tsx
import { marginCenter } from '@bit/bit.base.layout.align';

function C() {
	return <div className={classNames(marginCenter)}>this is centered</div>;
}
```

## Breakpoints:
-   colSpan `(all)`
-   colSpanXs `360px`
-   colSpanSm `480px`
-   colSpanMd `768px`
-   colSpanL `920px`
-   colSpanLg `1080px`
-   colSpanXl `1440px`
