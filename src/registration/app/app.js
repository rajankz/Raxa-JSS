// Enable dynamic dependency to be able find files at appropriate locations automatically
Ext.Loader.setConfig({
    enabled: true
});

// Main application entry point
Ext.application({
    name: 'RaxaEmr.Registration', // Name of the application. Modules should use unique module name
    tabletIcon: 'resources/img/icon_s.png',
    tabletStartupScreen: 'resources/img/icon.png',
    
    controllers: ['Home'], // List of Controllers for dynamic loading
    models: [], // List of Models for dynamic loading
    views: ['Confirmation', 'PatientProfile', 'Vitals'], // List of Views for dynamic loading
	views: [], // List of Views for dynamic loading
    
    store: [], // List of Stores for dynamic loading

	launch: function(){
		console.log('Registration Launched');
		//Ext.create('RaxaEmr.Registration.view.PatientProfile');
		// we will place each pages in this carousel
		var carousel = Ext.create('Ext.Carousel', {
			fullscreen: true;
			
			items: [
				{xtype: 'home' },
				{xtype: 'page2'}
			]
		});
	}
});

