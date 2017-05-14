(function() {
'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.foodList = "";  // comma-separated list entered by the user
    $scope.responseToFoodList = "";  // quantity judgment 

    $scope.messageClass = "form-group message";  // conditional formatting class for the messate
    $scope.menuClass="form-control"; // conditional formatting class for the input box

    // Function called when the 'Check if Too Much' button is clicked.
    $scope.checkFoodList = function() {
        var numberOfItems = countItemsInStringList($scope.foodList);
        var msg = "";
        var messageClasses = "form-group";
        var menuClasses = "form-control";

        switch (classifyFoodList(numberOfItems)) {
            case -1:  // empty menu
                msg = "Please enter data first.";
                messageClasses += " message";
                menuClasses = "form-control";
                break;
            case 0:  // 'Acceptable amount' of food.
                msg = "Enjoy!";
                messageClasses += " message-enjoy"
                menuClasses += " menu-enjoy";
                break;
            case 1:  // 'Too much' food.
                msg = "Too much!";
                messageClasses += " message-too-much"
                menuClasses += " menu-too-much";
                break;
        }
        $scope.responseToFoodList = msg;
        $scope.messageClass = messageClasses;
        $scope.menuClass=menuClasses;
    } 
}

// Returns 1 if there are too many food items (more than 3) in the menu
//         0 if there are a reasonable number (1 to 3) in the menu
//         -1 if there are no items in the menu.
function classifyFoodList(numberOfItems) {
    var foodClass;
    if (numberOfItems == 0) {
        foodClass = -1; // too little/error
    } else if (numberOfItems <= 3) {
        foodClass = 0;  // good
    } else {
        foodClass = 1;  // too much
    }
    return foodClass;
}

// Filter predicate to test for empty items (which are excluded)
function isValidFoodItem(item) {
    return item.trim().length > 0;
}
 
// Count of non-empty items in the menu; duplicates are permitted.
function countItemsInStringList(stringList) {
    var items = stringList.split(',')
    var cleanedItems = items.filter(isValidFoodItem);
    return cleanedItems.length;
}

})();