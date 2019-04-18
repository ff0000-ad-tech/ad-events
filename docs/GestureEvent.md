<a name="GestureEvent"></a>

## GestureEvent
**Kind**: global class  
**Npmpackage**:   

* [GestureEvent](#GestureEvent)
    * [new GestureEvent()](#new_GestureEvent_new)
    * [.OVER](#GestureEvent.OVER) : <code>string</code>
    * [.OUT](#GestureEvent.OUT) : <code>string</code>
    * [.MOVE](#GestureEvent.MOVE) : <code>string</code>
    * [.PRESS](#GestureEvent.PRESS) : <code>string</code>
    * [.RELEASE](#GestureEvent.RELEASE) : <code>string</code>
    * [.CLICK](#GestureEvent.CLICK) : <code>string</code>
    * [.DRAG](#GestureEvent.DRAG) : <code>string</code>
    * [.DRAG_START](#GestureEvent.DRAG_START) : <code>string</code>
    * [.DRAG_STOP](#GestureEvent.DRAG_STOP) : <code>string</code>
    * [.SWIPE](#GestureEvent.SWIPE) : <code>string</code>
    * [.Event(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY)](#GestureEvent.Event)
    * [.stop(event)](#GestureEvent.stop)

<a name="new_GestureEvent_new"></a>

### new GestureEvent()
This module has custom events to be used with the Gesture module. [Gesture](#Gesture)	
		<br><br>
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<pre class="sunlight-highlight-javascript">
// importing into an ES6 class
import { GestureEvent } from 'ad-events'
</pre>

<a name="GestureEvent.OVER"></a>

### GestureEvent.OVER : <code>string</code>
Represents a 'mouseover', fired on desktop cursor roll over

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.OVER
```
<a name="GestureEvent.OUT"></a>

### GestureEvent.OUT : <code>string</code>
Represents a 'mouseout', fired on desktop cursor roll out

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.OUT
```
<a name="GestureEvent.MOVE"></a>

### GestureEvent.MOVE : <code>string</code>
Represents a 'mousemove', fired on desktop cursor move

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.MOVE
```
<a name="GestureEvent.PRESS"></a>

### GestureEvent.PRESS : <code>string</code>
Represents an 'onPress', fired on mousedown / touch start

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.PRESS
```
<a name="GestureEvent.RELEASE"></a>

### GestureEvent.RELEASE : <code>string</code>
Represents an 'onRelease', fired on mouseup / touch end

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.RELEASE
```
<a name="GestureEvent.CLICK"></a>

### GestureEvent.CLICK : <code>string</code>
Represents a 'click', fired on click / touch end

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.CLICK
```
<a name="GestureEvent.DRAG"></a>

### GestureEvent.DRAG : <code>string</code>
Represents an 'onDrag', fired after an element is selected and before released. <br>
		Element data objects included: selection position, element position, velocity of move

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
GestureEvent.DRAG
```
<a name="GestureEvent.DRAG_START"></a>

### GestureEvent.DRAG\_START : <code>string</code>
Represents an 'onDragStart', fired after an element is selected, when first moved and before released. <br>
		Element data objects included: selection position, element position

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
Gesture.addEventListener(myDiv, GestureEvent.DRAG_START, handleDragStart)
		//
		function handleDragStart(event) {
			// coordinate position of mouse/touch
			console.log(event.position)

			// coordinate position of target element
			console.log(event.element)
		}
```
<a name="GestureEvent.DRAG_STOP"></a>

### GestureEvent.DRAG\_STOP : <code>string</code>
Represents an 'onDragStop', fired after an element is selected, moved, then released. <br>
		Element data objects included: selection position, velocity of last move

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
Gesture.addEventListener(myDiv, GestureEvent.DRAG_STOP, handleDragStop)
		//
		function handleDragStop(event) {
			// coordinate position of mouse/touch
			console.log(event.position)

			// velocity, ie change in distance, of target element
			console.log(event.velocity)
		}
```
<a name="GestureEvent.SWIPE"></a>

### GestureEvent.SWIPE : <code>string</code>
Represents an 'onSwipe', fired just after a DRAG_STOP, but different event properties available. <br>
		Element data objects included: direction, distance, velocity

**Kind**: static constant of [<code>GestureEvent</code>](#GestureEvent)  
**Example**  
```js
Gesture.addEventListener(myDiv, GestureEvent.SWIPE, handleSwipe );
		//
		function handleSwipe(event) {
			// direction of swipe, as strings 
			console.log(event.direction)

			// distance covered from down to release
			console.log(event.distance)

			// velocity, aka speed of swipe
			console.log(event.velocity)
		}
```
<a name="GestureEvent.Event"></a>

### GestureEvent.Event(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY)
Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler

**Kind**: static method of [<code>GestureEvent</code>](#GestureEvent)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The event type name |
| mouseGlobalX | <code>number</code> | The mouse x on the page |
| mouseGlobalY | <code>number</code> | The mouse y on the page |
| mouseLocalX | <code>number</code> | The mouse x relative to the element position |
| mouseLocalY | <code>number</code> | The mouse y relative to the element position |
| elementX | <code>number</code> | The element x position |
| elementY | <code>number</code> | The element y position |
| distanceX | <code>number</code> | The distance moved on the x, only used for drags and swipes |
| distanceY | <code>number</code> | The distance moved on the y, only used for drags and swipes |
| velocityX | <code>number</code> | The distance moved on the x since previous event fired, essentially the speed |
| velocityY | <code>number</code> | The distance moved on the y since previous event fired, essentially the speed |

**Example**  
```js
Gesture.add(myDiv, GestureEvent.CLICK, handleClick)
		function handleClick(event) {
			console.log(event)
			console.log('global mouse:', event.mouse.global.x, event.mouse.global.y)
			console.log('local mouse:', event.mouse.local.x, event.mouse.local.y)
			console.log('element:', event.element.x, event.element.y)
		}	
		Gesture.add(dragDiv, GestureEvent.DRAG, handleDrag)
		function handleDrag(event) {
			console.log(event)
			console.log('element:', event.element.x, event.element.y)
			console.log('distance:', event.distance.x, event.distance.y)
			console.log('velocity:', event.velocity.x, event.velocity.y)
		}					
```
<a name="GestureEvent.stop"></a>

### GestureEvent.stop(event)
Stops all future events of the type during the event loop, is a native equivilent to event.stopImmediatePropogation().
			It does NOT remove any listeners, simply stops the event from bubbling up through the chain.

**Kind**: static method of [<code>GestureEvent</code>](#GestureEvent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>event</code> | The event parameter from the event handler |

**Example**  
```js
Gesture.add(parentDiv, GestureEvent.CLICK, handleParentClick)
			function handleParentClick(event) {
				// This will not be heard
				console.log('parent click heard')
			}
			
			Gesture.add(childDiv, GestureEvent.CLICK, handleChildClick)
			function handleChildClick(event) {
				GestureEvent.stop(event)
				console.log('child click heard')
			}					
```
