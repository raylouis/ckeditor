/**
 * Custom config file for CKEditor
 */

CKEDITOR.editorConfig = function (config) {
    config.toolbarGroups = [
        { name: 'styles' },
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph',   groups: [ 'list', 'blocks', 'align', 'bidi' ] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker'] },
        { name: 'tools' },
        { name: 'document',    groups: [ 'mode' ] },
    ];

    // Remove some buttons, provided by the standard plugins, which we don't
    // need to have in the toolbar.
    config.removeButtons = 'Styles';

    // Enable enhanced image plugin.
    config.removePlugins = 'image';
    config.extraPlugins = 'image2';

    // Change default height of the editor to 380px
    config.height = '380px';

    // Use the Advanced Content Filter (ACF) to control HTML output
    // Only valid HTML5 should be allowed
    config.allowedContent =
        'h2 h3 p;' +
        'ol ul li blockquote;' +
        'figure(float-left,float-right);' +
        'figcaption;' +
        'table caption thead tbody tfooter tr th td;' +
        'a[!href];' +
        'img(float-left,float-right)[!src,alt,width,height];' +
        'strong em u s sub sup;' +
        'ol ul li;' +
        'hr;'
        ;
}
