  //1_masala
  let n = 50;
  let result = "bunday oy mavjud emas"

  switch (n) {
     case 1: 
     result = "Yanvar"
     break;
     case 2: 
     result = "Fevral"
     break;
     case 3: 
     result = "Mart"
     break;
     case 4: 
     result = "Aprel"
     break;
     case 5: 
     result = "May"
     break;
     case 6: 
     result = "Iyun"
     break;
     case 7: 
     result = "Iyul"
     break;
     case 8: 
     result = "Avgust"
     break;
     case 9: 
     result = "sentyabr"
     break;
     case 10: 
     result = "oktyabr"
         break;
     case 11: 
     result = "noyabr"
     break;
     case 12: 
     result = "dekabr"
     break;
  }
  console.log(result = "bunday oy mavjud emas");

  //2_masala
   let year = +prompt("oyning raqamini kiriting..");
  let res = "bunday oy mavjud emas ";
 switch (year) {
  case 1:
    res = Qish;
    break;
   case 2:
     res = Qish;
  break;
    case 3:
    res = Bahor;
    break;
 case 4:
   res = Bahor;
   break;
  case 5:
    res = Bahor;
    break;
  case 6:
   res = Yoz;
 break;
    case 7:
 res = Yoz;
 break;
case 8:
  res = Yoz;
 break;
case 9:
  res = Kuz;
  break;
case 10:
  res = Kuz;
  break;
  case 11:
    res = Kuz;
    break;
  case 12:
    res = Qish;
   break;
 default:
   res = "bunday oy mavjud emas"
 break;
 }
console.log(res);

//3_masala
let son1 = 100;
for (let i = 2; i <= son1; i++) {
  let res = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      res = false;
      break;
    }
  }

  if (res) {
    console.log(i);
  }
}

//4_masala

let son_1 = +prompt("Inputlar soni");
let son = 0;

for (let i = 0; i <= son_1; i++) {
  let son_2 = +prompt(`{i}-sonni kiriting`);
  son += son_2;
}
console.log(son);

//5_masala
let num_1 = +prompt ("ixtiyoriy sonni kiriting..");
 for(i =1 ; i<= num_1;i++ )  {
  console.log(i)
 }

 //6_masala

 let son__1 = +prompt("sonni kiriting..");
 let Son__2=1;
 for (let i = 1; i<= son__1; i++){
 Son__2=i*Son__2;
 } console.log(Son__2)

// 7-masal

 let num__1 =+prompt("sonni kiriting..");
let num__2=0
 for(let i=1; i<=number1; i++) {
   num__2=num__2+i
 }console.log(num__2);
