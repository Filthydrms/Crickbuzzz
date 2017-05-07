Ext.define('myApplication.controller.BookingstatusController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'bookingstatus'],
	init : function(){},
	
	showbookingstatusPage:function()
	{
		console.log("showController : inside showbookings111 ()");
		Ext.getCmp('index').getLayout().setActiveItem('bookingstatusgrid');
	}
});