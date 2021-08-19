
<?php

class User {

    private static $email = "info@larrymayers.site";
    private static $pwd = "M@y3rZ.@thl3n3!9a";
    private static $host = "mail.privateemail.com";

    public static function getPwd(){ return self::$pwd; }
    public static function getEmail(){ return self::$email; }
    public static function getHost(){ return self::$host; }

}