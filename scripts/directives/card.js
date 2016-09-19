angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);


function wdiCard(){
  var directive = {
    restrict: 'E',
    templateUrl:  'templates/card.html',
    replace: true,
    scope: {
        question: '@'
    }
  };
  return directive;
}
