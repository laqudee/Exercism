pub fn check(candidate: &str) -> bool {
    let mut letter_array = [0u8; 26];
    for c in candidate.chars() {
        if c.is_alphabetic() {
            let c = c.to_ascii_lowercase();
            if letter_array[(c as u8 - 'a' as u8) as usize] > 0 {
                return false;
            }
            letter_array[(c as u8 - 'a' as u8) as usize] += 1;
        }
    }
    true
}
