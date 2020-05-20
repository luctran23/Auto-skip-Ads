
	console.log('Content is running');
	var container = document.getElementsByClassName("video-ads ytp-ad-module")[0];

	


	var observer = new MutationObserver(function() {

		var skipBtn = document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0];
		if(skipBtn) {
			skipBtn.click();
	   }
	});
	
	observer.observe(container, {childList: true});

