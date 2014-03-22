<?php
if (!defined('IN_CMS')) { exit(); }

/**
 * CKEditor plugin
 *
 * This plugin adds CKEditor as a filter in Wolf CMS.
 *
 * @package     Plugins
 * @subpackage  ckeditor
 *
 * @author      Nic Wortel <nic.wortel@nth-root.nl>
 * @copyright   Nic Wortel, 2013
 * @version     0.1.0
 */

Plugin::setInfos(array(
    'id'                    => 'ckeditor',
    'title'                 => __('CKEditor'),
    'description'           => __('This plugin adds the CKEditor as a WYSIWYG filter in Wolf CMS.'),
    'type'                  => 'backend',
    'author'                => 'Nic Wortel',
    'version'               => '0.1.0',
    'website'               => 'http://www.nth-root.nl/',
    'require_wolf_version'  => '0.7.4'
));

Filter::add('ckeditor', 'ckeditor/filter/Ckeditor.php');

// include ckeditor javascripts
Plugin::addJavascript('ckeditor', 'scripts/ckeditor/ckeditor.js');
Plugin::addJavascript('ckeditor', 'scripts/init.js');