Ext.define('myApplication.view.nagpur',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'nagpur',
	
    itemId:'nagpur',
    layout:'vbox',
    title: 'Vidharbha Cricket Association Stadium,Nagpur ',
    frame:true,
    width: 500,height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/nagpur.jpg)',
		backgroundSize:'100% 100%'
				}
 })