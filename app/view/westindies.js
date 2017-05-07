Ext.define('myApplication.view.westindies',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'witeampage',
	
    itemId:'witeampage',
    layout:'vbox',
    title: 'West Indies Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/westteam.jpg)',
		backgroundSize:'100% 100%'
				
			}
 })