Ext.define('myApplication.controller.TicketController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'tickets','dashboard'],
	
	
	showTicketPage:function()
	{
		console.log("TicketsController : inside showticket()");
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('ticketpage');
	},
});