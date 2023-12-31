// The code below is a stub. Just enough to satisfy the compiler.
// In order to pass the tests you can add-to or change any of this code.

pub const EARTH_YEAR_SECONDS: f64 = 365.25 * 24.0 * 60.0 * 60.0;

#[derive(Debug)]
pub struct Duration {
    pub seconds: usize,
}

impl From<u64> for Duration {
    fn from(value: u64) -> Self {
        Duration {
            seconds: value as usize,
        }
    }
}

pub trait Planet {
    fn years_during(d: &Duration) -> f64;
}

pub struct Mercury;
pub struct Venus;
pub struct Earth;
pub struct Mars;
pub struct Jupiter;
pub struct Saturn;
pub struct Uranus;
pub struct Neptune;

impl Planet for Mercury {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 0.2408467
    }
}
impl Planet for Venus {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 0.61519726
    }
}
impl Planet for Earth {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS
    }
}
impl Planet for Mars {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 1.8808158
    }
}
impl Planet for Jupiter {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 11.862615
    }
}
impl Planet for Saturn {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 29.447498
    }
}
impl Planet for Uranus {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 84.016846
    }
}
impl Planet for Neptune {
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / EARTH_YEAR_SECONDS / 164.79132
    }
}
