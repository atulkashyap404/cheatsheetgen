export type Subject = {
  id: string;
  name: string;
  description: string;
  sections: Section[];
};

export type Section = {
  id: string;
  name: string;
  content: string;
};

export const subjects: Subject[] = [
  {
    id: 'sql',
    name: 'SQL',
    description: 'Structured Query Language for managing relational databases',
    sections: [
      {
        id: 'syntax',
        name: 'Basic Syntax',
        content: '• SELECT column FROM table\n• INSERT INTO table VALUES (value)\n• UPDATE table SET column = value\n• DELETE FROM table WHERE condition',
      },
      {
        id: 'joins',
        name: 'JOIN Operations',
        content: '• INNER JOIN: SELECT * FROM table1 JOIN table2 ON condition\n• LEFT JOIN: Includes all records from left table\n• RIGHT JOIN: Includes all records from right table',
      },
    ],
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Popular programming language for web development',
    sections: [
      {
        id: 'variables',
        name: 'Variables & Data Types',
        content: '• let: Block-scoped variable\n• const: Immutable declaration\n• var: Function-scoped variable',
      },
      {
        id: 'functions',
        name: 'Functions',
        content: '• function name() {}\n• const arrow = () => {}\n• async function name() {}',
      },
    ],
  },
];