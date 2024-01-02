const std = @import("std");
const mem = std.mem;

pub fn toRna(allocator: mem.Allocator, dna: []const u8) mem.Allocator.Error![]const u8 {
    var array = std.ArrayList(u8).init(allocator);
    defer array.deinit();
    for (dna) |c| {
        switch (c) {
            'G' => try array.append('C'),
            'C' => try array.append('G'),
            'T' => try array.append('A'),
            'A' => try array.append('U'),
            else => {},
        }
    }
    return array.toOwnedSlice();
}
