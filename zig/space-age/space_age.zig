pub const Planet = enum {
    earth,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    uranus,
    neptune,

    pub fn age(self: Planet, seconds: usize) f64 {
        const earthSecondsPerYear: f64 = 365.25 * 24 * 60 * 60;
        const orbitalPeriod: f64 = switch (self) {
            Planet.earth => 1.0,
            Planet.mercury => 0.2408467,
            Planet.venus => 0.61519726,
            Planet.mars => 1.8808158,
            Planet.jupiter => 11.862615,
            Planet.saturn => 29.447498,
            Planet.uranus => 84.016846,
            Planet.neptune => 164.79132,
        };
        const sec: f64 = @floatFromInt(seconds);
        return sec / earthSecondsPerYear / orbitalPeriod;
    }
};
