Ext.define('myApplication.view.pakistan',
 {
	 
	extend: 'Ext.panel.Panel',
    xtype: 'pakistanpanel',
	
    itemId:'pakistanpanel',
	//id:'indiapanel',
    layout:'vbox',
    title: 'Pakistan Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/pakteam.jpg)',
		backgroundSize:'100% 100%'
				}
 })