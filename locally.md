## How to Use This Script in Locally

### Steps to Implement

1. **Log into Locally**: Navigate to the **Landing Pages Editor** within your Locally account.
   
2. **Access the Header Section**: In the editor, locate the option to manage or edit the global header HTML. This will be the section where the GTM script needs to be placed.

3. **Paste the Script**: Copy the following script and paste it **between the `<header>` tags** in the global header editor.

   ```html
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
   
3. **Save Changes**: Once the script is added to the global header, save the changes in the Landing Pages Editor.

### Keeping GTM IDs and Stores Current
**Update Store Locations**: Anytime a new store is added or an existing store is renamed, update the `storeGTMMap` in the script. Each store's URL path (the last segment) should be mapped to its respective GTM ID in the script.
   
   ```js
   var storeGTMMap = {
     "warrensburg": "GTM-NTXG257P",
     "grand-island": "GTM-XYZ12345", // Update this GTM ID if necessary
     "spencer": "GTM-ABC98765",
     "new-location": "GTM-NEW12345"  // Example of a new store
   };
