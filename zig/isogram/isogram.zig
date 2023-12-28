pub fn isIsogram(str: []const u8) bool {
    var letter_array = [_]u8{0} ** 26;
    for (str) |ch| {
        const ch_h = ch | 32;
        if (ch_h >= 'a' and ch <= 'z') {
            const array_index: u8 = ch_h - 'a';
            if (letter_array[array_index] > 0) {
                return false;
            }
            letter_array[array_index] += 1;
        }
    }
    return true;
}
