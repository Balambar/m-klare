// the controller for the modal itself
// (separate from underlying view/directive)
app.controller('mySellerModalInstance', ['$scope', '$uibModalInstance', 'seller', 'Contact', function($scope, $uibModalInstance, seller, Contact) {
  console.log("selected seller", seller);
  $scope.seller = seller;
  /*$scope.ok = function() {
    // user approves om seleted option
    // so send the selected option back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.close($scope.selectedOption);
  };*/

  $scope.sendContactSeller = function(){
    if ($scope.contactNameSeller == undefined || $scope.contactEmailSeller == undefined || $scope.contactMessageSeller == undefined) {
      alert("Du måste fylla i alla obligatoriska rutor!");
    }
    else
      Contact.create({
        name: $scope.contactNameSeller,
        email: $scope.contactEmailSeller,
        phone: $scope.contactPhoneSeller,
        message: $scope.contactMessageSeller,
        type: "Mail to: " + seller.email 
      }, function(){
        alert("Tack för din meddelande!");
        $scope.contactNameSeller = undefined;
        $scope.contactEmailSeller = undefined;
        $scope.contactPhoneSeller = undefined;
        $scope.contactMessageSeller = undefined;
      });
  };

  $scope.cancel = function() {
    // user does not approve/ignored us
    // so send nothing back to the myModal directive
    // (modalInstance.result.then(...))
    $uibModalInstance.dismiss();
  };
}]);