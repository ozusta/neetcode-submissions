class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const obj = {};

        for (let i = 0; i<s.length; i++) {
            if (obj[s[i]] === undefined) {
                obj[s[i]] = 0;
            }
            obj[s[i]]++;
        }

        for (let i = 0; i<t.length; i++) {
            if (obj[t[i]] === undefined) {
                return false;
            }
            obj[t[i]]--;
            if (obj[t[i]] < 0) return false;
        }

        const vals = Object.values(obj);

        for (let i = 0; i<vals.length; i++) {
            if (vals[i] !== 0) {
                return false;
            }
        }

        return true;
    }
}
