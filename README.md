# infection-calculator
Calculates if all students in a class will be infected

I watched a video on youtube revolving around the Mathematics of Computer Science, in which a problem was discusses as follows:

Imagine students are in a classroom, seated in a row column format and some have an infection. It then follows two rules every minute: 
1. If a student is infected they stay infected
2. If an uninfected student is surrounded by 2 or more infected people they become infected (not diagonally) 

The question was then in an N x N grid can N-1 (or less) infected students infect all of them, the answer is no they never can.

I saw this as a good programming puzzle to attempt, to calculate the end classroom/board based on the initial condition.

The board is the classroom
1 is an infected student 
0 is an uninfected student
