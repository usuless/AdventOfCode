import * as fs from 'fs';

const dataLocation: string = './day-3/data.txt'
let computerData: string = ''
let score: number = 0
const regex:RegExp = /mul\((\d{1,3}),(\d{1,3})\)|do\(\)|don't\(\)/g;
let isGood:boolean = true

const regexFunc = (mul: string) => {
    const arrayWithoutBraces = mul.slice(0, -1)
    const numbers = arrayWithoutBraces.slice(4, arrayWithoutBraces.length)
    let num1: number = 0
    let num2: number = 0
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === ',') {
            num1 = Number(numbers.slice(0, i))
            num2 = Number(numbers.slice(i + 1, numbers.length))
            score += (num1 * num2)
        }
    }
    console.log(score)
}

const doAndDontAddon = (tableWithInstructions:RegExpMatchArray) => {
    for (let i = 0; i < tableWithInstructions.length; i++) {
        if (tableWithInstructions[i] === "do()") {
            console.log(tableWithInstructions[i])
            isGood = true
        } else if (tableWithInstructions[i] === "don't()") {
            console.log(tableWithInstructions[i])
            isGood = false
        } else {
            if (isGood === true) {
                regexFunc(tableWithInstructions[i])
            }
        } 
    }
}

    // read file
    fs.readFile(dataLocation, (err, data) => {
        if (err) throw err;
        
    computerData = data.toString();
    const found = computerData.match(regex)
    console.log(found)
    //@ts-ignore
    doAndDontAddon(found)
})


// deno


/*

// Deno

let enabled = true;
console.log(
"Sum: ",
(await Deno.readTextFile("input.txt"))
.matchAll(/mul\((\d*),(\d*)\)|do\(\)|don\'t\(\)/gm)
.reduce((acc, capture) => {
  if (capture[0].startsWith("do()")) enabled = true;
  if (capture[0].startsWith("don't()")) enabled = false;
  if (capture[0].startsWith("mul(") && enabled)
    acc += +capture[1] * +capture[2];

  return acc;
}, 0),
);


// RUST


use regex::Regex;
use std::fs;

const INPUT_LOCATION: &str = "./input.txt";

const ENABLE_INSTRUCTION: &str = "do()";
const DISABLE_INSTRUCTION: &str = "don't()";
const MULTIPLY_INSTRUCTION: &str = "mul(";

fn main() {
    let mut sum = 0;
    let mut is_enabled = true;

    let input = fs::read_to_string(INPUT_LOCATION).expect("No input file found");

    let mul_regex = Regex::new(r"mul\((\d*),(\d*)\)|do\(\)|don\'t\(\)").expect("Regex issue");

    for capture in mul_regex.captures_iter(&input) {
        if capture[0].eq(ENABLE_INSTRUCTION) {
            is_enabled = true;
        }

        if capture[0].eq(DISABLE_INSTRUCTION) {
            is_enabled = false;
        }

        if capture[0].starts_with(MULTIPLY_INSTRUCTION) && is_enabled {
            let num1 = &capture[1].parse::<i32>().expect("Number parse error");
            let num2 = &capture[2].parse::<i32>().expect("Number parse error");

            sum += num1 * num2;
        }
    }

    println!("Sum of multiplications: {}", sum);
}

*/