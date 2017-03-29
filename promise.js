var ref = function (value) {
    if (value && typeof value.then === "function")
        return value;
    return {
        then: function (callback) {
            return ref(callback(value));
        }
    };
};

function Defer() {
    var successHandler = [], errorHandler = [], value;
    var status = 'pending';
    return {
        resolve: function (result) {
            if (status == 'pending') {
                value = ref(result);
                status = 'resolved';
                successHandler.forEach(function (f) {
                    setTimeout(function () { value.then(f) }, 0);
                });
            }

        },
        reject: function () {
            //similar to resolve    
        },
        promise: {
            then: function (_success, _error) {
                var defer = Defer();
                var success = function (value) {
                    defer.resolve(_success(value));
                }
                var error = function (value) {
                    defer.reject(_error(value));
                }
                if (status == 'pending') {
                    successHandler.push(success);
                    if (error)
                        errorHandler.push(error);
                } else {
                    value.then(success, error);
                }
                return defer.promise;
            }
        }

    }
}

