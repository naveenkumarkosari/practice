fn main() {
    //ownership and borrowers
    ss_aa();

    //
    let s = String::from("Hello from Rust");
    let (length, s2) = cal_len(s);
    print!("\n {length} ....{s2}");

    //
    let mut str_str = String::from("real");
    change_str(&mut str_str);
    let r3 = &mut str_str;
    print!("\n{r3}");

    //
    let index = first_word(&s2);
    print!("{index}");
}

fn ss_aa() {
    let s2 = String::from("hello world");
    let s1 = s2; //borrowed s2 to s1 ,s2 will be deleted
    print!("{s1}")
}

fn cal_len(s1: String) -> (usize, String) {
    return (s1.len(), s1);
}

fn change_str(s: &mut String) {
    s.push_str("dummy");
}

fn first_word(s: &String) -> usize {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        print!("{item} \n");
        if item == b' ' {
            return i;
        }
    }

    s.len()
}
