function decryptAtbash(cipherText: string): string {
    const plain = "abcdefghijklmnopqrstuvwxyz";
    const cipher = "zyxwvutsrqponmlkjihgfedcba";
    let result = "";
  
    for (let i = 0; i < cipherText.length; i++) {
      const character = cipherText[i].toLowerCase();
      const index = cipher.indexOf(character);
      if (index !== -1) {
        // If the character is in the cipher alphabet, replace it with the corresponding plain alphabet character.
        result += plain[index];
      } else {
        // If the character is not in the cipher alphabet, leave it unchanged.
        result += character;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(decryptAtbash("lyzrh rh ufmwvi"));
  console.log(decryptAtbash("Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt"));