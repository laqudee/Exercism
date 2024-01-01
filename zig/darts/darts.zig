pub const Coordinate = struct {
    x: f32,
    y: f32,
    distance: f32,

    pub fn init(x_coord: f32, y_coord: f32) Coordinate {
        const distance = @sqrt(x_coord * x_coord + y_coord * y_coord);
        return Coordinate{ .x = x_coord, .y = y_coord, .distance = distance };
    }
    pub fn score(self: Coordinate) usize {
        if (self.distance > 10.0) {
            return 0;
        } else if (self.distance > 5.0) {
            return 1;
        } else if (self.distance > 1.0) {
            return 5;
        } else {
            return 10;
        }
    }
};
