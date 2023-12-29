/// Determine whether a sentence is a pangram.
pub fn is_pangram(sentence: &str) -> bool {
    if sentence.is_empty() {
        return false;
    }
    let mut set = [false; 26];
    for char in sentence.chars() {
        if char.is_ascii_alphabetic() {
            set[char.to_ascii_lowercase() as usize - 'a' as usize] = true;
        }
    }
    set.iter().all(|&c| c)
}

