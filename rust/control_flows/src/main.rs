fn main() {
    if_condition();
    print!("\n");
    initilizing_var();
    print!("\n");
    loops();
    print!("\n");
    while_loop();
}

fn if_condition() {
    let num = 10;
    if num % 2 == 0 {
        print!("even")
    } else {
        print!("odd")
    }
}

fn initilizing_var() {
    let age = 20;
    let age_group = if age > 18 && age < 25 {
        "genz"
    } else {
        "boomer"
    };
    print!("{age_group}")
}

fn loops() {
    let mut count = 1;
    let res = loop {
        count = count + 1;
        if count == 10 {
            break count;
        }
    };
    print!("{res}")
}

fn while_loop() {
    let a = [1, 2, 3, 4, 5, 6];
    let mut index = 0;
    while index < 3 {
        print!("the element is {}: \n", a[index]);
        index += 1
    }
}
