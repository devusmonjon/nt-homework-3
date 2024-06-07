// masala 1
// {
//     let a = +prompt("Son kiriting");
//     if (a % 2 === 0) {
//         a++;
//     }
//     alert(`a: ${a}`);
// }

// masala 2
// {
//     let a = +prompt("Son kiriting");
//     if (a % 2 === 0) {
//         a++;
//     } else {
//         a -= 2;
//     }
//     alert(`a: ${a}`);
// }

// masala 3
// {
//     let a = +prompt("Son kiriting");
//     if (a % 2 === 0 && a !== 0) {
//         a++;
//     } else if (a !== 0) {
//         a -= 2;
//     } else {
//         a = 10;
//     }
//     alert(`a: ${a}`);
// }

// masala 4
// {
//     let a = +prompt("Birinchi sonni kiriting:");
//     let b = +prompt("Ikkinchi sonni kiriting:");
//     let c = +prompt("Uchinchi sonni kiriting:");

//     let count = 0;

//     if (a > 0) {
//         count++;
//     }

//     if (b > 0) {
//         count++;
//     }

//     if (c > 0) {
//         count++;
//     }

//     alert(`Musbat sonlar soni: ${positiveCount}`);
// }

// masala 5
// {
//     // Sonlarni prompt orqali kiritish
//     let a = parseInt(prompt("Birinchi sonni kiriting:"));
//     let b = parseInt(prompt("Ikkinchi sonni kiriting:"));
//     let c = parseInt(prompt("Uchinchi sonni kiriting:"));

//     // Musbat va manfiy sonlar sonini hisoblash uchun o'zgaruvchilar
//     let count = 0;
//     let negativeCount = 0;

//     // Har bir sonning musbat yoki manfiyligini tekshirish
//     if (a > 0) {
//         count++;
//     } else if (a < 0) {
//         negativeCount++;
//     }

//     if (b > 0) {
//         count++;
//     } else if (b < 0) {
//         negativeCount++;
//     }

//     if (c > 0) {
//         count++;
//     } else if (c < 0) {
//         negativeCount++;
//     }

//     // Musbat va manfiy sonlar sonini ekranga chiqarish
//     alert(
//         `Musbat sonlar soni: ${count}\n\nManfiy sonlar soni: ${negativeCount}`,
//     );
// }

// masala 6
// {
//     // Ikkita butun sonni prompt orqali kiritish
//     let a = parseInt(prompt("Birinchi sonni kiriting:"));
//     let b = parseInt(prompt("Ikkinchi sonni kiriting:"));

//     // Katta sonni aniqlash
//     let largerNumber;

//     if (a > b) {
//         largerNumber = a;
//     } else if (a < b) {
//         largerNumber = b;
//     } else {
//         largerNumber = "Ikkala son teng";
//     }

//     alert(`Katta son: ${largerNumber}`);
// }

// masala 7
// {
//     // Ikkita butun sonni prompt orqali kiritish
//     let a = parseInt(prompt("Birinchi sonni kiriting:"));
//     let b = parseInt(prompt("Ikkinchi sonni kiriting:"));

//     // Kichik sonning tartib raqamini aniqlash
//     let smallerIndex;

//     if (a < b) {
//         smallerIndex = "Birinchi son";
//     } else if (a > b) {
//         smallerIndex = "Ikkinchi son";
//     } else {
//         smallerIndex = "Ikkala son teng";
//     }

//     alert(`Kichik sonning tartib raqami: ${smallerIndex}`);
// }

// masala 8
// {
//     // Ikkita butun sonni prompt orqali kiritish
//     let a = parseInt(prompt("Birinchi sonni kiriting:"));
//     let b = parseInt(prompt("Ikkinchi sonni kiriting:"));

//     // Katta va kichik sonlarni aniqlash
//     let largerNumber;
//     let smallerNumber;

//     if (a > b) {
//         largerNumber = a;
//         smallerNumber = b;
//         alert(`A soni: ${a}`);
//         alert(`B soni: ${b}`);
//     } else {
//         largerNumber = b;
//         smallerNumber = a;
//         alert(`B soni: ${b}`);
//         alert(`A soni: ${a}`);
//     }
// }

// masala 9
// {
//     let a = +prompt("Birinchi sonni kiriting");
//     let b = +prompt("ikkinchi sonni kiriting");

//     if (a > b) {
//         const temp = a;
//         a = b;
//         b = temp;
//     }

//     alert(`A: ${a}, B: ${b}`);
// }

// masala 10
// {
//     let a = +prompt("Birinchi sonni kiriting");
//     let b = +prompt("ikkinchi sonni kiriting");

//     if (a === b) {
//         a += b;
//         b = a;
//     } else {
//         a = 0;
//         b = 0;
//     }

//     alert(`A: ${a}, B: ${b}`);
// }
