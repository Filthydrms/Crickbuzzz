Ext.define('myApplication.view.safrica',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'sateampage',
	
    itemId:'sateampage',
    layout:'vbox',
    title: 'South African Team',
    frame:true,
    width: 500,
	height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/sateam.jpg)',
		backgroundSize:'100% 100%'
				
			}
 })