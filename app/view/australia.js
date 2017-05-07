Ext.define('myApplication.view.australia',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'austeampage',
	
    itemId:'austeampage',
    layout:'vbox',
    title: 'Australian Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/austeam.jpg)',
		backgroundSize:'100% 100%'
				
			}
 })