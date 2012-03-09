Ext.define('RaxaEmr.Registration.controller.Main', {
	extend: 'Ext.app.Controller',
	
	config: {
        profile: Ext.os.deviceType.toLowerCase()
    },
	
	views: [
		'Main',
		'PatientProfile',
		'PatientScreen1',
		'PatientScreen2',
		'Vitals'
	],
	
	stores: [
		//todo: define store here
	],
	
	refs: [
		{
			ref			:'main',
			selector	:'mainview',
			xtype		:'mainview',
			autoCreate	:true
		},
		{
			ref			:'pateintProfile',
			selector	:'patientProfile'
		},
		{
			ref			:'patientScreen1',
			selector	:'patientScreen1'
		},
		{
			ref			:'patientScreen2',
			selector	:'patientScreen2'
		}
		
	],
	
	init: function(){
		console.log('Init home controller');
	
		this.control({
			'#continueButton' : {
				tap: this.onContinueButtonTap
			}
		});
	},
	
	onContinueButtonTap: function(){
		patientProfile.setActiveItem(2,true,true);
	}

});