/**
	@class FrameRate
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-events">Github repo</a>
		<br><br>
		
		This module is used for constant consistent updates, akin to ENTER_FRAME in AS3, utilizing requestAnimationFrame at its core. Register a function
		and it will be called on every tick. Optionally, you can register a function with a frame rate value for specific frequency calls.  This is useful
		when working with multiple animation sequences at once.	
	
	@example
		// have any methods			
		function myFunctionA () {
			console.log( 'myFunctionA' );
		}

		function myFunctionB() {
			console.log( 'myFunctionB' );
		}

		function myFunctionC() {
			console.log( 'myFunctionC' );
		}

		// Register any method, anywhere
		FrameRate.register ( this, myFunctionA );
		FrameRate.register ( this, myFunctionB );

		// Register with custom time, say only 7 calls per second
		FrameRate.register ( this, myFunctionC, 7 );

		// Pause the whole engine so no methods are called
		FrameRate.pause();

		// Then start is back up
		FrameRate.resume();

		// or remove a method later
		FrameRate.unregister ( this, myFunctionA );

		// or pause all methods at a specific frame rate
		FrameRate.pause ( 7 ) // this pauses only myFunctionC, but myFunctionB will continue to be called
*/
import FrameRateBase from './FrameRateBase'

class FrameRate {

	constructor() {
		this._isPaused = true
		this._isActive = true
		this._sets = {}
		this._RAF

		/** ----------------------------------------------------------------------------------------------- */
		// POLYFILL : check for and/or replace window.requestAnimationFrame

		// there is a bug in iOS6 for RAF, so just detect being on it and fall back
		const _isiOS6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)

		const _prefix = ['webkit', 'moz']
		for (let i = 0; !window.requestAnimationFrame && i < _prefix.length; i++) {
			window.requestAnimationFrame = window[_prefix[i] + 'RequestAnimationFrame']
			window.cancelAnimationFrame = window[_prefix[i] + 'CancelAnimationFrame'] || window[_prefix[i] + 'CancelRequestAnimationFrame']
		}

