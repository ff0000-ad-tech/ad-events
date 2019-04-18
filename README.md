##### RED Interactive Agency - Ad Technology

[![npm
(tag)](https://img.shields.io/npm/v/@ff0000-ad-tech%2Fad-events.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-events)
[![GitHub
issues](https://img.shields.io/github/issues/ff0000-ad-tech/ad-events.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-events)
[![npm
downloads](https://img.shields.io/npm/dm/@ff0000-ad-tech%2Fad-events.svg?style=flat-square)](https://www.npmjs.com/package/@ff0000-ad-tech%2Fad-events)

[![GitHub
contributors](https://img.shields.io/github/contributors/ff0000-ad-tech/ad-events.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-events/graphs/contributors/)
[![GitHub
commit-activity](https://img.shields.io/github/commit-activity/y/ff0000-ad-tech/ad-events.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-events/commits/master)
[![npm
license](https://img.shields.io/npm/l/@ff0000-ad-tech%2Fad-events.svg?style=flat-square)](https://github.com/ff0000-ad-tech/ad-events/blob/master/LICENSE)
[![PRs
Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Events

A package of global utilities for handling global events, touch & mouse events, along with a universal ticker.

* * *


## <a name="FrameRate" href="./docs/FrameRate.md">FrameRate</a>

* new FrameRate()
* _instance_
    * .tick
* _static_
    * <a href="./docs/FrameRate.md#FrameRate.register">.register(from, handler, fps)</a>
    * <a href="./docs/FrameRate.md#FrameRate.unregister">.unregister(from, handler, fps)</a>
    * <a href="./docs/FrameRate.md#FrameRate.pause">.pause(arguments)</a>
    * <a href="./docs/FrameRate.md#FrameRate.resume">.resume(arguments)</a>
    * <a href="./docs/FrameRate.md#FrameRate.secondsAsFrames">.secondsAsFrames(sec)</a>

## <a name="FrameRateBase" href="./docs/FrameRateBase.md">FrameRateBase</a>

* new FrameRateBase()

## <a name="Gesture" href="./docs/Gesture.md">Gesture</a>

* new Gesture()
* <a href="./docs/Gesture.md#Gesture.add/addEventListener">.add/addEventListener(target, name, handler)</a>
* <a href="./docs/Gesture.md#Gesture.remove/removeEventListener">.remove/removeEventListener(target, name, handler)</a>
* <a href="./docs/Gesture.md#Gesture.disable">.disable(target)</a>
* <a href="./docs/Gesture.md#Gesture.disableChildren">.disableChildren(target)</a>
* <a href="./docs/Gesture.md#Gesture.enable">.enable(target)</a>
* <a href="./docs/Gesture.md#Gesture.enableChildren">.enableChildren(target)</a>

## <a name="GestureBase" href="./docs/GestureBase.md">GestureBase</a>

* new GestureBase()

## <a name="GestureEvent" href="./docs/GestureEvent.md">GestureEvent</a>

* new GestureEvent()
* <a href="./docs/GestureEvent.md#GestureEvent.OVER">.OVER</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.OUT">.OUT</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.MOVE">.MOVE</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.PRESS">.PRESS</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.RELEASE">.RELEASE</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.CLICK">.CLICK</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.DRAG">.DRAG</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.DRAG_START">.DRAG_START</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.DRAG_STOP">.DRAG_STOP</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.SWIPE">.SWIPE</a> : <code>string</code>
* <a href="./docs/GestureEvent.md#GestureEvent.Event">.Event(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY)</a>
* <a href="./docs/GestureEvent.md#GestureEvent.stop">.stop(event)</a>

## <a name="UIEvent" href="./docs/UIEvent.md">UIEvent</a>

* new UIEvent()
* <a href="./docs/UIEvent.md#UIEvent.ENABLED">.ENABLED</a> : <code>string</code>
* <a href="./docs/UIEvent.md#UIEvent.RESIZE">.RESIZE</a> : <code>string</code>
* <a href="./docs/UIEvent.md#UIEvent.SLIDER_UPDATE">.SLIDER_UPDATE</a> : <code>string</code>

* * *