<?php
    $updateavailable = 1;

    if ($updateavailable == 1) {
    ?>
    <div class="block">
        <div class="box squircle">
            <p class="center-text blue-text padding-vertical block text-24px">New Software Update Available! Contact the Software Developer!</p>
        </div>
    </div>

    <span class="span-30px"></span>
    <?php ;
    }
    else {
        if ($_SESSION['justopened'] == 1) {
            require "res/inner/newsession.php";
            $_SESSION['justopened'] = 0;
        }
        else {
            echo "";
        }
    }
?>

