module.exports = AddLabelDirective;

AddLabelDirective.$inject = [];

function AddLabelDirective() {
    return {
        restrict: 'E',
        scope: {},
        controller: AddLabelController,
        template: require('./add-label.html')
    };
}
AddLabelController.$inject = [];

function AddLabelController() {
    activate();

    function activate() {
    }
}
