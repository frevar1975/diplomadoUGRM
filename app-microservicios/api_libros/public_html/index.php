<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header("Content-Type: application/json");

error_reporting(E_ALL); // Error/Exception engine, always use E_ALL
ini_set('ignore_repeated_errors', TRUE); // always use TRUE
ini_set('display_errors', FALSE); // Error/Exception display, use FALSE only in production environment or real server. Use TRUE in development environment
ini_set('log_errors', TRUE); // Error/Exception file logging engine.
error_log( "Hello, errors!" );

require_once 'lib/config.php';

require_once 'lib/database.php';
require_once 'lib/controller.php';
require_once 'lib/view.php';
require_once 'lib/model.php';
require_once 'lib/app.php';

$app = new App();

?>