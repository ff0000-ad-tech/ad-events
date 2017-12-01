/**
	@class UIEvent
	@desc
		This module has custom events to be used with the <UIComponents>
*/
var UIEvent = function(){
 	
	var _componentEnabled = new CustomEvent ( 'uiComponentEnabled' );
	var _sliderUpdate = new CustomEvent ( 'uiSliderUpdate' );
		
	return {

		/**	
			@memberOf UIEvent	
			@const {string} ENABLED
			@desc
				Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
			@example
				UIEvent.ENABLED
		*/
		ENABLED				: 	'uiComponentEnabled', 


		/**	
			@memberOf UIEvent	
			@const {string} RESIZE
			@desc
				Description needed_________.
			@example
				UIEvent.RESIZE
		*/
		RESIZE				: 	'uiResize',
		

		/**	
			@memberOf UIEvent	
			@const {string} SLIDER_UPDATE
			@desc
				Represents an 'uiSliderUpdate', fired when a <UISlider> changes its value.
			@example
				UIEvent.SLIDER_UPDATE
		*/
		SLIDER_UPDATE		: 	'uiSliderUpdate',

		componentEnabled	: 	_componentEnabled,
		sliderUpdate		: 	_sliderUpdate
	}
}()
