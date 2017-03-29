module.exports = PostLabelsDirective;

PostLabelsDirective.$inject = [];

function PostLabelsDirective() {
    return {
        restrict: 'E',
        scope: {
            categories: '=',
            postTags: '='
        },
        controller: PostLabelsController,
        template: require('./post-labels.html')
    };
}
PostLabelsController.$inject = ['$scope'];

function PostLabelsController($scope) {

    activate();

    function activate() {
    }
}
