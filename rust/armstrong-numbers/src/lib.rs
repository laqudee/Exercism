pub fn is_armstrong_number(num: u32) -> bool {
    let mut original_num: u32 = num;
    let mut n: u32 = 0;
    let mut result: u32 = 0;

    while original_num != 0 {
        original_num /= 10;
        n += 1;
    }

    original_num = num;
    while original_num != 0 {
        let remainder: u32 = original_num % 10;
        if let Some(new_result) = result.checked_add(remainder.pow(n)) {
            result = new_result;
        } else {
            return false;
        }
        original_num /= 10;
    }

    return result == num;
}
