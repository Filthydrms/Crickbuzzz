Ext.define('myApplication.view.england',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'engteampage',
	
    itemId:'engteampage',
    layout:'vbox',
    title: 'England Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/engteam.jpg)',
		backgroundSize:'100% 100%'
				
			}
 })