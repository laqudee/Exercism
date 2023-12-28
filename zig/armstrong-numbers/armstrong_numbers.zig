const math = @import("std").math;

pub fn isArmstrongNumber(num: u128) bool {
    var original_num: u128 = num;
    var n: u32 = 0;
    var result: u128 = 0;

    while (original_num != 0) : (original_num /= 10) {
        n += 1;
    }

    original_num = num;
    while (original_num != 0) : (original_num /= 10) {
        const remainder: u128 = original_num % 10;
        result += math.pow(u128, remainder, n);
    }

    return result == num;
}
