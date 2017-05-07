Ext.define('myApplication.store.bookingStatus',{
			extend:'Ext.data.Store',

storeId:'bookingStatus',
autoLoad: true,
requires:['myApplication.model.bookingStatusmodel'],
model:'myApplication.model.bookingStatusmodel',
           proxy: {
         type: 'localstorage',
		 id:'localproxy'
         
         }


	

     
});