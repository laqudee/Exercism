const std = @import("std");
pub fn response(s: []const u8) []const u8 {
    const message = std.mem.trim(u8, s, &std.ascii.whitespace);
    if (message.len == 0) return Answers.fine;
    if (isallcaps(message) and std.mem.endsWith(u8, message, "?")) return Answers.calm;
    if (isallcaps(message)) return Answers.whoa;
    if (std.mem.endsWith(u8, message, "?")) return Answers.sure;
    return Answers.whatever;
}

const Answers = struct {
    const fine: []const u8 = "Fine. Be that way!";
    const calm: []const u8 = "Calm down, I know what I'm doing!";
    const whoa: []const u8 = "Whoa, chill out!";
    const sure: []const u8 = "Sure.";
    const whatever: []const u8 = "Whatever.";
};

fn isallcaps(str: []const u8) bool {
    var e_upper: bool = false;
    for (str) |letra| {
        if (std.ascii.isLower(letra)) return false;
        if (std.ascii.isUpper(letra)) e_upper = true;
    }
    return e_upper;
}
