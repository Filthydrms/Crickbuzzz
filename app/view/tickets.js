Ext.define('myApplication.view.tickets', {
    extend: 'Ext.grid.Panel',
	xtype: 'ticketpage',
	itemId:'ticketpage',
	//queryMode:'local',
	
	
	bodyStyle:{

     //src : 'resources/images/bg.jpg',
		backgroundImage:'url(resources/image/stand.jpg)',
		backgroundSize:'100% 100%'
				},


	requires: [
	'Ext.grid.*',
        'Ext.data.*',
        'Ext.util.*',
        'Ext.form.*',
        'Ext.grid.column.Action'
    ],
    
    //xtype: 'array-grid',
    //store: 'fixstore',
	//queryMode:'local',	
    //stateful: true,
    //collapsible: true,
   // multiSelect: true,
    //stateId: 'stateGrid',
    title: 'Edit Plants',
    frame: true,
    
    initComponent: function() {
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 1
        });
        
        Ext.apply(this, {
            width: 680,
            height: 350,
            plugins: [this.cellEditing],
            store: 'fixstore',
                
            columns: [{
                header: 'match',
                dataIndex: 'match',
                flex: 1,
                editor: {
                    allowBlank: false
                }
            }, {
                header: 'time',
                dataIndex: 'time',
                width: 130,
                flex: 1,
                editor: {
                    allowBlank: false
                }
            }, {
                header: 'venue',
                dataIndex: 'venue',
                width: 70,
                align: 'right',
                //renderer: 'usMoney',
                editor: {
                    allowBlank: false
                }
            }, {
                xtype    : 'datecolumn',
                text     : 'Date',
                width    : 115,
                sortable : true,
                format   : 'm/d/Y',
				dataIndex: 'date',
				name:'date'
            },
//			{
                // xtype: 'checkcolumn',
                // header: 'Indoor?',
                // dataIndex: 'indoor',                // width: 90,
                // stopSelection: false
            // },
			{
                xtype: 'actioncolumn',
                width: 100,
                sortable: false,
                menuDisabled: true,
                items: [{
                    icon: 'resources/image/download.png',
                    tooltip: 'Book Now',
                    scope: this,
                    handler: this.onRemoveClick
					//action:'bookings'
                }]
            }],
            selModel: {
                selType: 'cellmodel'
            },
            tbar: [{
                text: 'Add Plant',
                scope: this,
                handler: this.onAddClick
            }]
        });
        
        this.callParent();
        
        // this.on('afterlayout', this.loadStore, this, {
            // delay: 1,
            // single: true
        // })
    },
    
    loadStore: function() {
        this.getStore().load({
            // store loading is asynchronous, use a load listener or callback to handle results
            callback: this.onStoreLoad
        });
    },
    
    onStoreLoad: function(){
        Ext.Msg.show({
            title: 'Store Load Callback',
            msg: 'store was loaded, data available for processing',
            icon: Ext.Msg.INFO,
            buttons: Ext.Msg.OK
        });
    },
    
    onAddClick: function(){
        // Create a model instance
        var rec = new KitchenSink.model.grid.Plant({
            common: 'New Plant 1',
            light: 'Mostly Shady',
            price: 0,
            availDate: Ext.Date.clearTime(new Date()),
            indoor: false
        });
        
        this.getStore().insert(0, rec);
        this.cellEditing.startEditByPosition({
            row: 0, 
            column: 0
        });
    },
    
    onRemoveClick: function(grid, rowIndex){
		console.log("bookseat : inside tickets.js()");
		Ext.Router.redirect('booking');
       // this.getStore().removeAt(rowIndex);
    }
})