// Take a look at the tests, you might have to change the function arguments

pub fn binarySearch(comptime T: type, target: T, items: []const T) ?usize {
    if (items.len == 0) return null;
    if (target < items[0] or target > items[items.len - 1]) return null;

    var low: usize = 0;
    var high: usize = items.len - 1;
    while (low <= high) {
        const mid = low + (high - low) / 2;
        if (items[mid] == target) {
            return mid;
        } else if (items[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}
