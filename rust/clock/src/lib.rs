#[derive(Debug, PartialEq, Eq)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let mut total_minutes = (hours * 60 + minutes).rem_euclid(24 * 60);
        if total_minutes < 0 {
            total_minutes += 24 * 60;
        }
        Clock {
            hours: total_minutes / 60,
            minutes: total_minutes % 60,
        }
    }

    pub fn to_string(&self) -> String {
        format!("{:02}:{:02}", self.hours, self.minutes)
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(self.hours, self.minutes + minutes)
    }
}
