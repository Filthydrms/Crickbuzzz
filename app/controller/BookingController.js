Ext.define('myApplication.controller.BookingController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'booking'],
	requires: ['Ext.util.Cookies'],
	fare:0,
	init : function(){
		// console.log("LoginController : inside showLoginPage()");
		this.control(
		{
			' button[action=book]' :
			{
				click : this.bookseat

			},
			' button[action=check]' :
			{
				click : this.checkseat

			}
			
	})},
	
    showBookingPage:function()
	{
		console.log("BookingController : inside showBookingPage()");
		//Ext.getCmp('index').getLayout().setActiveItem('bookingpanel');
		Ext.getCmp('myviewpanel').getLayout().setActiveItem('bookingpage');
	},
	
	bookseat:function()
	{
		console.log(" inside bookseat()");
		
		
		var store= Ext.getStore('bookingStatus') ;
		// Ext.util.Cookies.get("username", username.setValue());
		var username = Ext.util.Cookies.get('username');
		
            var recentfare= this.fare;
			console.log("user name is:: "+username);
			console.log("fare is is:: "+recentfare);
			
        // store.add({username:form.findField("user").getValue(),
            // Education:form.findField("Education").getValue(),
            // Expereince:form.findField("Expereince").getValue(),
            // Password:form.findField("Password").getValue(),
            // email:form.findField("email").getValue()});
            
            // store.sync();
		
		Ext.Msg.alert('', 'Thankyou for booking  your ticket has been sent to your mail',function(button)
		{
		if(button=='ok')
		{
			Ext.Router.redirect('dashboard');
		}
		});
		
	},
	checkseat:function(button)
	{
		//console.log(" inside checkseat()");
		var radio1=Ext.getCmp('1').getValue();
		var radio2=Ext.getCmp('2').getValue();
		var radio3=Ext.getCmp('3').getValue();
		var radio3=Ext.getCmp('4').getValue();
		
		if(radio1==true)
		{
			this.fare=200;
			Ext.getCmp('checkpanel').getLayout().setActiveItem('east1');
		}
		else if(radio2==true)
		{
			this.fare=400;
			Ext.getCmp('checkpanel').getLayout().setActiveItem('east2');
		}
		else if(radio3==true)
		{
			this.fare=800;
			Ext.getCmp('checkpanel').getLayout().setActiveItem('east3');
		}
		else{
			this.fare=1000;
			Ext.getCmp('checkpanel').getLayout().setActiveItem('east4');
		}
		
		
		
	},
	
	
});	