// #[derive(Debug)]
// struct Structure(i32);
//
// #[derive(Debug)]
// struct Deep(Structure);
// fn main() {
//     print!("{:?} is printing",Structure(3));
//     print!("{:?} is printing",Deep(Structure(3)));
// }
//---------functions---------->
fn main(){
fizzbuzz(30);
    fizzbuzz(6);
    fizzbuzz(7);
}

fn is_divisible(lhs:i32,rhs:i32)->bool{
    if rhs == 0 {
        return false;
    }
    lhs%rhs==0
}

fn fizzbuzz(n:i32)->(){
    if is_divisible(n,15){
        println!("fizzbuzz");
    }else if is_divisible(n,3){
        println!("fizz");
    }else {
        println!("{}",n)
    }
}
