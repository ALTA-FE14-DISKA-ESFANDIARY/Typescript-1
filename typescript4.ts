function isPangram(texts: string): boolean {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sentenceLowerCase = texts.toLowerCase();
  
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet.charAt(i);
      if (!sentenceLowerCase.includes(letter)) {
        return false;
      }
    }
    return true;
  }
  console.log(isPangram('The quick brown fox jumps over the lazy dog')); 
  console.log(isPangram('Public junk dwarves hug my beloved pillow')); 