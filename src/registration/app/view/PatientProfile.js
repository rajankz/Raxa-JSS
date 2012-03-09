Ext.define('RaxaEmr.Registration.view.PatientProfile', {
    extend: 'Ext.Carousel',

	requires: [
		//'RaxaEmr.Registration.view.PatientScreen1'
	],
    
    config: {
        fullscreen: true,
        cls: 'cards',
        xtype: 'patientProfile',
        layout:{align:'stretch'},
        
        defaults: {
        	flex: 1,
    		styleHtmlContent: true
		},
        items: [
        	{ 
        	//xtype: 'patientScreen1' 
        	xclass: 'RaxaEmr.Registration.view.PatientScreen1'
        	
        	},
        	{ 
        	//xtype: 'patientScreen1' 
        	xclass: 'RaxaEmr.Registration.view.PatientScreen2'
        	
        	}
        ]
    }
    
    
});