		if (!window.requestAnimationFrame || !window.cancelAnimationFrame || _isiOS6) {
			console.log('PolyFill -> FrameRate')
			window.requestAnimationFrame = function(callback) {
				return setTimeout(callback, 17)
			}
			window.cancelAnimationFrame = clearTimeout
		}
	}


	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
		@memberOf FrameRate
		@method register
		@param {string} from
			Where the handler method exists; the class/module where it is declared
		@param {function} handler
			A method to be called on every tick of the engine
		@param {number} fps
			Optional, set the number of times to be called per second
		@desc
			Registers a method to be called, by adding it to collection.

		@example
			// Uses the default fps, being called 30 times per second
			FrameRate.register ( this, myFunctionA );

			// Set the fps to only be called 12 times per second 
			FrameRate.register ( this, myFunctionB, 12 );
	*/
	register = (from, handler, fps) => {
		fps = fps || 30
		if (!this._sets[fps]) {
			this._sets[fps] = new FrameRateBase(fps)
		}

		var pool = this._sets[fps].pool
		for (var i = 0; i < pool.length; i++) {
			if (pool[i].from === from && pool[i].handler === handler) {
				return
			}
		}
		pool.push({
			handler: handler,
			from: from
		})

		if (this._isActive) this.resume()
	}

	/**
		@memberOf FrameRate
		@method unregister
		@param {string} from
			Where the handler method exists; the class/module where it is declared
		@param {function} handler
			A method previously called on every tick of the engine
		@param {number} fps
			Optional, specifies where the handler was called from
		@desc
			Unregisters a method from being called, by removing it from collection.

		@example
			// searches all interal pools to unregister the callback
			FrameRate.unregister ( this, myFunctionA );

			// if the fps when registered is known, will only look in that pool to unregister
			FrameRate.unregister ( this, myFunctionB, 12 );
	*/
	unregister = (from, handler, fps) => {
		//var handlerString = handler.toString();

		for (var key in this._sets) {
			// if fps is provided, only look in that FrameRateBase for handlers
			if (fps && key != fps) {
				continue
			}
			// otherwise, remove all references to that handler

			var pool = this._sets[key].pool
			for (var i = 0; i < pool.length; i++) {
				//if ( h[i].toString() === handlerString ){
				if (pool[i].from === from && pool[i].handler === handler) {
					pool.splice(i, 1)
					break
				}
			}

			// removes the FrameRateBase object with no handlers
			if (pool.length == 0) {
				delete this._sets[key]
			}
		}

		if (Object.keys(this._sets).length === 0) {
			this.pause()
			this._isActive = true
		}
	}

	/**
		@memberOf FrameRate
		@method pause
		@param {} arguments
			Target Frames Per Seconds times to pause, can be infinite
		@desc
			Pauses the engine's ticker, deactivating ALL methods listening to FrameRate. 
			FrameRate will stay paused when more listeners are added, only activating again when calling resume()
			However, by passing in a target Frames Per Second, it will only pause those methods.

		@example
			// Pauses the whole engine
			FrameRate.pause();
			
			// Pauses only methods registered at 12 Frames Per Second
			FrameRate.pause(12);

			// Pauses all methods registerd at provided Frames Per Seconds
			FrameRate.pause(18,24,30);
	*/

	pause = () => {
		if (arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				var fpsTarget = arguments[i]
				if (this._sets[fpsTarget]) {
					this._sets[fpsTarget]._paused = true
					this._isPaused = true
				}
			}
			for (var d in this._sets) {
				if (!this._sets[d]._paused) {
					this._isPaused = false
					break
				}
			}
		} else {
			for (var d in this._sets) this._sets[d]._paused = true
			this._isPaused = true
		}

		if (this._isPaused) {
			this._isActive = false
			window.cancelAnimationFrame(this._RAF)
		}
	}

	/**
		@memberOf FrameRate
		@method resume
		@param {} arguments
			Target Frames Per Secons times to resume, can be infinite
		@desc
			Resumes the engine's ticker, activating ALL methods listening to FrameRate. 
			However, by passing in a target Frames Per Second, it will only resume those methods.
		
		@example
			// Resumes the whole engine
			FrameRate.resume();
			
			// Resumes only methods registered at 12 Frames Per Second
			FrameRate.resume(12);

			// Resumes all methods registerd at provided Frames Per Seconds
			FrameRate.resume(18,24,30);
	*/
	resume = () => {
		var _currentlyRunning = !this._isPaused
		if (arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				var fpsTarget = arguments[i]
				if (this._sets[fpsTarget]) {
					this._sets[fpsTarget]._paused = false
					this._isPaused = false
				}
			}
		} else {
			for (var d in this._sets) this._sets[d]._paused = false
			this._isPaused = false
		}

		if (!_currentlyRunning) {
			this._isActive = true
			this._RAF = window.requestAnimationFrame(this.tick)
		}
	}

	/**
		@memberOf FrameRate
		@method secondsAsFrames
		@param {number} sec
			A time in seconds
		@desc
			Converts a time in seconds to a Frames Per Second decimal value. For use when an interval longer than once per soecond is needed, 
			similar to setInterval, however, this uses the single internal ticker to combat perfoormance hits.
		
		@example
			// You want a callback to happen every 3.2 seconds
			var time = 3.2;

			function myFunction(){
				console.log( "I get called every 3.2 seconds" );
			}

			// Get the time as an Frames Per Second
			var fps = FrameRate.secondsAsFrames(time);
			
			// Use it to register
			FrameRate.register(myFunction, fps);
	*/
	secondsAsFrames = (sec) => {
		return 1 / sec
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	tick = () => {
		//console.log( 'tick' )
		if (!this._isPaused) {
			for (var h in this._sets) {
				this._sets[h].tick()
			}

			// call tick again
			window.requestAnimationFrame(this.tick)
		}
	}
}

export default new FrameRate()
