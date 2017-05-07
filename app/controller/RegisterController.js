Ext.define('myApplication.controller.RegisterController', 
{
	extend : 'Ext.app.Controller',
	views : [ 'registration'],
	
	init : function(){
		//console.log("LoginController : inside showRegisterPagePage()");
		this.control(
		{
			' button[action=registerbutton]' :
			{
				click : this.Registration

			},
			' button[action=reset]' :
			{
				click : this.Reset

			}
			
	})},
	
    showRegisterPage:function()
	{
		console.log("RegisterController : inside showRegisterPage()");
		Ext.getCmp('index').getLayout().setActiveItem('regform');
	},
	Reset: function(button)
	{
		var form =button.up('form').getForm();
          form.reset();

	},
	
	Registration: function(button) 
	{
		
		console.log("inside regcontroller");
		/* 	
			 var password = Ext.ComponentQuery.query('textfield[name=pass]')[0];
			 var Cpassword = Ext.ComponentQuery.query('textfield[name=cpass]')[0];
			 var form=button.up('form');
			 var values = form.getValues(); */
			
			 //console.log("going to if");
			 
			
			
				
			//console.log("inside if");
			var form=button.up('form').getForm();
			//var form = this.up('form').getForm(); // get the basic form
             console.log(form);
			 var values = form.getValues();
			 console.log(values);
			 var rec =new myApplication.model.regmodel(values);
			 this.getStore('regstore').add(rec);
			 this.getStore('regstore').sync();
			 Ext.Msg.alert("Thankyou For Registering"),
			 Ext.Router.redirect('login');
			
			
				
			/* 
			else
			{
				Ext.Msg.alert("passwords are not same... please check")
			} */
			

	
	}
	
	
});