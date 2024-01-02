const std = @import("std");

pub fn square(index: usize) ChessboardError!u64 {
    if (index == 0 or index > 64) {
        return ChessboardError.IndexOutOfBounds;
    }
    return std.math.pow(u64, 2, index - 1);
}

pub fn total() u64 {
    var total_grains: u64 = 0;
    for (1..65) |i| {
        total_grains += square(i) catch 0;
    }
    return total_grains;
}

pub const ChessboardError = error{
    IndexOutOfBounds,
};
