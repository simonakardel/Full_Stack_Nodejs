// don't save passwords as plain text
// don't send passwords to the front-end

// first part 
// 2a or 2b - algorithm
// 12 - how much computation is required to verify and decrypt the password
// everytime new encryption happens new salt is generated 
// without salt you can create a rainbow table
// do not use md5
// hashing function

import bcrypt from "bcrypt";

const passwordPlaintext = "hunter42";
const passwordPlaintext2 = "notHunter";
const hashedPassword = "$2b$12$VML8/qEFj0WG1Bx90Bwx/.ytmxP3UBL4Iq0RYLvePXF6D5C.8AGdO";


const encryptedPassword = await bcrypt.hash(passwordPlaintext, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlaintext2, hashedPassword);
console.log(isSame);

// save the hashed password in the database
// when user logs in compare the entered password with the hashed password

