package lc

import (
	"slices"
	"unicode"
)

/*
125. Valid Palindrome

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.
*/
func isPalindrome(s string) bool {
	var clean []rune

	for _, r := range s {
		if !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			continue
		}

		if unicode.IsUpper(r) {
			r = unicode.ToLower(r)
		}

		clean = append(clean, r)
	}

	half := len(clean) / 2
	halfL := clean[:half]
	halfR := clean[len(clean)-half:]
	slices.Reverse(halfR)

	return string(halfL) == string(halfR)
}
