({
    block: 'b-page',
    title: 'portal',
    head: [
        { elem: 'css', url: 'portal.css'},
        { elem: 'css', url: 'portal.ie.css', ie: 'lt IE 8' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'portal.js' }
    ],
    content: [
        {
	  block: 'b-menu-horiz',
	  mods: { layout: 'normal' },
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
