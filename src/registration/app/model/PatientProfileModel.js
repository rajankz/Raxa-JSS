Ext.setup({ 
		onReady: function() {
	Ext.regModel('User', { 
	fields: [
		{name: 'patientRegNum', type: 'string'},
		{name: 'firstName', type: 'string'},
		{name: 'lastName', type: 'string'},
		{name: 'gurdianFirstName', type: 'string'},
		{name: 'gurdianLastName', type: 'string'},
		{name: 'gender', type: 'string'},
		{name: 'dob', type:'date'},
		{name: 'age', type: 'int'},
		{name: 'education', type: 'string'},
		{name: 'caste', type: 'string'},
		{name: 'occupation', type: 'string'}
	]});
	}
});