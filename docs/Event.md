<a name="GestureEvent.Event"></a>

## GestureEvent.Event

**Kind**: static class of [<code>GestureEvent</code>](#GestureEvent)  
<a name="new_GestureEvent.Event_new"></a>

### new Event(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY)

Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler

| Param        | Type                | Description                                                                   |
| ------------ | ------------------- | ----------------------------------------------------------------------------- |
| name         | <code>string</code> | The event type name                                                           |
| mouseGlobalX | <code>number</code> | The mouse x on the page                                                       |
| mouseGlobalY | <code>number</code> | The mouse y on the page                                                       |
| mouseLocalX  | <code>number</code> | The mouse x relative to the element position                                  |
| mouseLocalY  | <code>number</code> | The mouse y relative to the element position                                  |
| elementX     | <code>number</code> | The element x position                                                        |
| elementY     | <code>number</code> | The element y position                                                        |
| distanceX    | <code>number</code> | The distance moved on the x, only used for drags and swipes                   |
| distanceY    | <code>number</code> | The distance moved on the y, only used for drags and swipes                   |
| velocityX    | <code>number</code> | The distance moved on the x since previous event fired, essentially the speed |
| velocityY    | <code>number</code> | The distance moved on the y since previous event fired, essentially the speed |

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
