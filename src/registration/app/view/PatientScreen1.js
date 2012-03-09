Ext.define('RaxaEmr.Registration.view.PatientScreen1', {
    extend: 'Ext.form.FieldSet',
    
    config: 
    {
		title: 'Patient Profile Information',
		align: 'center',
		styleHtmlContent: true,
		xtype: 'patientScreen1',
		layout: 'vbox',
		autoscroll:true,
    items: [
		{
			cls: 'halo',
			items: [{
						layout: 'hbox',
						items: [
						{
							xtype:'textfield',
							label: 'First Name',
							cls: 'textFieldBckg',
							labelAlign: 'top',
							required: true,
							clearIcon: true,
							width:'35%',
							flex: 1,
							labelCls: 'textFieldLabelBckg'
						},
						{
							xtype: 'spacer',
							width: '50px'
						},
						{
							xtype:'textfield',
							label: 'Last Name',
							cls: 'textFieldBckg',
							labelAlign: 'top',
							required: true,
							clearIcon: true,
							width:'35%',
							flex: 1,
							labelCls: 'textFieldLabelBckg'
						}
						]
					},
					{
						xtype: 'spacer',
						height: '2em'
					},
					{
						layout: 'hbox',
						items: [
						{
							xtype:'textfield',
							label: 'Father/Husband First Name',
							labelAlign: 'top',
							required: true,
							clearIcon: true,
							width:'35%',
							flex: 1,
							cls: 'textFieldBckg',
							labelCls: 'textFieldLabelBckg'
						},
						{
							xtype: 'spacer',
							width: '50px'
						},
						{
							xtype:'textfield',
							label: 'Last Name',
							cls: 'textFieldBckg',
							labelAlign: 'top',
							required: true,
							clearIcon: true,
							width:'35%',
							flex: 1,
							labelCls: 'textFieldLabelBckg'
						}
						]
								
					},
					{
						xtype: 'spacer',
						height: '2em'
					},
					{
						html: '<div class="labels">Sex</div>'
					},
					{
						layout: 'hbox',               
						items: [
						{
							xtype: 'radiofield',
							name : 'color',
							value: 'male',
							label: 'Male',
							labelWidth: '100px',
							checked: true
							
						},
						{
							xtype: 'radiofield',
							name : 'color',
							value: 'female',
							labelWidth: '100px',
							label: 'Female'
						},
						{
							xtype: 'radiofield',
							name : 'color',
							value: 'others',
							label: 'Others',
							labelWidth: '100px'
						}
						]
					},
					{
						xtype: 'spacer',
						height: '30px'
					},
					{
						html: '<div class="labels"><span style="color:red">*</span>Age Information</div>'
					},
					{
						xtype: 'panel',
						id: 'agePanel',
						flex: 1,
						
						items: [
						{
							html: '<div class="note">Note: If Date Of Birth (DOB) is not available enter age as on 1st January 2011</div>'
						}
						,
						{
							layout: 'hbox',
							items: [
							{
								xtype: 'datepickerfield',
								label: 'Date Of Birth',
								labelAlign: 'top',
								styleHtmlContent: true,
								cls: 'textFieldBckg',
								labelCls: 'textFieldLabelBckg',
								height: '80px'
							},
							{
								xtype: 'spacer',
								width: '50px'
							},
							{
								xtype: 'spacer',
								width: '2px',
								style: 'background-color:#aaa'
							},
							{
								layout: 'vbox',
								
								items: [
								{
									html: '<div class="labels">Age as on 1st January 2011</div>'
								}
								,
								{
									layout: 'hbox',
								
									items: [
									{
										xtype:'textfield',
										label: 'Years',
										labelAlign: 'right',
										clearIcon: true,
										labelWidth:'35%',
										flex: 1,
										cls: 'textFieldBckg',
										labelCls: 'textFieldLabelBckg'
									},
									{
										xtype: 'spacer',
										width: '50px'
									},
									{
										xtype:'textfield',
										label: 'Months',
										cls: 'textFieldBckg',
										labelAlign: 'right',
										clearIcon: true,
										labelWidth:'35%',
										flex: 1,
										labelCls: 'textFieldLabelBckg'
									}
									]
								
								}
								]
							},
							{
								xtype: 'spacer',
								height: '30px',
								flex: 1
							}
							]
						}
						]
					},
					{
						html: '<div class="labels">Education</div>'
					},
					{
						layout: 'hbox',
						items: [
						{
							xtype: 'radiofield',
							name: 'education',
							value: 'lessThanOrEqualTo5',
							label: '5th Pass or less',
							labelWidth: '200px',
						},
						{
							xtype: 'radiofield',
							name: 'education',
							value: '6To9',
							label: '6th - 9th Standard',
							labelWidth: '200px',
						},
						{
							xtype: 'radiofield',
							name: 'education',
							value: 'graduated',
							label: 'Graduate and above',
							labelWidth: '200px',
						},
						{
							xtype: 'radiofield',
							name: 'education',
							value: '10thAndAbove',
							label: '10th standard and above',
							labelWidth: '200px',
						},
						{
							xtype: 'radiofield',
							name: 'education',
							value: 'notEducated',
							label: 'Not Educated',
							labelWidth: '200px',
						}
						]
					},
					{
						xtype: 'spacer',
						height: '30px'
					},
					{
						xtype: 'selectfield',
						name: 'caste',
						label: 'Caste',
						placeHolder: 'Select Caste',
						displayField: 'desc',
						options:[
							{desc: 'First Caste', value: 'first'},
							{desc: 'Second Caste', value: 'second'},
							{desc: 'Third Caste', value: 'third'},
							{desc: 'Fourth Caste', value: 'fourth'},
							{desc: 'Fifth Caste', value: 'fifth'}
						]
					}
					]
		},
		{
			xtype: 'spacer',
			height: '30px'
		},
		{
			xtype: 'button',
			text: 'CONTINUE',
			ui: 'confirm',
			width: '160px',
			id: 'continue'
		}
	]
}
});