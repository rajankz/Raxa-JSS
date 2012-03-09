Ext.define('RaxaEmr.Registration.view.Main', {
	extend: 'Ext.Container',
	requires:[
		'RaxaEmr.Registration.view.PatientProfile',
		'RaxaEmr.Registration.view.PatientScreen1',
		'RaxaEmr.Registration.view.Vitals'
	],
	
	config:{
		fullscreen: true
	},
	items:[
		{
			xtype: 'patientProfile',
			layout: 'fit'
		}
	]
});