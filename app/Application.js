Ext.define('myApplication.Application', {
    name: 'myApplication',

    extend: 'Ext.app.Application',
	requires:
	['Ext.ux.Router'],

    views: [
          'login','dashboard','registration','tickets','booking','india','pakistan','safrica','england','westindies',
		  'newzealand','srilanka','australia','nagpur','dharamshala','bengaluru','mohali'
    ],

    controllers: [
        'LoginController','DashController','RegisterController','TicketController','BookingController','TeamController','VenuController'
    ],

    stores: [
        'appstore','regstore','fixstore'
    ],
	
	routes: 
	{
	 'login':'LoginController#showLoginPage',
	 'dashboard':'DashController#showdashboard',
	 'registration':'RegisterController#showRegisterPage',
	 'tickets':'TicketController#showTicketPage',
	 'booking':'BookingController#showBookingPage'
	 //'schedule':'ScheduleController#showGrid'
	 
	}
}
);


