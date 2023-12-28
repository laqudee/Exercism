pub fn score(s: []const u8) u32 {
    var scores: u32 = 0;
    for (s) |letter| {
        scores += scoreLetter(letter);
    }
    return scores;
}

pub fn scoreLetter(letter: u8) u32 {
    const lowercase = letter | 32;
    switch (lowercase) {
        'a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' => return 1,
        'd', 'g' => return 2,
        'b', 'c', 'm', 'p' => return 3,
        'f', 'h', 'v', 'w', 'y' => return 4,
        'k' => return 5,
        'j', 'x' => return 8,
        'q', 'z' => return 10,
        else => return 0,
    }
}
