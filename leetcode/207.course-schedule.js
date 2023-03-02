/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

/**
 * Companies -> apple | uber | yelp | zenefits
 * 
 * Problem:
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
 * 
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 * Return true if you can finish all courses. Otherwise, return false.
 */

/**
 * 
 * Solution:
 * 1. Create a map with courses and it's prerequisites
 * 2. Run DFS on each courses
 *
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  let preMap = {}
  let visited = new Set();

  for(let [course, prerequisite] of prerequisites) {
      if(preMap[course]) {
          preMap[course].push(prerequisite)
      } else {
          preMap[course] = [prerequisite]
      }
  }

  function dfs (course, visited) {
      if(visited.has(course)) { return false; }
      if (!preMap[course]) { return true}
      visited.add(course);
      for(let pre of preMap[course]) {
          if(!dfs(pre, visited)) {return false}
      }
      visited.delete(course);
      preMap[course] = null;
      return true;
  }

  for(let course in preMap) {
      if (!dfs(course, visited)) {
          return false
      }
  }

  return true
};
// @lc code=end

