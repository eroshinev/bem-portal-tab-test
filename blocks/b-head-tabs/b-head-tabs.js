BEM.DOM.decl('b-head-tabs',
	{
		_onHover : function(e){
			console.log('hover');
		}
	
	},
	{


   		live : function() {
	
        		this.liveBindTo('mouseover', function(e){
			this._onHover(e);
           	 });

    }

});	
