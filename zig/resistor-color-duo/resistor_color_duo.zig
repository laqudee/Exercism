pub fn colorCode(colors: [2]ColorBand) usize {
    const first = @intFromEnum(colors[0]);
    const second = @intFromEnum(colors[1]);
    return first * 10 + second;
}

pub const ColorBand = enum(usize) {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white,
};
