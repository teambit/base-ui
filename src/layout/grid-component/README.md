## Grid Component

Basic grid element for 1-12 columns.
Accepts all props of native html div element.

```tsx
import { grid } from '@bit/bit.base-ui.layout.grid-component';

//...

<Grid col={2}>
	<div>column 1</div>
	<div>column 2</div>
</Grid>;
```

It has built in responsive support, using it's `colX` props:

```tsx
//single column by default, 2 columns for large screens:
<Grid col={1} colL={2}>
	<div>column 1</div>
	<div>column 2</div>
</Grid>
```

### breakpoints:

-   col `(all)`
-   colXs `360px`
-   colSm `480px`
-   colMd `768px`
-   colL `920px`
-   colLg `1080px`
-   colXl `1440px`
