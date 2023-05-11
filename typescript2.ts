function decryptAtbash(cipherText: string): string {
    const plain = "abcdefghijklmnopqrstuvwxyz";
    const cipher = "zyxwvutsrqponmlkjihgfedcba";
    let result = "";
  
    for (let i = 0; i < cipherText.length; i++) {
      const character = cipherText[i].toLowerCase();
      const index = cipher.indexOf(character);
      if (index !== -1) {

        result += plain[index];
      } else {
 
        result += character;
      }
    }
  
    return result;
  }
  
 
  console.log(decryptAtbash("lyzrh rh ufmwvi"));
  console.log(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt"));