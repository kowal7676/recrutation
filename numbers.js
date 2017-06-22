function NumbersService() {
    this.duplicate = function(numbers){
        if(typeof numbers === 'undefined'){
            throw Error();
        }
        numbers.forEach(function(elem){
           if(typeof elem !== 'number'){
               throw Error();
           }
        });
        return [].concat(numbers, numbers)
    };
    this.triplicate = function(numbers){
        return [].concat(numbers, numbers, numbers);
    };
    this.duplicates = function(numbers) {
        var map = {};

        numbers.forEach(function(elem){
            if (!map[elem]){
                map[elem] = 1;
            } else {
                map[elem]++;
            }
        });
        return Object.keys(map).filter(function(key){
            return map[key] > 1;
        }).map(function(key){
            return parseInt(key)}
        );
    };
}
