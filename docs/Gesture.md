<a name="Gesture"></a>

## Gesture
**Kind**: global class  
**Npmpackage**:   

* [Gesture](#Gesture)
    * [new Gesture()](#new_Gesture_new)
    * [.add/addEventListener(target, name, handler)](#Gesture.add/addEventListener)
    * [.remove/removeEventListener(target, name, handler)](#Gesture.remove/removeEventListener)
    * [.disable(target)](#Gesture.disable)
    * [.disableChildren(target)](#Gesture.disableChildren)
    * [.enable(target)](#Gesture.enable)
    * [.enableChildren(target)](#Gesture.enableChildren)

<a name="new_Gesture_new"></a>

### new Gesture()
This module is used for seamless use of Mouse / Touch Events, such as click vs tap, mousedown vs touch down, etc.  
		This class figures which to use and reports custom events.
		<br><br>
		See [GestureEvent](#GestureEvent) for available events.
		<br><br>	
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { Gesture } from 'ad-events'
</pre>

<a name="Gesture.add/addEventListener"></a>

### Gesture.add/addEventListener(target, name, handler)
Registers an event so that the listener receives notification of an event.

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |
| name | <code>string</code> | The event's name as a String or GestureEvent constant |
| handler | <code>function</code> | The function to be called on event trigger |

**Example**  
```js
Gesture.addEventListener(myDiv, GestureEvent.CLICK, handleClick)
			function handleClick(event) {
				console.log('Click heard')
			}					
```
<a name="Gesture.remove/removeEventListener"></a>

### Gesture.remove/removeEventListener(target, name, handler)
Unregisters an event of notifications.

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |
| name | <code>string</code> | The event's name as a String or GestureEvent constant |
| handler | <code>function</code> | The function registered for call on event trigger |

**Example**  
```js
Gesture.removeEventListener(myDiv, GestureEvent.CLICK, handleClick)					
```
<a name="Gesture.disable"></a>

### Gesture.disable(target)
Disables a DOM element from responding the mouse/touch/gesture events. For bubbling events, such as click, this will disable its children as well.

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |

**Example**  
```js
Gesture.disable(myDiv)
```
<a name="Gesture.disableChildren"></a>

### Gesture.disableChildren(target)
Disables all child DOM elements from responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |

**Example**  
```js
Gesture.disableChildren(myDiv)
```
<a name="Gesture.enable"></a>

### Gesture.enable(target)
Enables all a DOM element to responding the mouse/touch/gesture events. For bubbling events, such as click, this will enable its children as well.

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |

**Example**  
```js
Gesture.disable(myDiv)
```
<a name="Gesture.enableChildren"></a>

### Gesture.enableChildren(target)
Enables all child DOM elements to responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary

**Kind**: static method of [<code>Gesture</code>](#Gesture)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> | The DOM element |

**Example**  
```js
Gesture.enableChildren(myDiv)
```
