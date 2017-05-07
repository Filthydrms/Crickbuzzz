Ext.define('myApplication.view.newzealand',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'nzteampage',
	
    itemId:'nzteampage',
    layout:'vbox',
    title: 'New Zealand Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/nzland.jpg)',
		backgroundSize:'100% 100%'
				
			}
 })