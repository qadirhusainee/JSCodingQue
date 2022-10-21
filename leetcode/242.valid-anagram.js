/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    s = s.replace(/[^\w]/g, "")
    t = t.replace(/[^\w]/g, "")
    if(s.length !== t.length) {
        return false
    }
    
    const mapOfS =  converWordToMap(s)
    const mapOfT =  converWordToMap(t)
    for(let key in mapOfS) {
        if (mapOfS[key] !== mapOfT[key]) {
            return false
        }
    }
    return true
    
};

const converWordToMap = (word) => {
    const map = {}
    for (let alphabet of word) {
        if(map[alphabet]) {
            map[alphabet] = map[alphabet] + 1
        } else {
            map[alphabet] = 1
        }
    }
    return map
}
// @lc code=end

