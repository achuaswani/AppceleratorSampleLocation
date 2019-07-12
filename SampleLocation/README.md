# AppceleratorSampleLocation
add permissions in tiapp.xml
```
<uses-feature android:name="android.hardware.location.gps" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
      
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
