pub const ComputationError = error{
    IllegalArgument,
};

pub fn steps(number: usize) anyerror!usize {
    if (number == 0) {
        return ComputationError.IllegalArgument;
    }
    if (number == 1) {
        return 0;
    }
    var number_use: usize = number;
    var n: usize = 0;
    var result: usize = 0;
    while (result != 1) {
        if (number_use % 2 == 0) {
            result = number_use / 2;
        } else {
            result = 3 * number_use + 1;
        }
        number_use = result;
        n += 1;
    }
    return n;
}
