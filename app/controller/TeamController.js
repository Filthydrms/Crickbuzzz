Ext.define('myApplication.controller.TeamController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'india','dashboard','pakistan','safrica','australia','newzealand','westindies','england','srilanka'],
	
	init : function(){
		//console.log("LoginController : inside showLoginPage()");
		this.control(
		{
			' button[action=India]' :
			{
				click : this.India

			},
			' button[action=Pakistan]' :
			{
				click : this.Pakistan

			},
			 'button[action=SouthAfrica]' :
			{
				click : this.SouthAfrica

			},
			'button[action=Australia]' :
			{
				click : this.Australia

			},
			'button[action=NewZealand]' :
			{
				click : this.NewZealand

			},
			'button[action=WestIndies]' :
			{
				click : this.WestIndies

			},
			'button[action=England]' :
			{
				click : this.England

			},
			'button[action=Srilanka]' :
			{
				click : this.Srilanka

			}
			
			
	})},
	
    India:function()
	{
		
		console.log("TeamController : inside india()");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('indiapanel');
	},
	
	Pakistan:function()
	{
		
		console.log("TeamController : inside pak()");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('pakistanpanel');
	},
	
	SouthAfrica:function()
	{
		
		console.log("TeamController : inside africapanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('sateampage');
	},
	Australia:function()
	{
		
		console.log("TeamController : inside auspanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('austeampage');
	},
	NewZealand:function()
	{
		
		console.log("TeamController : inside nzpanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('nzteampage');
	},
	WestIndies:function()
	{
		
		console.log("TeamController : inside wipanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('witeampage');
	},
	England:function()
	{
		
		console.log("TeamController : inside engpanel");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('engteampage');
	},
	Srilanka:function()
	{
		
		console.log("TeamController : inside SriLanka");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('slteampage');
	}
	

    });

