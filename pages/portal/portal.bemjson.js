({
    block: 'b-page',
    title: 'portal',
    js: true,
    head: [
        { elem: 'css', url: 'portal.css'},
        { elem: 'css', url: 'portal.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'portal.js' }
    ],
    content: [
        {
	  block: 'b-head-tabs',
	  content: [
	    {
	      elem: 'item',
	      content: 'Home'
	    },
	    {
	      elem: 'item',
	      content: 'Office'
	    }
	  ]
	}
    ]
})
