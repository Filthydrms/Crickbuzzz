Ext.define('myApplication.view.mohali',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'mohali',
	
    itemId:'mohali',
    layout:'vbox',
    title: 'Punjab Cricket Association Stadium,Mohali ',
    frame:true,
    width: 500,height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/mohali.jpg)',
		backgroundSize:'100% 100%'
				}
 })