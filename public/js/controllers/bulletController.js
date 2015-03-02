app.controller('bulletController', function ($scope) {

    $scope.bullets = {
        data: []
    }

    var counter = 0;

    var dataObj = function (num){
        this.arrayIndex = num;
        this.text = "";
        this.data = [];
        this.parent = null;
        this.child = null;
    }

    // If there is nothing in the bullets array, make a new bullet
    $scope.pageLoad = function(){
        if ($scope.bullets.data.length === 0) $scope.bullets.data.push(new dataObj(counter));
    }


    // When you hit the return key, make a new bullet by pushing a new bullet object onto the bullets array
    $scope.createBullet = function (keyEvent) {
        if (keyEvent.which === 13) {
            var newBullet = new dataObj($scope.bullets.data.length);
            $scope.bullets.data.push(newBullet);
        }
    }

    $scope.cursorTraversor = function (keyEvent) {
        // Up arrow
        if (keyEvent.keyCode == 38) console.log("giddyup");
        // Down arrow
        if (keyEvent.keyCode == 40) console.log("simmerdown");
    }
})