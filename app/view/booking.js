Ext.define('myApplication.view.booking',
 {
	 
    extend: 'Ext.form.Panel',
    xtype: 'bookingpage',
	
    itemId:'bookingpage',
    layout:'vbox',
    title: 'Book Tickets',
    frame:true,
    width: 500,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/Tickets.jpg)',
		backgroundSize:'100% 100%'
				},
	
		

	items:[
	{
        xtype: 'fieldcontainer',
		
        fieldLabel: 'Ticket Price',
		 width: 700,
		 height:550,
		 defaultType: 'radiofield',
        // Arrange radio buttons into two columns, distributed vertically
      layout:'hbox',
        
        items: [
		
            { boxLabel: '200', name: 'myradio', inputValue: '1' ,id:'1', checked:true, flex:1},
			{ boxLabel: '400', name: 'myradio', inputValue: '2',id:'2',flex:1},
            { boxLabel: '800', name: 'myradio', inputValue: '3' ,id:'3' ,flex:1},
            { boxLabel: '1000', name: 'myradio', inputValue: '4',id:'4',flex:1 },
        
			
			 { 		
				xtype: 'button',
				text:'check',
				action:'check',
				allign: 'right'
		  
			}
			
			

			]
        	
		
		
    },
	
		
	,
	{
		xtype:'panel',
		id:'checkpanel',
			itemId:'stand',
			layout:'card',
			items:[{
				xtype: 'image',
				itemId:'east1',
				src: 'resources/image/eaststand.jpg',
				
			},
			{
				xtype: 'image',
				itemId:'east2',
				src: 'resources/image/weststand.jpg',
				
			},
			{
				xtype: 'image',
				itemId:'east3',
				src: 'resources/image/northstand.jpg',
				
			},
			{
				xtype: 'image',
				itemId:'east4',
				src: 'resources/image/southstand.jpg',
				
			}
			]
	},
	{
		xtype: 'button',
				text:'Book Now',
				action:'book',
				scale: 'large',
				margin:'40 40 10 40',
				
				
				
				
				
	}
	
	],
	
 });