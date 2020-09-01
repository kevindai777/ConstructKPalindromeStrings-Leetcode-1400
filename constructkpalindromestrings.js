//Objective is, given a string 's' and integer 'k', to find out if we can build
//k distinct palindrome strings using all of the characters in 's'.

let s = "annabelle", k = 2


//O(n) solution where n is the number of characters in the string
//We use a hashmap to keep track of the frequencies, but a charArr can be used too

if (s.length < k) {
    return false
}

let map = {}
let oddCount = 0

for (let char of s) {
    if (map[char] == undefined) {
        map[char] = 1
    } else {
        map[char]++
    }
}

for (let val of Object.values(map)) {
    if (val % 2 != 0) {
        oddCount++
    }
}

if (oddCount > k) {
    return false
}

return true