#[derive(Debug, PartialEq, Eq)]
pub struct Dna(String);

#[derive(Debug, PartialEq, Eq)]
pub struct Rna(String);

impl Dna {
    pub fn new(dna: &str) -> Result<Dna, usize> {
        if dna.chars().all(|c| "ACGT".contains(c)) {
            Ok(Dna(dna.to_string()))
        } else {
            Err(dna.chars().position(|c| !"ACGT".contains(c)).unwrap())
        }
    }

    pub fn into_rna(self) -> Rna {
        let rna = self
            .0
            .chars()
            .map(|c| match c {
                'G' => 'C',
                'C' => 'G',
                'T' => 'A',
                'A' => 'U',
                _ => panic!("Invalid DNA character: {}", c),
            })
            .collect();

        Rna(rna)
    }
}

impl Rna {
    pub fn new(rna: &str) -> Result<Rna, usize> {
        if rna.chars().all(|c| "ACGU".contains(c)) {
            Ok(Rna(rna.to_string()))
        } else {
            Err(rna.chars().position(|c| !"ACGU".contains(c)).unwrap())
        }
    }
}
