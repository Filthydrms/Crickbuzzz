
Ext.define('myApplication.view.registration', {
    extend: 'Ext.panel.Panel',
    xtype: 'registerform',
    
    itemId:'regform',
    frame: true,
    title: 'Register',
    
    autoScroll:true,
    width: 355,
	border:false,
	bodyPadding : '60% 10 0 10',
	bodyStyle:{

     //src : 'resources/images/bg.jpg',
		backgroundImage:'url(resources/image/t201.jpg)',
		backgroundSize:'100% 100%'
				},
	layout : {
		type : 'vbox',
		align : 'center'
		
	},



   // fieldDefaults: {
     //   labelAlign: 'right',
       // labelWidth: 115,
        //msgTarget: 'side'
    //},

    	items : [ 
	 // {
		// xtype:'image',
		// style: 'opacity: 0.6;',
		// width:400,
		// height:75,
		//src : 'resources/image/login.jpg',
	// },
	{
		xtype :'panel',
		height:500 ,
		width : 350,
		border:false,
		style: 'opacity: 0.9;',
		//borderRadiusWidth:20px,
		layout:{
			type:'hbox'
		},
		items:[
			// {
				// xtype:'image',
				//src : 'resources/images/download.jpg',
				// width : 200,
				// height:250
			// },
			{xtype:'tbspacer', height:10},
			{
				//id : 'loginform',
				xtype : 'form',
				border:false,
				itemid : 'logindata1',
				//src : 'resources/images/solution-suite-customer.png',
				width : 400,
				//height:250,
				bodyStyle: 'opacity:0.9;',

				bodyPadding : '20 10 0 10',
				defaultType : 'textfield',
				defaults : {
					height:30,
					labelWidth:120,
					inputWidth:200,
					labelAlign: 'center',
					labelSeparator:'',
					labelStyle:'font-weight:bold;',
					afterLabelTpl :'<span style="float:right;">:&nbsp;</span>',
					allowBlank:false,
					msgTarget: 'side'
				},
				items : [{xtype:'tbspacer', height:10},
					 
						{ allowBlank:false, fieldLabel: 'User Name*', name: 'user', emptyText: 'username',vtype:'alpha'},
						
					,
					{xtype:'tbspacer', height:10},
					  { allowBlank:false, fieldLabel: 'Password*', name: 'pass', emptyText: 'password', inputType: 'password', id:'passwrd' },
					{xtype:'tbspacer', height:10},
					{ allowBlank:false,
				fieldLabel: 'Confirm Password', 
				name: 'cpass',
				emptyText: 'password', 
				inputType: 'password',
				id:'cpasswrd',
				initialPassField: 'passwrd',
				
				validator: function(value) 
				{
					var password = this.previousSibling('[name=pass]');
					return (value === password.getValue()) ? true : 'Passwords do not match.'
				}},	
					{xtype:'tbspacer', height:10},
					{
						 fieldLabel: 'First Name*',
                       emptyText: 'First Name',
                          name: 'first',
				       allowBlank: false,
				       minLength: 3
						
						},	
						{xtype:'tbspacer', height:10},
					{
						fieldLabel: 'Last Name*',
                        emptyText: 'Last Name',
                        name: 'last',
				        allowBlank: false,
				         minLength: 6
						
						},	
						{xtype:'tbspacer', height:10},
					{
						fieldLabel: 'Email*',
                        name: 'email',
                        vtype: 'email',
				        allowBlank: false
						
						},	
						{xtype:'tbspacer', height:10},
					{
						fieldLabel: 'Phone No*',
                       name: 'phone',
                //vtype: 'number'
				       maskRe: /[0-9.]/,
				      maxLength:9 
						
						},	
						
						
				{xtype:'tbspacer', height:10},
						{
							xtype:'combo',
				fieldLabel:'role*',
				name:'role',
				valueField: 'role',
				queryMode:'local',
				store:'appstore',
				displayField:'role',
				autoSelect:true,
	
						//	forceSelection:true,
							  height:22							  
								
						},{xtype:'tbspacer', height:10}														
				],
				dockedItems: [{
					xtype: 'toolbar',
					dock: 'bottom',
					ui: 'footer',//with default the appearance of buttons changes
					height:55,
					layout:{
						type:'hbox'
						
					},
					style:{
						background: '#FFF'
					},
					
					padding:'0 0 10 0',
					margin:'10 0 10 140',

					items: [
						//{ xtype: 'component', flex: 1,,height:5 },
						{
							xtype: 'button',					
							text: '<b>Reset</b>',
							itemId:'loginbutton',
							width:80,
							height:30,
							margin:'5 0 5 0',
							color : 'blue',
							
				           action:'reset',
				           itemId:'resetbutton',
							style:{
								//'border-radius':'10px',										
								'box-shadow': '1px 1px 3px #000'
							}
						},{xtype:'tbspacer', width:10},
						{
							xtype: 'button',					
							text: '<b>Register</b>',
							itemId:'registerbutton',
							width:80,
							height:30,
							margin:'5 0 5 0',
							color : 'blue',
							action:'registerbutton',
                            disabled: true,
                            formBind: true,
							style:{
								//'border-radius':'10px',										
								'box-shadow': '1px 1px 3px #000'
							}
						}
						
					]
				}
				]
			}
		]
	}
	]
});
