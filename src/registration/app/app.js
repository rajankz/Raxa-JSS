// Enable dynamic dependency to be able find files at appropriate locations automatically
Ext.Loader.setConfig({
    enabled: true
});

// Main application entry point
Ext.application({
    name: 'RaxaEmr.Registration', // Name of the application. Modules should use unique module name
    tabletIcon: 'resources/img/icon_s.png',
    tabletStartupScreen: 'resources/img/icon.png',
    
    controllers: ['Main'], // List of Controllers for dynamic loading
    models: ['PatientData1'], // List of Models for dynamic loading


	launch: function(){
		console.log('Registration Launched');
		Ext.create('RaxaEmr.Registration.view.PatientProfile');
		/*var carousel=Ext.create('Ext.Carousel', {
			fullscreen: true,
			items: [
				{xtype: 'patientScreen1'}
			]
		});
		*/
		console.log('Registration Launch End');
		
	}
});

