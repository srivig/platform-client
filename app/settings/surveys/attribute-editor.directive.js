module.exports = [
    '$rootScope',
    'ModalService',
function (
    $rootScope,
    ModalService
) {
    return {
        restrict: 'E',
        template: require('./attribute-editor.html'),
        link: function ($scope, $element, $attrs) {
            $scope.displayFieldDescription = true;
            $scope.closeModal = function () {
                ModalService.close();
            };

            $scope.onlyOptional = function () {
                return $scope.editAttribute.type !== 'title' && $scope.editAttribute.type !== 'description';
            };

            $scope.canDisplay = function () {
                return $scope.editAttribute.input !== 'upload' && $scope.editAttribute.type !== 'title' && $scope.editAttribute.type !== 'description' && $scope.editAttribute.type !== 'labels';
            };
        }
    };
}];
