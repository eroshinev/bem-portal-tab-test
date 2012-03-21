BEM.DOM.decl('b-head-tabs', {

    onSetMod : {

        'js' : function() {

	    this.bindTo('mouseover', function(){
               console.log('hover');
            });

        }
    }

});
