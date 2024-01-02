pub const Triangle = struct {
    a: f64,
    b: f64,
    c: f64,

    pub fn init(a: f64, b: f64, c: f64) TriangleError!Triangle {
        if (a <= 0 or b <= 0 or c <= 0) {
            return TriangleError.Invalid;
        }
        if (a + b >= c and b + c >= a and a + c >= b) {
            return Triangle{ .a = a, .b = b, .c = c };
        } else {
            return TriangleError.Invalid;
        }
    }

    pub fn isEquilateral(self: Triangle) bool {
        return self.a == self.b and self.b == self.c;
    }

    pub fn isIsosceles(self: Triangle) bool {
        return self.a == self.b or self.a == self.c or self.b == self.c;
    }

    pub fn isScalene(self: Triangle) bool {
        return self.a != self.b and self.a != self.c and self.b != self.c;
    }
};

pub const TriangleError = error{
    Invalid,
};
