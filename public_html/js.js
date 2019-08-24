/* 
 *Anmol Nagpal (Sheridan College)
 */

$(function() {
    var $td = $("td");
    var $reset = $("a");
    var $gameOver = false;
    
    //set colors
    var $color = "lightcoral";
    var $c1 = "rgb(240, 128, 128)";  //lightcoral
    var $c2 = "rgb(173, 216, 230)";  //lightblue
    
    //each cell
    var $one = $("#one");
    var $two = $("#two");
    var $three = $("#three");
    var $four = $("#four");
    var $five = $("#five");
    var $six = $("#six");
    var $seven = $("#seven");
    var $eight = $("#eight");
    var $nine = $("#nine");
    
    //main game loop
    $td.on("click", function(){
        //put color if available
        if($(this).css("background-color") === "rgba(0, 0, 0, 0)" && 
                $gameOver === false) {
             $(this).css("background-color", $color);
             //$(this).css("transition", "background-color 0.5s");
             //change colors
             if($color === "lightcoral"){
                $color = "lightblue";
             }else{
                $color = "lightcoral";
            }
        }
        //end game check - lightcoral
        //top row
        if($one.css("background-color") === $c1 &&
                     $two.css("background-color") === $c1 &&
                     $three.css("background-color") === $c1){
                $gameOver = true;
                $one.css("background-color", "red");
                $two.css("background-color", "red");
                $three.css("background-color", "red");
             }
        //middle row
        if($four.css("background-color") === $c1 &&
                     $five.css("background-color") === $c1 &&
                     $six.css("background-color") === $c1){
                $gameOver = true;
                $four.css("background-color", "red");
                $five.css("background-color", "red");
                $six.css("background-color", "red");
             }
        //bottom row
        if($seven.css("background-color") === $c1 &&
                     $eight.css("background-color") === $c1 &&
                     $nine.css("background-color") === $c1){
                $gameOver = true;
                $seven.css("background-color", "red");
                $eight.css("background-color", "red");
                $nine.css("background-color", "red");
             }
        //first column
        if($one.css("background-color") === $c1 &&
                     $four.css("background-color") === $c1 &&
                     $seven.css("background-color") === $c1){
                $gameOver = true;
                $one.css("background-color", "red");
                $four.css("background-color", "red");
                $seven.css("background-color", "red");
             }
        //second column
        if($two.css("background-color") === $c1 &&
                     $five.css("background-color") === $c1 &&
                     $eight.css("background-color") === $c1){
                $gameOver = true;
                $two.css("background-color", "red");
                $five.css("background-color", "red");
                $eight.css("background-color", "red");
             }
        //third column
        if($three.css("background-color") === $c1 &&
                     $six.css("background-color") === $c1 &&
                     $nine.css("background-color") === $c1){
                $gameOver = true;
                $three.css("background-color", "red");
                $six.css("background-color", "red");
                $nine.css("background-color", "red");
             }
        //cross 1
        if($one.css("background-color") === $c1 &&
                     $five.css("background-color") === $c1 &&
                     $nine.css("background-color") === $c1){
                $gameOver = true;
                $one.css("background-color", "red");
                $five.css("background-color", "red");
                $nine.css("background-color", "red");
             }
        //cross 2
        if($seven.css("background-color") === $c1 &&
                     $five.css("background-color") === $c1 &&
                     $three.css("background-color") === $c1){
                $gameOver = true;
                $seven.css("background-color", "red");
                $five.css("background-color", "red");
                $three.css("background-color", "red");
             }
        
        
        // ------------------------------------------------------------------//
        // ------------------------------------------------------------------
        // ------------------------------------------------------------------
 
 
        //end game check - lightblue
        //top row
        if($one.css("background-color") === $c2 &&
                     $two.css("background-color") === $c2 &&
                     $three.css("background-color") === $c2){
                $gameOver = true;
                $one.css("background-color", "blue");
                $two.css("background-color", "blue");
                $three.css("background-color", "blue");
             }
        //middle row
        if($four.css("background-color") === $c2 &&
                     $five.css("background-color") === $c2 &&
                     $six.css("background-color") === $c2){
                $gameOver = true;
                $four.css("background-color", "blue");
                $five.css("background-color", "blue");
                $six.css("background-color", "blue");
             }
        //bottom row
        if($seven.css("background-color") === $c2 &&
                     $eight.css("background-color") === $c2 &&
                     $nine.css("background-color") === $c2){
                $gameOver = true;
                $seven.css("background-color", "blue");
                $eight.css("background-color", "blue");
                $nine.css("background-color", "blue");
             }
        //first column
        if($one.css("background-color") === $c2 &&
                     $four.css("background-color") === $c2 &&
                     $seven.css("background-color") === $c2){
                $gameOver = true;
                $one.css("background-color", "blue");
                $four.css("background-color", "blue");
                $seven.css("background-color", "blue");
             }
        //second column
        if($two.css("background-color") === $c2 &&
                     $five.css("background-color") === $c2 &&
                     $eight.css("background-color") === $c2){
                $gameOver = true;
                $two.css("background-color", "blue");
                $five.css("background-color", "blue");
                $eight.css("background-color", "blue");
             }
        //third column
        if($three.css("background-color") === $c2 &&
                     $six.css("background-color") === $c2 &&
                     $nine.css("background-color") === $c2){
                $gameOver = true;
                $three.css("background-color", "blue");
                $six.css("background-color", "blue");
                $nine.css("background-color", "blue");
             }
        //cross 1
        if($one.css("background-color") === $c2 &&
                     $five.css("background-color") === $c2 &&
                     $nine.css("background-color") === $c2){
                $gameOver = true;
                $one.css("background-color", "blue");
                $five.css("background-color", "blue");
                $nine.css("background-color", "blue");
             }
        //cross 2
        if($seven.css("background-color") === $c2 &&
                     $five.css("background-color") === $c2 &&
                     $three.css("background-color") === $c2){
                $gameOver = true;
                $seven.css("background-color", "blue");
                $five.css("background-color", "blue");
                $three.css("background-color", "blue");
             }

        
    });
    
    $reset.on("click", function(){
        $td.css("background-color", "transparent");
        $gameOver = false;
    });
    
    
})

