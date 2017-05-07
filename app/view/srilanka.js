Ext.define('myApplication.view.srilanka',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'slteampage',
	
    itemId:'slteampage',
    layout:'vbox',
    title: 'Sri Lanka Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/srilankateam.jpg)',
		backgroundSize:'100% 100%'
				
			} 
 })