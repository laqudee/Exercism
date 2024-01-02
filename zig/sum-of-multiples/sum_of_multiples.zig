const std = @import("std");
const mem = std.mem;

pub fn sum(allocator: mem.Allocator, factors: []const u32, limit: u32) !u64 {
    var sum_factors: u64 = 0;

    var hash = std.AutoHashMap(u32, void).init(allocator);
    defer hash.deinit();

    for (factors) |factor| {
        if (factor == 0)
            continue;
        var m: u32 = 1;
        while (factor * m < limit) : (m += 1)
            try hash.put(factor * m, {});
    }

    var hash_iter = hash.keyIterator();
    while (hash_iter.next()) |k_ptr|
        sum_factors += k_ptr.*;

    return sum_factors;
}
