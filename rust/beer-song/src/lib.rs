pub fn verse(n: u32) -> String {
    if n == 0 {
        return String::from("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
    }
    if n == 1 {
        return String::from("1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n");
    }
    if n == 2 {
        return String::from("2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n");
    }
    format!("{n} bottles of beer on the wall, {n} bottles of beer.\nTake one down and pass it around, {m} bottles of beer on the wall.\n", n = n, m = n - 1)
}

pub fn sing(start: u32, end: u32) -> String {
    (end..=start).rev().map(|i| verse(i)).collect::<Vec<String>>().join("\n")
}
