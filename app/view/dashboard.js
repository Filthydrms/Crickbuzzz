Ext.define('myApplication.view.dashboard',
 {
		extend : 'Ext.panel.Panel',
	xtype: 'dashpage',
	
		
		itemId:'dashpanel',
	border:false,
	bodyPadding : '60% 10 0 10',
	bodyStyle:{

     //src : 'resources/images/bg.jpg',
		backgroundImage:'url(resources/image/aot20.jpg)',
		backgroundSize:'100% 100%'
				},
	layout : {
		type : 'vbox',
		//align : 'center'
		
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
		//height:280 ,
		//width : 350,
		border:false,
		style: 'opacity: 0.9;',
		//borderRadiusWidth:20px,
		layout:{
			type:'hbox',
			align : 'center'
		},
		items:[	
			{
	//xtype: 'layout-accordion',
	
    layout: 'accordion',
	flex:2,
	align : 'left',
    width: 300,
    height: 550,
	style: 'opacity: 0.9;',
    defaults: {
        bodyPadding: 10
    },
    
            items: [{
                title: 'TEAMS GALERY',
                
				items: [
					{
                    xtype: 'button',
					width: 280,
                    text: 'India',
					action:'India',
                    scale: 'large'
              
				},
				{
			xtype:'tbspacer',width: 50
		},
		{
                    xtype: 'button',
                    text: 'Pakistan',
					action:'Pakistan',
					width: 280,
                    scale: 'large'
              
				},{
                    xtype: 'button',
                    text: 'SouthAfrica',
					action:'SouthAfrica',
					width: 280,
                    scale: 'large'
              
				},
				{
                    xtype: 'button',
                    text: 'WestIndies',
					action:'WestIndies',
					width: 280,
                    scale: 'large'
              
				},{
                    xtype: 'button',
                    text: 'Australia',
					action:'Australia',
					width: 280,
                    scale: 'large'
              
				},{
                    xtype: 'button',
                    text: 'NewZealand',
					action:'NewZealand',
					width: 280,
                    scale: 'large'
              
				},
				{
                    xtype: 'button',
                    text: 'England',
					action:'England',
					width: 280,
                    scale: 'large'
              
				},
			{
                    xtype: 'button',
                    text: 'SriLanka',
					width: 280,
					action:'Srilanka',
                    scale: 'large'
              
				}]
            }, {
                title: 'BOOKINGS',
                	items: [
					{
                    xtype: 'button',
					width: 280,
                    text: 'BOOK TICKETS',
					action:'tickets',
                    scale: 'large'
              
				},
				{
			xtype:'tbspacer',width: 50
		},
		{
                    xtype: 'button',
                    text: 'SHOW TICKETS',
					width: 280,
                    scale: 'large'
              
				}]
            }, {
                title: 'VENUES',
                	items: [
					{
                    xtype: 'button',
					width: 280,
                    text: 'Nagpur',
					action:'Nagpur',
                    scale: 'large'
              
				},{
                    xtype: 'button',
					width: 280,
                    text: 'Dharamshala',
					action:'Dharamshala',
                    scale: 'large'
              
				},{
                    xtype: 'button',
					width: 280,
                    text: 'Bengaluru',
					action:'Bengaluru',
                    scale: 'large'
              
				},{
                    xtype: 'button',
					width: 280,
                    text: 'Mohali',
					action:'Mohali',
                    scale: 'large'
              
				}]
            }, {
                title: 'STATS',
                	items: [
					
				{
			xtype:'tbspacer',width: 50
		},
		{
                    xtype: 'button',
                    text: 'LIVE MATCH',
					width: 280,
                    scale: 'large'
              
				},
				{
			xtype:'tbspacer',width: 50
		},{
                    xtype: 'button',
                    text: 'FIXTURES',
					width: 280,
                    scale: 'large'
              
				}]
            }]
     
    
    
			},
		
			 {
				xtype:'panel',
                title: 'VIEW',
				itemId :'myviewpanel',
				id:'myviewpanel',
                //collapsed: true,
                collapsible: true,
				align : 'right',
                width: 1050,
		layout:'card',
		flex:3,
		 //colspan: 3,
             items:[
			 {
				 
			 },
			{
				 xtype:'indiapanel'
			 },
			 {
				 xtype:'pakistanpanel'
			 },
			{
				 xtype:'slteampage'
			 },
			 {
				 xtype:'sateampage'
			 },
			{
				 xtype:'austeampage'
			 },
			 {
				 xtype:'nzteampage'
			 },{
				 xtype:'witeampage'
			 },
			{
				 xtype:'engteampage'
			 },{
				 xtype:'ticketpage'
			 },{
				 xtype:'nagpur'
			 },{
				 xtype:'dharamshala'
			 },{
				 xtype:'bengaluru'
			 },{
				 xtype:'mohali'
			 }
			 ]		

              
               
            }
		]
	}
	]
   
});