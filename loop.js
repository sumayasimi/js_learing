/*
for (initialize; condition; inc / dec) {
  //statement
}
*/

for (i = 1; i <= 10; i++) {
  console.log("3 x", i, "=", 3 * i);
}

/*
initialize
while(condition){
//statement
inc/dec
}

*/

j = 1;
while (j <= 10) {
  console.log("5 x", j, "=", 5 * j);
  j++;
}

/*
initialize
do{
//statemet
inc/dec
}while(condtion);

*/

let y = 1;
do {
  console.log("13 x", y, "=", 13 * y);
  y++;
} while (y <= 10);

for (i = 5; i <= 25; i = i + 5) {
  if (i == 15) break;
  console.log("Hi");
}
