/// Writes a reversed copy of `s` to `buffer`.
pub fn reverse(buffer: []u8, s: []const u8) []u8 {
    var buff = buffer;
    for (s, 0..) |c, i| {
        buff[s.len - i - 1] = c;
    }

    return buff;
}
