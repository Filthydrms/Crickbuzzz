Ext.define('myApplication.controller.LoginController', 
{
	
	requires: ['Ext.util.Cookies'],
	
	extend : 'Ext.app.Controller',
	views : [ 'login'],
	
	init : function(){
		//console.log("LoginController : inside showLoginPage()");
		this.control(
		{
			' button[action=login]' :
			{
				click : this.loginuser

			},
			
			' button[action=register]' :
			{
				click : this.registeruser

			}
	})},
	
    showLoginPage:function()
	{
		console.log("LoginController : inside showLoginPage()");
		Ext.getCmp('index').getLayout().setActiveItem('loginpanel');
	},
	
	loginuser : function() 
	{
		console.log("inside controller");
		 var me = this;
   // var form = Ext.getCmp('form').getForm();
   // if (!form.isValid()) {
   //   console.log("login form invalid");
          
   //   return;
   // }
    
	 
     var username = Ext.ComponentQuery.query('textfield[name=user]')[0];
	 var password=Ext.ComponentQuery.query('textfield[name=pass]')[0];
	 var role=Ext.ComponentQuery.query('combobox[name=role]')[0];
	
	 var store=Ext.getStore('regstore');
	var status='fail';
  //  var formValues = form.getValues();
	//console.log(formValues);
	var Index = store.findExact('user',username.getValue());
	console.log("index is"+Index );
	if(Index=>0)
	{
    var userData=store.getAt(Index);
	//console.log(userData.data.pass);
	//console.log(password.getValue());
    if (userData.data.pass == password.getValue() && userData.data.role==role.getValue())
    status='success';
        if (status == "success") {
        console.log('login successful');
        Ext.Router.redirect('dashboard');
        //document.location.href='http://localhost:8080/Crickbuzz/Crickbuzz/index.html';
        } else if (status == "fail") {
        Ext.Msg.alert('', 'username or Password is Incorrect');
        } 
			Ext.util.Cookies.set("username", username.getValue());
			Ext.util.Cookies.set("pass", password.getValue());
			Ext.util.Cookies.set("role", role.getValue());
   }
   else
   { 
     Ext.Msg.alert('','This user is not present please Register!!!'); 
   }

	 


		
		// var user=Ext.ComponentQuery.query('textfield[name=user]')[0];
    // var password=Ext.ComponentQuery.query('textfield[name=pass]')[0];
    // var role=Ext.ComponentQuery.query('combobox[name=role]')[0];
    // if(user.getValue()=='rizz'&&password.getValue()=='1111')
    // {
      
      
      // Ext.Router.redirect('dashboard');
    // }
    // else{
		// Ext.Msg.alert('Status', 'Please enter the details');
      // console.log('Failed');
    // }
	},
	
	registeruser: function()
	{
		console.log("inside registrlogincontroller");
		Ext.Router.redirect('registration');
	}

		
		/* console.log("inside controller");
		var form = Ext.getCmp('loginform');
		if (!form.getForm().isValid()) {
			console.log("login form invalid");
			return;
		}

		var formValues = form.getForm().getValues();
		
    if(formValues.user=='rizz'&&formValues.pass=='12345')
    {
      
      
      Ext.Router.redirect('dashboard');
    }
    else{
      console.log('Failed');
    } */

		
    /* var me = this;
    var form = Ext.getCmp('loginpanel');
    if (!form.getForm().isValid()) {
      console.log("login form invalid");
          
      return;
    }
var status='fail';
    var formValues = form.getForm().getValues();
    if ( formValues.j_username== formValues.j_password)
    status='success';
          if (status == "success") {
            console.log('login successful');
            Ext.Router.redirect('dashboard');

          } else if (status == "fail") 
		  {
            Ext.Msg.alert('', fetch.usernamePasswordIncorrectMsg);
          }

      },
      failure : function(response) 
	  {
        alert("Communication failed");
      } */

    });

