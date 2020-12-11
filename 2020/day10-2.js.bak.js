console.log('10');

var inputs = [
    28,
33,
18,
42,
31,
14,
46,
20,
48,
47,
24,
23,
49,
45,
19,
38,
39,
11,
1,
32,
25,
35,
8,
17,
7,
9,
4,
2,
34,
10,
3
]

// var inputs = [
//     16,
//     10,
//     15,
//     5,
//     1,
//     11,
//     7,
//     19,
//     6,
//     12,
//     4
// ];

var highest = inputs.sort(function(a, b){return b - a})[0] + 3
console.log(highest);

var sorted = inputs.sort(function(a,b){return a - b;});
console.log(sorted);

// var conversionPaths = 0;
// var paths = [];
// function breakDown(ar, idx = 0, depth = 0){
//     console.log(ar, depth);
//     conversionPaths++;
//     paths.push(ar);

// if(depth > 2){
//     return;
// }

//     if(ar[1] - ar[0] <= 2 && ar[1] <= 3){
//         var newAr1 = ar.slice();
//         newAr1.splice(0 , 1);
//         console.log('removable', ar[0], 'depth', depth);
//         breakDown(newAr1,  0, depth + 1);
//     }

//     for(var i = idx; i < ar.length; i++){
//         //console.log(i, depth)
//         //console.log("next", ar[i+1]);
//         //console.log("last", ar[i]);
//         if(ar[i+1] - ar[i] <= 2 && (ar[i+2] - ar[i] <= 3) ){
//             var newAr = ar.slice();
//             console.log('removable', ar[i+1], 'depth', depth);
//             newAr.splice(i + 1 , 1);
//             breakDown(newAr,  i + 1, depth + 1);
//         }


//     }
// }

// breakDown(sorted);
// //console.log(paths);
// console.log(conversionPaths);

var conversionPaths = [];
var idx = 0;
var counts = 0;
function convert(converters, depth = 1){
    //console.log(converters);
    if(converters.length == 0){
        var joltage = 0;
    } else {
        var joltage = converters[converters.length-1];
    }
    
    if(depth > 100){
        return
    }

    if(highest - joltage <= 3 || converters.length == 100){
        counts++;
        return;
    }

    var last = converters[converters.length - 1];
    var idx = sorted.indexOf(last) + 1;
    // console.log(idx);
    // console.log(sorted[idx]);
    // console.log(sorted[idx] - last);

    if(sorted[idx] - last <= 3){
        //console.log('a')
        convert(converters.concat([sorted[idx]]), depth + 1)
    }
    if (sorted[idx + 1] - last <= 3){
        //console.log('b')
        convert(converters.concat([sorted[idx+1]]), depth + 1)
    } 
    if (sorted[idx + 2] - last <= 3){
        //console.log('c')
        convert(converters.concat([sorted[idx+2]]), depth + 1)
    }

    // var idx = Math.max(sorted.indexOf(last), 0);
    // console.log(last);
    // console.log("idx", idx);

    // for(i = idx; i < idx + 3; i++){
    //     console.log(sorted[i]);
    //     if(sorted[i] - sorted[idx] <=3 && !converters.includes(last)){
    //         convert(converters.concat([sorted[i]]) , depth + 1);
    //     }
    // }

    // console.log(converters[converters.length - 1]);
    // console.log(sorted.findIndex(function(val){
    //     return val == converters[converters.length - 1];
    // }))

    // var idx = sorted.findIndex(function(val){
    //     return val == converters[converters.length - 1];
    // })

    // idx = Math.max(idx, 0);

    // console.log("idx", idx);

    // if(sorted[idx+1] - sorted[idx] <= 3){
    //     convert(converters.concat([sorted[idx]]), depth + 1);
    // }
}

convert([0])
console.log(counts);