var _ = require('lodash-node');
var { Promise } = require('when');
var debug = require('debug')('g:flux:GetStores');

var Flux;
var storePromises = {};

var GetStores = function(storeNames, params) {
  var promises = {};

  [].concat(storeNames).forEach(function(name) {
    var hash = name + _.map(params, (h,k) => ""+h+k);
    var store = Flux.store(name);

    promises[name] = promiseForStore(hash, store);
    Flux.actions[name + 'Load'](params);
  });

  return promises;
};

function promiseForStore(hash, store) {
  storePromises[hash] = storePromises[hash] || new Promise((res, rej) => {
    store.on('change', () => {
      (!store.loading && _.size(store.data)) && res(_.values(store.data));
    });
  });
  return storePromises[hash];
}

module.exports = {
  GetStores,
  init(flux) { Flux = flux; }
};