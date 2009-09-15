function ButtonViewAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

ButtonViewAssistant.prototype.setup = function() {
	
	this.total=0;
    this.controller.get('count').update(this.total);
	/*
	 * Button Setup
	 */
	this.bummerButtonAttributes = {};
	this.bummerButtonModel = {
		disabled: false,
	/*	buttonLabel: "Bummer" */
		};
		
	this.controller.setupWidget("bummerButton", this.bummerButtonAttributes, this.bummerButtonModel);

  /*
   * Button Event Handler
   */
  Mojo.Event.listen(this.controller.get('bummerButton'), Mojo.Event.tap, this.bummerButtonPress.bind(this));

}

ButtonViewAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
}


ButtonViewAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
}

ButtonViewAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
  this.controller.stopListening("bummerButton", Mojo.Event.tap, this.bummerButtonHandler);
}

/*
 * Event Handlers
 */

ButtonViewAssistant.prototype.bummerButtonPress = function(event) {
	alert('works');
	this.total++;
  this.controller.get('count').update(this.total);
}
