# Adding Google Tag Manager to WordPress: A Step-by-Step Guide

> [!NOTE]
> If you have already been provided with a configured GTM code, you may skip Step 1 in both the manual and plugin methods.

<details>
<summary><b>Manual vs Plugin Implementation: Pros and Cons</b></summary>

### Manual Implementation

Pros:
- Direct control over code placement
- No additional plugins required
- Slightly faster load times

Cons:
- Requires basic HTML/PHP knowledge
- Risk of errors if implemented incorrectly
- Changes may be overwritten by theme updates

### Using a Plugin

Pros:
- Easier for non-technical users
- Reduces risk of errors
- Often provides additional features

Cons:
- Adds another plugin to your site
- Possible conflicts with other plugins
- Limited control over exact code placement

Choose manual implementation if you're comfortable editing theme files and want complete control. Use a plugin for a simpler, more user-friendly approach.
</details>


## Option 1: Adding the GTM Tag Manually

### Step 1: Get Your GTM Code

1. **Create a GTM Account**: If you haven't already, go to [Google Tag Manager](https://tagmanager.google.com/) and create an account.
2. **Copy Your GTM Code**: After creating your account, you'll receive a unique GTM code. This code needs to be added to your website.

### Step 2: Insert the GTM Code into WordPress

1. **Access Your WordPress Admin Panel**: Log in to your WordPress site.

2. **Navigate to Appearance > Theme Editor**: This is where you can edit your site's theme files.

3. **Locate the Header File (header.php)**: On the right-hand side, you'll see a list of theme files. Click on `header.php` to open it.

4. **Paste the GTM Code**: 

   - Copy the first part of your GTM code (this should be a `<script>` tag).
   - Paste it immediately after the opening `<head>` tag in `header.php`. It should look like this:

   ```php
   <head>
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

   - Copy the second part of your GTM code (this should be a `<noscript>` tag).
   - Paste it immediately after the opening `<body>` tag in `header.php`. It should look like this:

   ```php
   <body>
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
   ```

5. **Update the File**: Once you've pasted the code, click on the "Update File" button to save your changes.

### Step 3: Testing Your GTM Implementation

1. **Preview Mode**: Go back to your GTM account and click on "Preview" to enter preview mode.
2. **Visit Your Site**: In a new browser tab, visit your WordPress site. You should see a GTM debugging panel at the bottom of your site if everything is working correctly.
3. **Use Tag Assistant**: You can use the Google Tag Assistant extension to verify that your GTM tag is firing correctly:
   - [Google Tag Assistant for Chrome](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk)
   - [Google Tag Assistant (Browser Agnostic Testing Tool)](https://tagassistant.google.com/)
   - [Firefox Debugging Documentation - Enabling Browser Toolbox to Manually Debug (Recommended for Developers Only)](https://firefox-source-docs.mozilla.org/devtools-user/browser_toolbox/index.html)

## Option 2: Adding the GTM Tag Using a Plugin

### Step 1: Choose a Plugin

There are several WordPress plugins that make it easy to add your GTM tag. Here are a few popular options:

1. [Insert Headers and Footers](https://wordpress.org/plugins/insert-headers-and-footers/): This is a simple plugin that allows you to add code to your site's header and footer.
2. [DuracellTomi's Google Tag Manager for WordPress](https://wordpress.org/plugins/duracelltomi-google-tag-manager/): This plugin is specifically designed for adding GTM tags.
3. [Header Footer Code Manager](https://wordpress.org/plugins/header-footer-code-manager/): Another versatile plugin that allows you to add code to your site's header, footer, and other areas.
4. [Site Kit by Google](https://wordpress.org/plugins/google-site-kit/): This plugin integrates multiple Google services, including GTM, with your WordPress site.

### Step 2: Install and Activate the Plugin

1. **Go to Plugins > Add New**: From your WordPress dashboard, navigate to the Plugins section and click "Add New."
2. **Search for the Plugin**: Type the name of the plugin you chose (e.g., "Insert Headers and Footers") into the search bar.
3. **Install and Activate**: Click the "Install Now" button, and then click "Activate" once the installation is complete.

### Step 3: Add Your GTM Code

#### Insert Headers and Footers

1. **Navigate to the Plugin Settings**: Go to **Settings > Insert Headers and Footers**.
2. **Paste Your GTM Code**: 
   - Copy the first part of your GTM code (the `<script>` tag) and paste it into the **Scripts in Header** section.
   - Copy the second part of your GTM code (the `<noscript>` tag) and paste it into the **Scripts in Body** section.
3. **Save Your Changes**: Click "Save" to ensure the GTM code is added to your site.

#### DuracellTomi's Google Tag Manager for WordPress

1. **Navigate to the Plugin Settings**: Go to **Settings > Google Tag Manager**.
2. **Enter Your GTM ID**: Simply enter your GTM ID (e.g., GTM-XXXXXX) in the designated field.
3. **Save Your Changes**: Click "Save" to ensure the GTM code is added to your site.

#### Header Footer Code Manager

1. **Navigate to the Plugin Settings**: Go to **HFCM > Add New Snippet**.
2. **Add Your GTM Code**:
   - Name your snippet for easy identification.
   - Choose "Header" for the location and set it to "Sitewide."
   - Paste your GTM code (the entire script) into the code box.
3. **Save**: Click "Save" to add your GTM tag.

#### Site Kit by Google

1. **Navigate to the Plugin Settings**: Go to **Site Kit > Settings**.
2. **Connect Google Tag Manager**: Follow the prompts to connect your GTM account to Site Kit.
3. **Save**: Once connected, GTM will automatically be added to your site.

### Step 4: Testing Your GTM Implementation

1. **Preview Mode**: Go to your GTM account, click "Preview," and then visit your site to see if the GTM tag is working.
2. **Use Tag Assistant**: Use the Google Tag Assistant extension (links provided above) to verify the GTM tag.
