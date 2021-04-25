<?php
$start = 801;
$end   = 900;
$LinkFol = 'onepiece_tap801-900/';
$LinkFile = 'onepiece_tap_';
$page = '103083858598351';
$token = 'EAApj1qd5BwYBAD5OwriFlRZAH8k2xWq8grVLBe1LODzgntnUSO5yWeyILpIwMEgwbWlPY5bfgPBNZBZBsHrwAAbJZCJWaZBlgonnmh37bRgZBjGZAQmxJkdZCUf3ZAoprekzJk0OnV7e855FcfMZAyAKJ5ZB0ZBMqk2W5mrJNZCzeuLsAHeYtERyM6NyTtYsUreoitrYZD';

for ($x = $start; $x <= $end; $x++) {
    echo "THe upload name: $x <br>";
    $curl = ' curl  \ '.
            ' -X POST  \ '.
            ' "https://graph-video.facebook.com/v10.0/'.$page.'/videos"  \ '.
            ' -F  "access_token='.$token.'"  \ '.
            ' -F  "description=onepiece_tap_'.$x.'.mp4" '.
            ' -F  "source=@/home/letan/Music/'.$LinkFol.$LinkFile.$x.'.mp4" ';
        
    exec($curl,$result);
}
?>
