angular.module('myApp.store', ['ionic'])
    .factory('store', ['$window',
        function($window) {
            function Store(storeName) {
                var indexerFn;
                if (!JSON) {
                    throw "JSON unavailable! Include http://www.json.org/json2.js to fix.";
                }
                this.db = $window.localStorage;
                this.storeName = storeName;
                indexerFn = function (sn, ls) {
                    return {
                        key: sn + '._map_',
                        localStore: ls,
                        initialise: function () {
                            var map = this.localStore.getItem(this.key);
                            if (map) {
                                map = JSON.parse(map);
                            }
                            if (map === null) {
                                console.log('Creating new store for ' + this.key);
                                this.localStore.setItem(this.key, JSON.stringify([]));
                            } else {
                                console.log('Store for ' + this.key + ' exists, the app will use this store.');
                            }
                        },
                        all: function () {
                            return JSON.parse(this.localStore.getItem(this.key));
                        },
                        add: function (k) {
                            var map = this.all();
                            map.push(k);
                            this.localStore.setItem(this.key, JSON.stringify(map));
                        },
                        del: function (k) {
                            var i, len, map, newMap;
                            map = this.all();
                            newMap = [];
                            for (i = 0, len = map.length; i < len; i += 1) {
                                map[i] !== k && newMap.push(map[i]);
                            }
                            this.localStore.setItem(this.key, JSON.stringify(newMap));
                        },
                        find: function (k) {
                            var i, len, map;
                            map = this.all();
                            for (i = 0, len = map.length; i < len; i += 1) {
                                if (k === map[i]) {
                                    return i;
                                }
                            }
                            return false;
                        }
                    };
                };
                this.indexer = indexerFn(this.storeName, this.db);
                this.indexer.initialise();
            }
            Store.prototype.uuid = function () {
                var c, magicNumber, hex;
                hex = 16;
                magicNumber = 65536;
                c = function () {
                    return ((1 + Math.random()) * magicNumber || 0).toString(hex).substring(1);
                };
                return c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c() + c() + c();
            };
            Store.prototype.keys = function () {
                var i, len, storeName, map, keys;
                storeName = this.storeName;
                map = this.indexer.all();
                keys = [];
                for (i = 0, len = map.length; i < len; i += 1) {
                    keys.push(map[i].replace(storeName + '.', ''));
                }
                return keys;
            };
            Store.prototype.save = function (key, data) {
                var itemKey, itemData, itemStore;
                if (typeof key === 'undefined') {
                    itemKey = this.uuid();
                } else {
                    itemKey = key;
                }
                if (typeof data === 'undefined') {
                    console.log('No data was passed for storage, storing blank object!!!!');
                    itemData = {};
                } else {
                    itemData = data;
                }
                itemStore = this.storeName + '.' + itemKey;
                this.indexer.find(itemStore) === false && this.indexer.add(itemStore);
                this.db.setItem(itemStore, JSON.stringify(itemData));
            };
            Store.prototype.get = function (key) {
                var storageKey = key;
                if (key.indexOf(this.storeName + '.') === -1) {
                    storageKey = this.storeName + '.' + key;
                }
                if (this.indexer.find(storageKey) || this.indexer.find(storageKey) === 0) {
                    return JSON.parse(this.db.getItem(storageKey));
                }
                return false;
            };
            Store.prototype.getAll = function () {
                var map, i, len, dataList, data, key;
                map = this.indexer.all();
                dataList = [];
                for (i = 0, len = map.length; i < len; i += 1) {
                    key = map[i];
                    data = JSON.parse(this.db.getItem(key));
                    key = key.replace(this.storeName + ".", "");
                    dataList.push({
                        key: key,
                        data: data
                    });
                }
                return dataList;
            };
            Store.prototype.exists = function (key) {
                var storageKey = key;
                if (key.indexOf(this.storeName + '.') === -1) {
                    storageKey = this.storeName + '.' + key;
                }
                return this.indexer.find(storageKey) || this.indexer.find(storageKey) === 0;
            };
            Store.prototype.remove = function (key) {
                var storageKey = key;
                if (key.indexOf(this.storeName + '.') === -1) {
                    storageKey = this.storeName + '.' + key;
                }
                if (this.indexer.find(storageKey) || this.indexer.find(storageKey) === 0) {
                    this.indexer.del(storageKey);
                    this.db.removeItem(storageKey);
                    return true;
                }
                return false;
            };
            Store.prototype.flush = function () {
                var map, i, len;
                map = this.indexer.all();
                for (i = 0, len = map.length; i < len; i += 1) {
                    this.remove(map[i]);
                }
            };
            Store.prototype.quota = function () {
                var map, data, i, len;
                map = this.indexer.all();
                data = '';
                for (i = 0, len = map.length; i < len; i += 1) {
                    data += this.db.getItem(map[i]);
                }
                data += JSON.stringify(map);
                return {
                    storedDataSize: (unescape(encodeURIComponent(data)).length)
                };
            };
            return(new Store('iForce'));
        }
    ]);