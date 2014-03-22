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

class Ckeditor
{
	/**
	 * Applies filter to content
	 *
	 * Since CKEditor is a WYSIWYG editor, HTML is already applied.
	 * Input can be returned directly without additional filtering.
	 * 
	 * @param  string 	$text 	Input text
	 * @return string       	Output (filtered)
	 */
	function apply($text)
	{
		return $text;
	}
}