Ext.define('myApplication.view.india',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'indiapanel',
	
    itemId:'indiapanel',
	//id:'indiapanel',
    layout:'vbox',
    title: 'Indian Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/indianteam.jpg)',
		backgroundSize:'100% 100%'
				}
 })