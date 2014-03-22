CKEditor plugin
===============

The CKEditor plugin adds [CKEditor](http://ckeditor.com/) as a WYSIWYG filter to Wolf CMS.

This is a customized CKEditor installation. It is designed to be used by people with little to no experience with HTML.

It includes the following plugins:

 * The [Enhanced Image](http://ckeditor.com/addon/image2) plugin (adds support for `<figure>` and `<figcaption>` elements)

Installation instructions
-------------------------

1. Upload the plugin folder to **/wolf/plugins**. Make sure its name is **ckeditor**.
2. In the backend of Wolf CMS, go to **Administration** and enable the CKEditor plugin by checking the checkbox.
3. If you wish, you can now select CKEditor as your standard filter: Go to the **Administration** tab, select **Settings**, and select 'Ckeditor' from the 'Default filter' dropdown. (don't forget to hit Save)

CKEditor is now ready to be used! Simply open a page (or create a new one) and select the CKEditor filter. If you have configured CKEditor to be the default filter, new pages will already have CKEditor selected as filter.
