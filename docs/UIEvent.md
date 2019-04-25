<a name="UIEvent"></a>

## UIEvent

**Kind**: global class  
**Npmpackage**:

-   [UIEvent](#UIEvent)
    -   [new UIEvent()](#new_UIEvent_new)
    -   [.ENABLED](#UIEvent.ENABLED) : <code>string</code>
    -   [.RESIZE](#UIEvent.RESIZE) : <code>string</code>
    -   [.SLIDER_UPDATE](#UIEvent.SLIDER_UPDATE) : <code>string</code>

<a name="new_UIEvent_new"></a>

### new UIEvent()

This module has custom events to be used with the [UIComponents](UIComponents)
<br><br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
<br>
<pre class="sunlight-highlight-javascript">
import { UIEvent } from 'ad-events'

</pre>

<a name="UIEvent.ENABLED"></a>

### UIEvent.ENABLED : <code>string</code>

Represents an <code>'uiComponentEnabled'</code>, fired when the enabled state of a <UIComponent> changes; useful when extending a component.

**Kind**: static constant of [<code>UIEvent</code>](#UIEvent)  
**Example**

```js
UIEvent.ENABLED
```

<a name="UIEvent.RESIZE"></a>

### UIEvent.RESIZE : <code>string</code>

Represents <code>'uiResize'</code>, fired when a [UIImage](UIImage) changes its width and/or height

**Kind**: static constant of [<code>UIEvent</code>](#UIEvent)  
**Example**

```js
UIEvent.RESIZE
```

<a name="UIEvent.SLIDER_UPDATE"></a>

### UIEvent.SLIDER_UPDATE : <code>string</code>

Represents an <code>'uiSliderUpdate'</code>, fired when a [UISlider](UISlider) changes its value.

**Kind**: static constant of [<code>UIEvent</code>](#UIEvent)  
**Example**

```js
UIEvent.SLIDER_UPDATE
```
