var balancedStringSplit = function(s) {
    let stringCount = 0

    let leadingPointer = 0
    let followingPointer = 1
    let currentLetter = s[leadingPointer]
    let rCount = 0
    let lCount = 0
    currentLetter === 'R' ? rCount++ : lCount++

    while(followingPointer < s.length) {
        if (rCount === lCount) {
            stringCount++
            leadingPointer = followingPointer + 1
            followingPointer = leadingPointer + 1
            currentLetter = s[leadingPointer]
            rCount = 0
            lCount = 0
            currentLetter === 'R' ? rCount++ : lCount++
        } else {
            currentLetter = s[followingPointer]
            currentLetter === 'R' ? rCount++ : lCount++
            followingPointer++
        }
    }

    console.log(rCount)
    console.log(lCount)
    return stringCount
};

const s = "RLRRLLRLRL"
const s1 = "RLLLLRRRLR"
const s2 = "LLLLRRRR"
const s3 = "RLRRRLLRLL"

console.log('str count: ', balancedStringSplit(s3))

const balancedSplit = str => {
    let result = 0
    let i = 0
    let resultR = 0
    let resultL = 0

    while(i < str.length) {
        if (s[i] === 'R') {
            resultR = resultR + 1
        } 
        
        if (s[i] === 'L') {
            resultL = resultL + 1
        }

        if (resultL === resultR) {
            result = result + 1
        }

        i = i + 1
    }

    return result
}

console.log(balancedSplit(s))