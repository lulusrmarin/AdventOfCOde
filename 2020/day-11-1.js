console.log('lol');

var seatStr = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`

var matrix = [];
var rows = seatStr.split("\n");
rows.forEach(function(row, idx){
    matrix[idx] = row.split("");
})

console.log(matrix);

var matrixSame = false;

while(!matrixSame){
    var newMatrx = [];
    for(var x = 0; x < matrix.length; x++){
        newMatrx[x] = [];
        for(var y = 0; y < matrix[0].length; y++){
            var neighborCount = 0;
            var prevRowExists = typeof(matrix[x-1]) !== 'undefined';
            var nextRowExists = typeof(matrix[x+1]) !== 'undefined';
            var prevColExists = typeof(matrix[x][y-1]) !== 'undefined';
            var nextColExists = typeof(matrix[x][y+1]) !== 'undefined';
            var seatEmpty = matrix[x][y] == 'L';
            var isFloor = matrix[x][y] == '.';

            if(prevRowExists && prevColExists && matrix[x -1][y - 1] == '#'){
                neighborCount++;
            }

            if(prevRowExists && matrix[x - 1][y] == '#'){
                neighborCount++;
            }

            if(prevRowExists && nextColExists && matrix[x - 1][y + 1] == '#'){
                neighborCount++;
            }

            if(prevColExists && matrix[x][y - 1] == '#'){
                neighborCount++;
            }

            if(nextColExists && matrix[x][y + 1] == '#'){
                neighborCount++;
            }

            if(nextRowExists && prevColExists && matrix[x + 1][y - 1] == '#'){
                neighborCount++;
            }

            if(nextRowExists && matrix[x + 1][y] == '#'){
                neighborCount++;
            }

            if(nextRowExists && nextColExists && matrix[x + 1][y + 1] == '#'){
                neighborCount++;
            }

            if(matrix[x][y] == 'L' && neighborCount == 0){
                newMatrx[x][y] = '#';
            }

            else if(matrix[x][y] == '#' && neighborCount == 4){
                newMatrx[x][y] = 'L';
            }

            else {
                newMatrx[x][y] = matrix[x][y];
            }

            // if(typeof(newMatrx[x]) == 'undefined'){
            //     newMatrx[x] = [];
            // }

            // if(matrix[x][y] == '#'){
            //     if([2,3].includes(neighborCount)){
            //         newMatrx[x][y] = '#'
            //     } else {
            //         newMatrx[x][y] = '.'
            //     }
            // }

            // if(matrix[x][y] == '.'){
            //     if(neighborCount == 3){
            //         newMatrx[x][y] = '#'
            //     } else {
            //         newMatrx[x][y] = '.'
            //     }
            // }
        }
    }

    outside:
    for(var x = 0; x < matrix.length; x++){
        for(var y = 0; y < matrix[0].length; y++){
            if(newMatrx[x][y] != matrix[x][y]){
                matrixSame = false;
                break outside;
            } else {
                matrixSame = true;
            }
        }
    }

    console.log('same',matrixSame);
    console.log(newMatrx);
}

console.log(matrix);