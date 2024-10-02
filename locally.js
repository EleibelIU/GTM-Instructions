<header>
  <!-- Google Tag Manager (Static Part) -->
  <script>
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; 
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','');
  </script>
  <!-- End Google Tag Manager (Static Part) -->

  <!-- Dynamic Google Tag Manager ID Script -->
  <script>
    (function() {
      // Map store locations to their respective GTM IDs
      var storeGTMMap = {
        "warrensburg": "GTM-NTXG257P",
        "grand-island": "GTM-XXXXXX", // Replace with actual GTM ID for Grand Island
        "spencer": "GTM-XXXXX"       // Replace with actual GTM ID for Spencer
      };

      // Extract the store location from the URL
      var urlPath = window.location.pathname;
      var storeLocation = urlPath.split('/').pop().toLowerCase(); // Extract last part of URL and lowercase it

      // Get the corresponding GTM ID for the store location
      var gtmID = storeGTMMap[storeLocation];

      // If a valid GTM ID is found, inject it into the static GTM script
      if (gtmID) {
        var gtmScript = document.querySelectorAll("script")[0];
        gtmScript.src = gtmScript.src.replace(/id=([^&]*)/, 'id=' + gtmID);
      } else {
        console.warn("No GTM ID found for store location:", storeLocation);
      }
    })();
  </script>
  <!-- End Dynamic Google Tag Manager ID Script -->
</header>
