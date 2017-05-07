Ext.define('myApplication.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Card'
    ],
    id:'index',
    xtype: 'app-main-view',

    layout: {
        type: 'card'
    },
	
	items: [{
       
        xtype: 'loginpage'
        
    },
	{
		xtype: 'dashpage'
	},
	{
		xtype: 'registerform'
	},
	
	 {
		 xtype:'ticketpage'
	 },
	 
	 {
		 xtype:'bookingpage'
	 },
	 {
		 xtype:'indiapanel'
	 },
	 {
		 xtype:'pakistanpanel'
	 },
	 {
		 xtype:'sateampage'
	 },
	 {
		 xtype:'austeampage'
	 },
	 {
		 xtype:'nzteampage'
	 },
	 {
		 xtype:'witeampage'
	 },
	 {
		 xtype:'engteampage'
	 },
	 {
		 xtype:'slteampage'
	 },
	 {
		 xtype:'nagpur'
	 },
	 {
		 xtype:'dharamshala'
	 },
	{
		 xtype:'bengaluru'
	 },	 
	 {
		 xtype:'mohali'
	 }
	]
	
    
});