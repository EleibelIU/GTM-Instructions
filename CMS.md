
# 🛠️ How to Add a Google Tag Manager (GTM) Tag Using a CMS (e.g., Locally.com)

This guide provides step-by-step instructions for adding a Google Tag Manager (GTM) tag using a content management system (CMS) like Locally.com. CMS platforms generally offer built-in tools or sections where you can insert scripts such as GTM without needing direct access to the site's code.



## 1. Accessing the Admin Panel

Most CMS platforms, including Locally.com, provide a user-friendly admin panel where you can manage the website content and settings. To insert a GTM tag, you need to access this panel.

### Steps to Access the Admin Panel:

1. **Log in to your CMS account**: Visit your CMS provider’s URL (for example, `yourwebsite.com/admin` or `yourwebsite.com/login`) and enter your login credentials.
   
   ![Locally Dashboard Instructions](https://support.locally.com/en/support/solutions/articles/14000098959-managing-your-locally-com-account)

2. **Navigate to the “Settings” or “Site Configuration” Section**: Once logged in, look for the **Settings**, **Site Configuration**, or **Custom Code** section within the dashboard. This is usually found under the main navigation panel.


## 2. Inserting the GTM Code

After accessing the appropriate section, you can now add the GTM code to your CMS site.

### Steps to Insert GTM Code:

1. **Locate the Header and Body Script Fields**:
   - Many CMS platforms provide specific areas to insert header and body scripts (these fields may be labeled as "Custom Scripts" or "Tracking Codes"). If you're using Locally.com, look for the **Custom HTML** or **Embed Code** section.

2. **Copy Your GTM Code**:
   - Log in to [Google Tag Manager](https://tagmanager.google.com/) and copy the GTM code provided. It should consist of two parts:
     - A `<script>` code to be placed in the **header**.
     - A `<noscript>` code to be placed in the **body** section.

     Example of the code provided:
   
     ```html
     <!-- Google Tag Manager -->
     <script>
     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-XXXXXX');
     </script>
     <!-- End Google Tag Manager -->
     ```

3. **Paste the GTM Code into Your CMS**:
   - **Header Script**: Paste the first part of the GTM code (the `<script>` tag) into the **Header Scripts** field.
   - **Body Script**: Paste the second part of the GTM code (the `<noscript>` tag) into the **Body Scripts** field.

   ![Insert GTM in CMS](https://www.wpbeginner.com/wp-content/uploads/2020/05/insertgtm.png)

4. **Save the Changes**: After inserting both parts of the code, save your settings.

---

## 3. Verifying the GTM Tag

Once the GTM code is inserted, it’s important to ensure that it’s working properly.

### Steps to Verify the GTM Code:

1. **Use Google Tag Manager’s Preview Mode**:
   - Return to your [GTM account](https://tagmanager.google.com/), and click the **Preview** button in the top right corner.
   - Enter the URL of your site to test the implementation.

2. **Use the Google Tag Assistant**:
   - Install the [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-by-google/keelfcnbbclobkapmhcpoejnmlhpjkmc) Chrome extension, enable it, and visit your website. The extension will indicate whether the GTM tag is firing correctly.


## Additional Resources

- [Locally.com Landing Page/CMS Documentation](https://support.locally.com/en/support/solutions/articles/14000098934-locally-landing-pages-dynamic-header-and-footer-design)
- [Google Tag Manager Help](https://support.google.com/tagmanager/?hl=en)
- [How to Test Your GTM Implementation](test.md)

