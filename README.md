# 🛠️ Google Tag Manager (GTM) Integration Instructions



<p align="center">
  <i>This repository was last updated on:</i> <br>
  <img src="https://img.shields.io/github/last-commit/EleibelIU/GTM-Instructions.svg">
</p>


Welcome to the **Google Tag Manager (GTM) Integration Instructions Repository**! This repository contains comprehensive guides for adding GTM tags to a variety of websites, including generic static sites, CMS platforms like Locally.com, and WordPress-powered sites.

Each guide is tailored to the specific platform to ensure easy integration and proper implementation. Follow the instructions that best suit your site's platform.

Open a GitHub issue or shoot a message to **liz@leibel.tech** with any questions. 

---

## 📂 Integration Options

### 1. **Generic Static Site**
For static sites that do not use any content management system, you’ll need to manually insert the GTM code into your HTML files. This method provides the highest level of control but requires basic HTML editing knowledge.

🔗 [View instructions for adding GTM to a Generic Site](Generic.md)

### 2. **CMS Platform (e.g., Locally.com)**
If your website uses a content management system (CMS) like Locally.com, adding GTM usually involves using built-in tools or admin sections. This option is for users who may not have direct access to the underlying code.

🔗 [View instructions for adding GTM to a CMS like Locally.com](CMS.md)

### 3. **WordPress Site**
For WordPress users, adding GTM can be done in two ways: manually by editing theme files or automatically using one of several available plugins. WordPress offers flexibility in how GTM is integrated, making it a popular choice for marketers and developers alike.

🔗 [View instructions for adding GTM to a WordPress Site](Wp.md)

---

## ✅ How to Test Your GTM Integration

Once you've added GTM to your site, it's important to verify that the tag is firing correctly. Testing can be done using Google's Preview mode or the Google Tag Assistant Chrome extension. 

🔗 [Learn how to test your GTM implementation](test.md)

---

## What’s the Difference Between These Options?

- **Generic Static Site**: This method involves manual code insertion into your site’s HTML files, providing full control but requiring basic coding knowledge.
- **CMS (Locally.com)**: Many CMS platforms restrict direct code access. Instead, GTM is added using platform-specific tools.
- **WordPress**: WordPress allows flexibility with both manual and plugin-based approaches to GTM integration.

---

## 🔍 How to Determine Your Site Type

Before proceeding, it’s essential to know what kind of site you're working with. Here’s how you can determine whether your site is a generic static site, a CMS, or WordPress.

### 1. **Generic Static Site**
A generic static site typically consists of HTML, CSS, and JavaScript files without dynamic content from a database or CMS. If your site doesn’t have a login panel or admin area, it’s likely a static site.
- **Characteristics**: Purely HTML files, no database, minimal interactivity.
- **Tools to Verify**: 
  - You can inspect the site’s source code by right-clicking on the page and selecting **View Page Source**. Look for simple HTML tags and no references to platforms or CMS.
  - Tools like [BuiltWith](https://builtwith.com/) or [Wappalyzer](https://www.wappalyzer.com/) can also confirm if no CMS is detected.

### 2. **CMS Platform (e.g., Locally.com)**
A CMS-based website allows you to create and manage content without direct access to the site’s code. If your website has a backend login interface (e.g., `/admin` or `/dashboard` URL), it's likely powered by a CMS.
- **Characteristics**: Backend access via a URL like `/admin`, `/dashboard`, or `/login`. Dynamic content managed through an interface.
- **Tools to Verify**:
  - Use tools like [BuiltWith](https://builtwith.com/) or [WhatCMS](https://whatcms.org/) to detect the CMS your site is using.

### 3. **WordPress Site**
WordPress-powered sites are identifiable through their URL structure (e.g., `/wp-admin` for backend access) and file paths (e.g., `/wp-content` for media uploads).
- **Characteristics**: `/wp-admin` for login, `/wp-content` for assets, and typical WordPress plugins or themes.
- **Tools to Verify**: 
  - Use [BuiltWith](https://builtwith.com/) or [IsItWP](https://www.isitwp.com/) to detect if a site is using WordPress.

