const std = @import("std");

var rand = std.rand.DefaultPrng.init(0);

pub fn modifier(score: i8) i8 {
    return @divFloor(score - 10, 2);
}

pub fn ability() i8 {
    var total: i8 = 0;
    var min: i8 = 6;
    for (0..4) |_| {
        const r = rand.random().intRangeAtMost(i8, 1, 6);
        total += r;
        if (r < min) {
            min = r;
        }
    }
    return total - min;
}

pub const Character = struct {
    strength: i8,
    dexterity: i8,
    constitution: i8,
    intelligence: i8,
    wisdom: i8,
    charisma: i8,
    hitpoints: i8,

    pub fn init() Character {
        const constitution = ability();
        return Character{ .strength = ability(), .dexterity = ability(), .constitution = constitution, .intelligence = ability(), .wisdom = ability(), .charisma = ability(), .hitpoints = 10 + modifier(constitution) };
    }
};
