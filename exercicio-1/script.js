const nums = [9,6,8,4];

let tot = 0;

for(let i of nums){
    tot += i;
}
console.log(tot);
let media = tot / nums.length;
media = media.toFixed(2);
console.log(media);
