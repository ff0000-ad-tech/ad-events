/**
	@class GestureEvent
	@desc
		This module has custom events to be used with the Gesture module. {@link Gesture}
*/
var GestureEvent = new function(){
 
 	var _kills = {}
 	var _eventLooping = false;

	function createEvent ( name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY ) {
		var E = new CustomEvent ( name );
	 	E.mouse = {
			global : {
				x : mouseGlobalX,
				y : mouseGlobalY
			},
			local : {
				x : mouseLocalX,
				y : mouseLocalY
			}
		}
		E.element = {
			x : elementX || 0,
			y : elementY || 0
		}
		E.distance = {
			x : distanceX || 0,
			y : distanceY || 0
		}
		E.velocity = {
			x : velocityX || 0,
			y : velocityY || 0
		}
		E.direction = {
			x : velocityX > 0 ? 'right' : velocityX < 0 ? 'left' : null,
			y : velocityY > 0 ? 'down' : velocityY < 0 ? 'up' : null 
		}

	 	return E;
	}

	function stopBubble ( event ){
		if ( event ){
			// For IE, it bubbles custom events
			event.stopImmediatePropagation()
			// for all other browsers that do not do that
			_kills [ event.type ] = true;
			//trace ( '\n\tGestureEvent.stop() of type:', event.type )
		}
	}

	function isStopped ( type ){
		return _kills [ type ] != undefined;
	}

	// A flag for the start of the event loop through all bases
	function startPoint(){
		if ( !_eventLooping ){
			// the end of event loop has been reached, so reset things
			_eventLooping = true;
			_kills = {}
		}
	}
	// A flag to reset any bubble killing
	function  endPoint(){
		_eventLooping = false
	}
 
	return {

		/**	
			@memberOf GestureEvent	
			@const {string} OVER
			@desc
				Represents a 'mouseover', fired on desktop cursor roll over
			@example
				GestureEvent.OVER
		*/
		OVER		: 	'mouseover', 

		/**	
			@memberOf GestureEvent	
			@const {string} OUT
			@desc
				Represents a 'mouseout', fired on desktop cursor roll out
			@example
				GestureEvent.OUT
		*/
		OUT			: 	'mouseout', 

		/**	
			@memberOf GestureEvent	
			@const {string} MOVE
			@desc
				Represents a 'mousemove', fired on desktop cursor move
			@example
				GestureEvent.MOVE
		*/
		MOVE 		: 	'mousemove',
				
		/**	
			@memberOf GestureEvent	
			@const {string} PRESS
			@desc
				Represents an 'onPress', fired on mousedown / touch start
			@example
				GestureEvent.PRESS
		*/
		PRESS		: 	'onPress',
		
		/**	
			@memberOf GestureEvent	
			@const {string} RELEASE
			@desc
				Represents an 'onRelease', fired on mouseup / touch end
			@example
				GestureEvent.RELEASE
		*/
		RELEASE		: 	'onRelease',	

		/**	
			@memberOf GestureEvent	
			@const {string} CLICK
			@desc
				Represents a 'click', fired on click / touch end
			@example
				GestureEvent.CLICK
		*/
		CLICK		: 	'onSelect',

		/**	
			@memberOf GestureEvent	
			@const {string} DRAG
			@desc
				Represents an 'onDrag', fired after an element is selected and before released. <br>
				Element data objects included: selection position, element position, velocity of move	
			@example
				GestureEvent.DRAG
		*/
		DRAG 		: 	'onDrag',
		
		/**	
			@memberOf GestureEvent	
			@const {string} DRAG_START
			@desc
				Represents an 'onDragStart', fired after an element is selected, when first moved and before released. <br>
				Element data objects included: selection position, element position
			@example
				Gesture.addEventListener ( myDiv, GestureEvent.DRAG_START, handleDragStart );
				//
				function handleDragStart ( event ){
					// coordinate position of mouse/touch
					trace ( event.position );

					// coordinate position of target element
					trace ( event.element );
				}
		*/
		DRAG_START 	: 	'onDragStart',
		
		/**	
			@memberOf GestureEvent	
			@const {string} DRAG_STOP
			@desc
				Represents an 'onDragStop', fired after an element is selected, moved, then released. <br>
				Element data objects included: selection position, velocity of last move
			@example
				Gesture.addEventListener ( myDiv, GestureEvent.DRAG_STOP, handleDragStop );
				//
				function handleDragStop ( event ){
					// coordinate position of mouse/touch
					trace ( event.position );

					// velocity, ie change in distance, of target element
					trace ( event.velocity );
				}
		*/
		DRAG_STOP 	: 	'onDragStop',


		/**	
			@memberOf GestureEvent	
			@const {string} SWIPE
			@desc
				Represents an 'onSwipe', fired just after a DRAG_STOP, but different event properties available. <br>
				Element data objects included: direction, distance, velocity
			@example
				Gesture.addEventListener ( myDiv, GestureEvent.SWIPE, handleSwipe );
				//
				function handleSwipe ( event ){
					// direction of swipe, as strings 
					trace ( event.direction );

					// distance covered from down to release
					trace ( event.distance );

					// velocity, aka speed of swipe
					trace ( event.velocity );
				}
		*/
		SWIPE 		: 	'onSwipe',

		/**
			@memberOf GestureEvent
			@method stop
			@param {event} event
				The event parameter from the event handler
			@desc
				Stops all future events of the type during the event loop, is a native equivilent to event.stopImmediatePropogation().
				It does NOT remove any listeners, simply stops the event from bubbling up through the chain.
				
			@example
				Gesture.add ( parentDiv, GestureEvent.CLICK, handleParentClick );
				function handleParentClick( event ) {
					// This will not be heard
					trace ( 'parent click heard' )
				}
				
				Gesture.add ( childDiv, GestureEvent.CLICK, handleChildClick );
				function handleChildClick( event ) {
					GestureEvent.stop ( event )
					trace ( 'child click heard' )
				}					
		*/
		stop 		: 	stopBubble,
		
		/**
			@memberOf GestureEvent
			@class GestureEvent.Event
			@param {string} name
				The event type name
			@param {number} mouseGlobalX
				The mouse x on the page
			@param {number} mouseGlobalY
				The mouse y on the page
			@param {number} mouseLocalX
				The mouse x relative to the element position
			@param {number} mouseLocalY
				The mouse y relative to the element position
			@param {number} elementX
				The element x position
			@param {number} elementY
				The element y position
			@param {number} distanceX
				The distance moved on the x, only used for drags and swipes
			@param {number} distanceY
				The distance moved on the y, only used for drags and swipes
			@param {number} velocityX
				The distance moved on the x since previous event fired, essentially the speed
			@param {number} velocityY
				The distance moved on the y since previous event fired, essentially the speed
			@desc
				Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler
				
			@example
				Gesture.add ( myDiv, GestureEvent.CLICK, handleClick );
				function handleClick( event ) {
					trace ( event )
					trace ( 'global mouse:', event.mouse.global.x, event.mouse.global.y )
					trace ( 'local mouse:', event.mouse.local.x, event.mouse.local.y )
					trace ( 'element:', event.element.x, event.element.y )
				}	
				Gesture.add ( dragDiv, GestureEvent.DRAG, handleDrag );
				function handleDrag( event ) {
					trace ( event )
					trace ( 'element:', event.element.x, event.element.y )
					trace ( 'distance:', event.distance.x, event.distance.y )
					trace ( 'velocity:', event.velocity.x, event.velocity.y )
				}					
		*/
		Event 		: 	createEvent,
		
		stopped 	: 	isStopped,
		startPoint 	: 	startPoint,
		endPoint 	: 	endPoint
	}
}

export default GestureEvent