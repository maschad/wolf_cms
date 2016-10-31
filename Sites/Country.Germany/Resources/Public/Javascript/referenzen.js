(function(document, $, history) {
	$(document).ready(function() {
		var title = "Wolf Haus";
		var hauselinienSelector = $('#hauselinien-filter');
		var regionSelector = $('#region-filter');

		var regionFilter = 'region=' + regionSelector.val();
		var hauselinienFilter = 'hauselinien=' + hauselinienSelector.val();

		var queryString = buildQuery(hauselinienFilter, regionFilter);
	
		history.pushState({}, title, queryString);

		hauselinienSelector.on('change', function(e) {
			hauselinienFilter = 'hauselinien=' + this.value;
			history.pushState({}, title, buildQuery(hauselinienFilter, regionFilter));
		});

		regionSelector.on('change', function(e) {
			regionFilter = 'region=' + this.value;
			history.pushState({}, title, buildQuery(hauselinienFilter, regionFilter));
		});

		function buildQuery() {
			if (arguments.length <= 0) 
				return "";
			
			var query = "?";
			query += arguments[0];

			if (arguments.length == 1) 
				return query;

			for (var i = 1; i < arguments.length; i++)
				query += ("&" + arguments[i]); 
			
			return query;
		}
	});

})(document, $, history);