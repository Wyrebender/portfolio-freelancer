<?php
// Get content of file specified in URL parameter:
echo file_get_contents($_GET['url']);
 
// e.g. api.php?url=http%3A%2F%2Fwww.google.com 
// ('URL' must be encoded)
?>