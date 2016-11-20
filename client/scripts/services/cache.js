'use strict';

angular.module($snaphy.getModuleName())
//Define your services here..
    .factory('SnaphyCache', ["localStorageService", function(localStorageService) {
        //Store cache..data..
        /**
         * Store cache data.to localstorage..
         * @param key
         * @param val
         * @returns {*}
         */
        function submit(key, val) {
            return localStorageService.set(key, val);
        }

        //Clear all data..
        function clearAll() {
            return localStorageService.clearAll();
        }

        function removeItem(key) {
            return localStorageService.remove(key);
        }

        //Get item
        function getItem(key) {
            return localStorageService.get(key);
        }

        return {
            save: submit,
            clearAll: clearAll,
            removeItem: removeItem,
            getItem: getItem
        };
    }]);
