Ext.define('myApplication.view.dharamshala',
 {
	  
    extend: 'Ext.panel.Panel',
    xtype: 'dharamshala',
	
    itemId:'dharamshala',
    layout:'vbox',
    title: 'Himachal Pradesh Cricket Association Stadium,Dharamshala ',
    frame:true,
    width: 500,height:550,
    bodyPadding: 10,
	
	bodyStyle:{

    
		backgroundImage:'url(resources/image/dharamshala.jpg)',
		backgroundSize:'100% 100%'
				}
 })