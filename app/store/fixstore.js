Ext.define('myApplication.store.fixstore',{
			extend:'Ext.data.Store',

storeId:'fixstore',

model:'myApplication.model.fixmodel',
              
  proxy: {
         type: 'ajax',
         url: 'resources/data/fixture.json',
         reader: {
             type: 'json',
             root: 'Fixtures'
         }
     },
     autoLoad: true
});