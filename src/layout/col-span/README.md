Preset columns span for a 12-column CSS-grid.

```tsx
import { colSpan } from '@bit/bit.base.layout.col-span';

//...

return <div className={colSpan[8]}>I'm taking up 3/4 of the line</div>;
```

## Responsive presets:

```tsx
import { colSpanL, colSpan } from '@bit/bit.base.layout.col-span';

//...

<div className={classNames(colSpan[12], colSpanL[6])}>I'm taking up 3/4 of the line</div>;
```

## breakpoints:

-   colSpan `(all)`
-   colSpanXs `360px`
-   colSpanSm `480px`
-   colSpanMd `768px`
-   colSpanL `920px`
-   colSpanLg `1080px`
-   colSpanXl `1440px`
