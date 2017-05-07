Ext.define('myApplication.controller.VenuController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'nagpur','dharamshala','bengaluru','mohali'],
	
	init : function(){
		//console.log("LoginController : inside showLoginPage()");
		this.control(
		{
			' button[action=Nagpur]' :
			{
				click : this.Nagpur

			},
			' button[action=Dharamshala]' :
			{
				click : this.Dharamshala

			},
			 'button[action=Bengaluru]' :
			{
				click : this.Bengaluru

			},
			'button[action=Mohali]' :
			{
				click : this.Mohali

			}
			
	})},
	
    Nagpur:function()
	{
		
		console.log("VenuController : inside nagpur()");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('nagpur');
	},
	
	Dharamshala:function()
	{
		
		console.log("VenuController : inside dharamshala()");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('dharamshala');
	},
	
	Bengaluru:function()
	{
		
		console.log("VenuController : inside bengalurupanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('bengaluru');
	},
	Mohali:function()
	{
		
		console.log("VenuController : inside mohalipanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('mohali');
	}
	

    });

