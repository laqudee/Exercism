pub fn sum_of_multiples(limit: u32, factors: &[u32]) -> u32 {
    let mut sum: u32 = 0;
    let mut hash_set = std::collections::HashSet::new();
    for factor in factors.iter() {
        if *factor == 0 {
            continue;
        }
        let mut m: u32 = 1;
        while factor * m < limit {
            hash_set.insert(factor * m);
            m += 1;
        }
    }
    for key in hash_set {
        sum += key
    }
    return sum
}
