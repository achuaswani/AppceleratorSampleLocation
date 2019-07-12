function doClick(e) {
	
	if (Ti.Geolocation.locationServicesEnabled) {
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
        } else {
            alert(e.coords);
            Ti.Geolocation.reverseGeocoder(e.coords.latitude, e.coords.longitude, function (e) {
			    if (e.error) {
			        console.log('GPS reverseGeocoder Error' + e.error);
			        alert(L("location_services_error"));   
			        activityIndicator.hide();
			        return;
			    }
			    if (e.places) {
			    	 console.log('GPS reverseGeocoder sucess' + e.places[0].address);
			        var p = e.places[0];
			        $.label.height = Ti.UI.SIZE;
			        $.label.text = p.address + ", " + p.country;
			        $.label.height = Ti.UI.SIZE;
			    } else {
			        alert("location services not found");
			    }
			}); 
        }
    });
} else {
    alert('Please enable location services');
     Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE, function(e) {
        if (e.success) {
           alert("Permission Granted");
        } else {
            alert("permission refused");
        }
    });
}
}
var hasLocationPermission = Ti.Geolocation.hasLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE);
if (!hasLocationPermission) {
    Ti.Geolocation.requestLocationPermissions(Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE, function(e) {
        if (e.success) {
             alert("Permission Granted");
        } else {
             alert("permission refused");
        }
    });
}
$.index.open();
