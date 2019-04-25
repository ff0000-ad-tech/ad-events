<a name="FrameRate"></a>

## FrameRate

**Kind**: global class  
**Npmpackage**:

-   [FrameRate](#FrameRate)
    -   [new FrameRate()](#new_FrameRate_new)
    -   [.register(from, handler, fps)](#FrameRate.register)
    -   [.unregister(from, handler, fps)](#FrameRate.unregister)
    -   [.pause(arguments)](#FrameRate.pause)
    -   [.resume(arguments)](#FrameRate.resume)
    -   [.secondsAsFrames(sec)](#FrameRate.secondsAsFrames)

<a name="new_FrameRate_new"></a>

### new FrameRate()

This module is used for constant consistent updates utilizing requestAnimationFrame at its core. Register a function
and it will be called on every tick. Optionally, you can register a function with a frame rate value for specific
frequency calls. This is useful when working with multiple animation sequences at once.
<br><br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>

**Example**

```js
import { FrameRate } from 'ad-events'

// have any methods
function myFunctionA() {
	console.log('myFunctionA')
}

function myFunctionB() {
	console.log('myFunctionB')
}

function myFunctionC() {
	console.log('myFunctionC')
}

// Register any method, anywhere
FrameRate.register(this, myFunctionA)
FrameRate.register(this, myFunctionB)

// Register with custom time, say only 7 calls per second
FrameRate.register(this, myFunctionC, 7)

// Pause the whole engine so no methods are called
FrameRate.pause()

// Then start is back up
FrameRate.resume()

// or remove a method later
FrameRate.unregister(this, myFunctionA)

// or pause all methods at a specific frame rate.
// this pauses only myFunctionC, but myFunctionB will continue to be called
FrameRate.pause(7)
```

<a name="FrameRate.register"></a>

### FrameRate.register(from, handler, fps)

Registers a method to be called, by adding it to collection.

**Kind**: static method of [<code>FrameRate</code>](#FrameRate)

| Param   | Type                  | Description                                                            |
| ------- | --------------------- | ---------------------------------------------------------------------- |
| from    | <code>string</code>   | Where the handler method exists; the class/module where it is declared |
| handler | <code>function</code> | A method to be called on every tick of the engine                      |
| fps     | <code>number</code>   | Optional, set the number of times to be called per second              |

**Example**

```js
// Uses the default fps, being called 30 times per second
FrameRate.register(this, myFunctionA)

// Set the fps to only be called 12 times per second
FrameRate.register(this, myFunctionB, 12)
```

<a name="FrameRate.unregister"></a>

### FrameRate.unregister(from, handler, fps)

Unregisters a method from being called, by removing it from collection.

**Kind**: static method of [<code>FrameRate</code>](#FrameRate)

| Param   | Type                  | Description                                                            |
| ------- | --------------------- | ---------------------------------------------------------------------- |
| from    | <code>string</code>   | Where the handler method exists; the class/module where it is declared |
| handler | <code>function</code> | A method previously called on every tick of the engine                 |
| fps     | <code>number</code>   | Optional, specifies where the handler was called from                  |

**Example**

```js
// searches all interal pools to unregister the callback
FrameRate.unregister(this, myFunctionA)

// if the fps when registered is known, will only look in that pool to unregister
FrameRate.unregister(this, myFunctionB, 12)
```

<a name="FrameRate.pause"></a>

### FrameRate.pause(arguments)

Pauses the engine's ticker, deactivating ALL methods listening to FrameRate.
FrameRate will stay paused when more listeners are added, only activating again when calling resume()
However, by passing in a target Frames Per Second, it will only pause those methods.

**Kind**: static method of [<code>FrameRate</code>](#FrameRate)

| Param     | Description                                               |
| --------- | --------------------------------------------------------- |
| arguments | Target Frames Per Seconds times to pause, can be infinite |

**Example**

```js
// Pauses the whole engine
FrameRate.pause()

// Pauses only methods registered at 12 Frames Per Second
FrameRate.pause(12)

// Pauses all methods registerd at provided Frames Per Seconds
FrameRate.pause(18, 24, 30)
```

<a name="FrameRate.resume"></a>

### FrameRate.resume(arguments)

Resumes the engine's ticker, activating ALL methods listening to FrameRate.
However, by passing in a target Frames Per Second, it will only resume those methods.

**Kind**: static method of [<code>FrameRate</code>](#FrameRate)

| Param     | Description                                               |
| --------- | --------------------------------------------------------- |
| arguments | Target Frames Per Secons times to resume, can be infinite |

**Example**

```js
// Resumes the whole engine
FrameRate.resume()

// Resumes only methods registered at 12 Frames Per Second
FrameRate.resume(12)

// Resumes all methods registerd at provided Frames Per Seconds
FrameRate.resume(18, 24, 30)
```

<a name="FrameRate.secondsAsFrames"></a>

### FrameRate.secondsAsFrames(sec)

Converts a time in seconds to a Frames Per Second decimal value. For use when an interval longer than once per soecond is needed,
similar to setInterval, however, this uses the single internal ticker to combat perfoormance hits.

**Kind**: static method of [<code>FrameRate</code>](#FrameRate)

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| sec   | <code>number</code> | A time in seconds |

**Example**

```js
// You want a callback to happen every 3.2 seconds
const time = 3.2

function myFunction() {
	console.log(`I get called every ${time} seconds`)
}

// Get the time as an Frames Per Second
const fps = FrameRate.secondsAsFrames(time)

// Use it to register
FrameRate.register(myFunction, fps)
```
