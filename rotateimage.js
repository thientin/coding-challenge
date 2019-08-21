function rotateImage(mat) {
  let N = mat[0].length
  for(let i = 0; i < N / 2; i ++) {
    for (let j = i; j < N-i -1; j++) {
      let temp = mat[i][j] 
      mat[i][j] = mat[N - 1 - j][i] 
      mat[N - 1 - j][i] = mat[N - 1 - i][N - 1 - j] 
      mat[N - 1 - i][N - 1 - j] = mat[j][N - 1 - i] 
      mat[j][N - 1 - i] = temp 
    }
  }
}
function rotateImageKTimes(mat,k){
	for(let i = 0; i < k % 4; i ++) {
  	rotateImage(mat)
	}  
}

export {rotateImageKtimes}
