const std = @import("std");

pub fn isPangram(str: []const u8) bool {
    if (str.len == 0) {
        return false;
    }
    var present: [26]u8 = undefined;
    for (str) |letter| {
        const lowercase = letter | 32;
        if (lowercase >= 'a' and lowercase <= 'z') {
            // std.debug.print(" {}-{} ", .{ letter, lowercase - 'a' });
            present[lowercase - 'a'] = 1;
        }
    }
    // std.debug.print(" {} \n", .{present.len});
    for (present) |value| {
        if (value != 1) return false;
    }

    return true;
}

pub fn main() void {
    const result = isPangram("a quick movement of the enemy will jeopardize five gunboats");
    std.debug.print("result: {}", .{result});
}
