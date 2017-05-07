/* Ext.define('myApplication.store.appstore',{
			extend:'Ext.data.Store',
	

		
       
		
        storeId: 'appstore',
			
		fields: [
                {
                    name: 'sde', type:'string'
					
                },
                
                {
                    clas: 5, type: 'string'
                },
				
                
            ],
			});
			
			
			
		Ext.create('Ext.data.Store'),
		{
			
			proxy:
			{
				type:'ajax',
			
				url :'resourses/data/json.json',
			
			reader:{
					type:'json',
					root:'combo'
			},
			    
			},
			autoLoad:true,
			
	}; */
	
Ext.define('myApplication.store.appstore',{
			extend:'Ext.data.Store',

storeId:'appstore',

model:'myApplication.model.mymodel',
              
  proxy: {
         type: 'ajax',
         url: 'resources/data/json.json',
         reader: {
             type: 'json',
             root: 'combo'
         }
     },
     autoLoad: true
});

	
