package lc

/*
36. Valid Sudoku

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.
*/
func isValidSudoku(board [][]byte) bool {
	var rows, cols, boxes [9][9]bool

	for y, row := range board {
		for x, number := range row {
			if number == '.' {
				continue
			}

			number -= '1'

			if rows[x][number] {
				return false
			} else {
				rows[x][number] = true
			}

			if cols[y][number] {
				return false
			} else {
				cols[y][number] = true
			}

			boxIndex := x/3 + y/3*3
			if boxes[boxIndex][number] {
				return false
			} else {
				boxes[boxIndex][number] = true
			}
		}
	}

	return true
}
