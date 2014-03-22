var CKFilter = CKFilter || {
    scriptsPath : CKEDITOR.basePath.replace('/scripts/ckeditor/','/') + 'scripts/',
    addEditor : function(element_id)
    {
        try {
            CKEDITOR.replace(element_id, {
                customConfig: CKFilter.scriptsPath + 'config/ckeditor.js'
            });
        } catch (exception) {
            if (typeof(console) !== 'undefined') {
                console.log(exception.message);
            }
        }
    },
    destroyEditor : function(element_id)
    {
        var ck = CKEDITOR.instances[element_id];
        if (ck) {
            ck.updateElement();
            ck.destroy(true);
        }
    }
}

/**
 * Hooks into Wolf's filter switch
 */
$(function()
{
    $('.filter-selector').live('wolfSwitchFilterIn', function(ev, f, el)
    {
        if (f == 'ckeditor') {
            CKFilter.addEditor(el.attr('id'));
        }
    });
    $('.filter-selector').live('wolfSwitchFilterOut', function(ev, f, el)
    {
        if (f == 'ckeditor') {
            CKFilter.destroyEditor(el.attr('id'));
        }
    });
});

/**
 * Customizes indentation (spaces instead of tabs)
 * 
 * @see     http://docs.cksource.com/CKEditor_3.x/Howto/FCKeditor_HTML_Output
 */
CKEDITOR.on('instanceReady', function(ev)
{
    // Use 4 spaces instead of tab for indentation
    var writer  = ev.editor.dataProcessor.writer;
    writer.indentationChars = '    ';
});