var accessibility = {
	$accessibilityButton: '.js-toggle-accessibility',
	$accessibility: '.accessibility',

	init: function() {
		this.toggleAccessibilityToolbar(this.$accessibilityButton, this.$accessibility);
	},

	toggleAccessibilityToolbar: function(obj, nav) {
		obj.addEventListener('click', function(){
            console.log('usao');
            if(getComputedStyle(nav, null).display === 'none' ||
            nav.style.display === 'none') {
                nav.style.display === 'block';
            } else {
                nav.style.display === 'none';
            }
        });
	},
};

export default accessibility;