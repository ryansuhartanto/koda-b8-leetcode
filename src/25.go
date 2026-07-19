package lc

import (
	"strings"
)

/*
22. Generate Parentheses

Given `n` pairs of parentheses, write a function to *generate all combinations of well-formed parentheses*.
*/
func generateParenthesis(n int) []string {
	results := make([]string, 0, (n*(n+1))/2)

	var rec func(*strings.Builder, int, int)
	rec = func(old *strings.Builder, open int, close int) {
		if open < n {
			var new strings.Builder
			new.Grow(n * 2)
			new.WriteString(old.String())

			new.WriteRune('(')
			rec(&new, open+1, close)
		}

		if close < open {
			old.WriteRune(')')
			rec(old, open, close+1)
		} else if close == n {
			results = append(results, old.String())
		}
	}

	var sb strings.Builder
	rec(&sb, 0, 0)

	return results
}
