Ext.define('myApplication.store.regstore',{
			extend:'Ext.data.Store',

storeId:'regstore',
autoLoad: true,
requires:['myApplication.model.regmodel'],
model:'myApplication.model.regmodel',
           proxy: {
         type: 'localstorage',
		 id:'localproxy'
         
         }


	

     
});