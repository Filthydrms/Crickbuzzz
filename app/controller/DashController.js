Ext.define('myApplication.controller.DashController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'dashboard'],
	
	
	init : function(){
		// console.log("LoginController : inside showLoginPage()");
		this.control(
		{
			  'button[action=tickets]' :
			{
				click : this.ticket

			},
			'button[action=bookings]' :
			{
				click : this.bookseat

			},
			
	})},
	
	showdashboard:function()
	{
		console.log("DashController : inside showdashboard()");
		Ext.getCmp('index').getLayout().setActiveItem('dashpanel');
	},
	bookseat:function()
	{
		console.log("bookseat : inside bookseat()");
		Ext.Router.redirect('booking');
		//Ext.getCmp('myviewpanel').getLayout().setActiveItem('bookingpanel');
	},
	
	ticket : function() 
	{
		 Ext.Router.redirect('tickets');
	}
});
	
	