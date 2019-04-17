/**
	@npmpackage
	@class UIEvent
	@desc
		This module has custom events to be used with the {@link UIComponents}
		<br><br>
		Import from <a href="https://github.com/ff0000-ad-tech/ad-events">ad-events</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { UIEvent } from 'ad-events'
		</codeblock>		
*/
var _componentEnabled, _sliderUpdate
var UIEvent = {
	/**	
		@memberOf UIEvent	
		@const {string} ENABLED
		@desc
			Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
		@example
			UIEvent.ENABLED
	*/
	ENABLED: 'uiComponentEnabled',

	/**	
		@memberOf UIEvent	
		@const {string} RESIZE
		@desc
			Represents 'uiResize', fired when a {@link UIImage} changes its width and/or height
		@example
			UIEvent.RESIZE
	*/
	RESIZE: 'uiResize',

	/**	
		@memberOf UIEvent	
		@const {string} SLIDER_UPDATE
		@desc
			Represents an 'uiSliderUpdate', fired when a {@link UISlider} changes its value.
		@example
			UIEvent.SLIDER_UPDATE
	*/
	SLIDER_UPDATE: 'uiSliderUpdate',

	get componentEnabled() {
		if (!_componentEnabled) {
			_componentEnabled = new CustomEvent('uiComponentEnabled')
		}
		return _componentEnabled
	},
	get sliderUpdate() {
		if (!_sliderUpdate) {
			_sliderUpdate = new CustomEvent('uiSliderUpdate')
		}
		return _sliderUpdate
	}
}

export default UIEvent
