describe('numbersService', function () {

    var numbersService;

    beforeEach(function () {
        numbersService = new NumbersService();
    });

    describe('duplicate', function () {

        it('should duplicate array of numbers', function () {
            var numbers = [1, 2, 3, 4, 5];
            var duplicated = numbersService.duplicate(numbers);
            expect(duplicated).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
        });

        it('should duplicate one element array', function () {
            var numbers = [1];
            var duplicated = numbersService.duplicate(numbers);
            expect(duplicated).toEqual([1, 1]);
        });

        it('should not to destroy original array (immutable)', function () {
            var numbers = [1, 2, 3, 4, 5];
            numbersService.duplicate(numbers);
            expect(numbers).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return empty array when input array is empty', function () {
            expect(numbersService.duplicate([])).toEqual([]);
        });

        it('should return empty array when input array is empty', function () {
            expect(numbersService.duplicate([])).toEqual([]);
        });

        it('should throw an exception if input is undefined', function() {
            expect(function () {
                numbersService.duplicate(undefined);
            }).toThrowError();
        });

        it('should throw an exception if input is not array of numbers', function() {
            expect(function () {
                numbersService.duplicate([1, 2, '3']);
            }).toThrowError();
        });

    });

    describe('triplicate', function () {

        it('should triplicate array of numbers', function () {
            var numbers = [1, 2, 3, 4, 5];
            var triplicated = numbersService.triplicate(numbers);
            expect(triplicated).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
        });

        it('should triplicate one element array', function () {
            var numbers = [1];
            var triplicated = numbersService.triplicate(numbers);
            expect(triplicated).toEqual([1, 1, 1]);
        });

    });

    describe('duplicates', function () {

        it('should return array of duplicated numbers', function () {
            var numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
            var duplicates = numbersService.duplicates(numbers);
            expect(duplicates).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return only duplicated numbers', function () {
            var numbers = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5];
            var duplicates = numbersService.duplicates(numbers);
            expect(duplicates).toEqual([1, 2, 3, 4, 5]);
        });

        it('should return empty array if none of numbers were duplicated', function () {
            var numbers = [1, 2, 3, 4, 5, 6, 7];
            var duplicates = numbersService.duplicates(numbers);
            expect(duplicates).toEqual([]);
        });

    });

});
