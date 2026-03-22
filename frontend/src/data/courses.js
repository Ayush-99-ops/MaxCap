export const funTitles = [
  "The Awakening", "Variable Voodoo", "Looping Legends", "Array Annihilation", 
  "The Function Factory", "Object Orientation Odyssey", "String Sorcery", 
  "Dictionary Destruction", "The Recursive Riddler", "Classy Characters",
  "Async Avengers", "Promise Protectors", "Event Emitter Empire",
  "Module Mayhem", "Syntax Syndicate", "The Debugging Dungeon",
  "Refactoring Realm", "Algorithm Arena", "Data Structure Dojo", "The Final Boss"
];

const defaultSnippets = {
  Python: 'def solve():\n    # Write your magic here\n    pass\n\nprint(solve())',
  JavaScript: 'function solve() {\n  // Write your magic here\n}\n\nconsole.log(solve());',
  Java: 'public class Main {\n  public static void main(String[] args) {\n    // Magic here\n  }\n}',
  'C++': '#include <iostream>\nusing namespace std;\n\nint main() {\n  // Magic here\n  return 0;\n}',
  Go: 'package main\nimport "fmt"\n\nfunc main() {\n  // Magic here\n}',
  Ruby: 'def solve\n  # Write your magic here\nend\n\nputs solve()'
};

export const COURSES = [
  { id: 'python', title: 'Python', desc: 'Master lists, dictionaries, and ML foundations.', tag: 'Python' },
  { id: 'javascript', title: 'JavaScript', desc: 'DOM manipulation, ES6, and frontend logic.', tag: 'JavaScript' },
  { id: 'java', title: 'Java', desc: 'Object-Oriented heavy hitter for Enterprise.', tag: 'Java' },
  { id: 'cpp', title: 'C++', desc: 'Memory-safe blazing fast performance coding.', tag: 'C++' },
  { id: 'go', title: 'Go', desc: 'Concurrency and cloud-native scalable systems.', tag: 'Go' },
  { id: 'ruby', title: 'Ruby', desc: 'Elegant syntax and web development with Rails.', tag: 'Ruby' },
];

export const getLessonsForCourse = (courseId) => {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return [];
  
  return Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: funTitles[i],
    desc: `Level ${i + 1} of ${course.title}. Apply your knowledge to defeat this algorithm challenge and score points!`,
    code: defaultSnippets[course.title] || '// Code here'
  }));
};
