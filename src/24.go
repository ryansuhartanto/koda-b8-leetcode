package lc

/*
58. Length of Last Word

Given a string `s` consisting of words and spaces, return *the length of the last word in the string.*

A word is a maximal substring consisting of non-space characters only.
*/
func lengthOfLastWord(s string) int {
	length := len(s) - 1

	for s[length] == ' ' {
		length--
	}

	index := length - 1

	for index >= 0 && s[index] != ' ' {
		index--
	}

	return length - index
}
