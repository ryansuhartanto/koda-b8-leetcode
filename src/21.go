package lc

import (
	"maps"
	"slices"
)

/*
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.
*/
func groupAnagrams(strs []string) [][]string {
	sets := make(map[string][]string)

	for _, str := range strs {
		runes := []byte(str)
		slices.Sort(runes)

		sets[string(runes)] = append(sets[string(runes)], str)
	}

	return slices.Collect(maps.Values(sets))
}
