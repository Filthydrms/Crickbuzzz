Ext.define('myApplication.view.bengaluru',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'bengaluru',
	
    itemId:'bengaluru',
    layout:'vbox',
    title: 'Karnataka Cricket Association Stadium,Bengaluru ',
    frame:true,
    width: 500,height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/bengaluru.jpg)',
		backgroundSize:'100% 100%'
				}
 })