fn main() {
    //mutability
    let x = 5;
    let mut y = 1;
    print!("{y} \n");
    y = x + 3;
    print!("{x} {y} \n");

    //functions
    print_name(String::from("naveen"));
}

fn print_name(name: String) {
    print!("name is :{}", name);
}
