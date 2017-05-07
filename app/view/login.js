Ext.define('myApplication.view.login',
 {
	extend : 'Ext.panel.Panel',
	xtype : 'loginpage',
	id : 'login',
	itemId:'loginpanel',
	border:false,
	bodyPadding : '60% 10 0 10',
	bodyStyle:{

     //src : 'resources/images/bg.jpg',
		backgroundImage:'url(resources/image/worldt20.jpg)',
		backgroundSize:'100% 100%'
				},
	layout : {
		type : 'vbox',
		align : 'center'
		
	},
	style:{
		//margin :'10% 5% 10% 5%'
		
	},
	
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
		height:280 ,
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
				itemid : 'logindata',
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
					 {	
						 allowBlank: false,
            fieldLabel: 'UserName*',
            name: 'user',
			inputType: 'text',
			//vtype: 'number',
            emptyText: 'username',
			vtype:'alpha',
						
					},
					{xtype:'tbspacer', height:10},
					{
						 allowBlank: false,
            fieldLabel: 'Password*',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password',
			
						},{xtype:'tbspacer', height:10},
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
							text: '<b>Login</b>',
							itemId:'loginbutton',
							width:80,
							height:30,
							margin:'5 0 5 0',
							color : 'blue',
							action:'login',
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
							action:'register',
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