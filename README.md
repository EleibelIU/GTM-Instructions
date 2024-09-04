# 🛠️ Google Tag Manager (GTM) Integration Instructions

<p align="center">
  <i>This repository was last updated on:</i> <br>
  <img src="https://img.shields.io/github/last-commit/EleibelIU/GTM-Instructions.svg">
</p>


Welcome to the **Google Tag Manager (GTM) Integration Instructions Repository**! This repository contains comprehensive guides for adding GTM tags to the most commonly encountered integration options. 

Each guide is tailored to the specific platform to ensure easy integration and proper implementation. Follow the instructions that best suit your site's platform.

> ⚠️ **Important Notice:** GitHub’s Camo service may render some external links inaccessible. If you encounter any issues, please download the relevant markdown files directly to access the correct links.

## Integration Options

| Site Type | Description | View Guide |
|-----------|-------------|------------|
| Generic Static Site | Basic HTML/CSS/JS websites without a CMS | [View Guide](Generic.md) |
| CMS (e.g., Locally.com) | Websites using content management systems | [View Guide](CMS.md) |
| WordPress | Websites built on WordPress platform | [View Guide](Wp.md) |


## Testing Your GTM Integration

Once you've added GTM to your site, it's important to verify that the tag is firing correctly. Testing can be done using Google's Preview mode or the Google Tag Assistant Chrome extension. 

🔗 [Learn how to test your GTM implementation](test.md)


## Determining Your Site Type

Before proceeding, it’s essential to know what kind of site you're working with. Here’s how you can determine whether your site is a generic static site, a CMS, or WordPress.

### **Generic Static Site**
A generic static site typically consists of HTML, CSS, and JavaScript files without dynamic content from a database or CMS. If your site doesn’t have a login panel or admin area, it’s likely a static site.
- **Characteristics**: Purely HTML files, no database, minimal interactivity.
- **Tools to Verify**: 
  - You can inspect the site’s source code by right-clicking on the page and selecting **View Page Source**. Look for simple HTML tags and no references to platforms or CMS.
  - Tools like [BuiltWith](https://builtwith.com/) or [Wappalyzer](https://www.wappalyzer.com/) can also confirm if no CMS is detected.

### **CMS Platform (e.g., Locally.com)**
A CMS-based website allows you to create and manage content without direct access to the site’s code. If your website has a backend login interface (e.g., `/admin` or `/dashboard` URL), it's likely powered by a CMS.
- **Characteristics**: Backend access via a URL like `/admin`, `/dashboard`, or `/login`. Dynamic content managed through an interface.
- **Tools to Verify**:
  - Use tools like [BuiltWith](https://builtwith.com/) or [WhatCMS](https://whatcms.org/) to detect the CMS your site is using.

### **WordPress Site**
WordPress-powered sites are identifiable through their URL structure (e.g., `/wp-admin` for backend access) and file paths (e.g., `/wp-content` for media uploads).
- **Characteristics**: `/wp-admin` for login, `/wp-content` for assets, and typical WordPress plugins or themes.
- **Tools to Verify**: 
  - Use [BuiltWith](https://builtwith.com/) or [IsItWP](https://www.isitwp.com/) to detect if a site is using WordPress.

## Support

Encountered an issue or have a question?

- [Open an issue](https://github.com/EleibelIU/GTM-Instructions/issues/new)
- Email: liz@leibel.tech

<p align="center">
  <small>Maintained by <a href="https://github.com/EleibelIU">Elizabeth Leibel</a></small>
</p>