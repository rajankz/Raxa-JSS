Ext.define('RaxaEmr.Registration.controller.Main', {
	extend: 'Ext.app.Controller',
	
	views: [
		'PatientProfile',
		'Vitals'
	],
	
	stores: [
		//todo: define store here
	],
	
	config: {
		//TODO: write ref's data here
	},
	
	init: function(){
		this.control({
			'#continueButton' : {
				tap: this.onContinueButtonTap
			}
		});
	},
	
	onContinueButtonTap: function(){
	
	}
});