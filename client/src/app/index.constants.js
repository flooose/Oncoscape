/* global d3:false, $:false, signals:false, cytoscape:false, document:false, moment:false, _:false, hello:false, localStorage:false, Handsontable:false */

(function() {
    'use strict';

    angular
        .module('oncoscape')
        .constant('moment', moment)
        .constant('d3', d3)
        .constant('cytoscape', cytoscape)
        .constant('signals', signals)
        .constant('$', $)
        .constant('auth', hello)
        .constant('Handsontable', Handsontable)
        .constant('localStorage', localStorage)
        .constant('_', _);

})();
