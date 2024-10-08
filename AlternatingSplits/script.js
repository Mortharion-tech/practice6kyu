/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */

function encrypt(text, n) {
    if (!text || text === '' || n < 1) {
      return text;
    }
    let chars = text.split('');
    let oddCon = chars.filter((val, ind)=>ind%2!==0);
    let evenCon = chars.filter((val ,ind)=>ind%2===0);
    const conc = oddCon.join('') + evenCon.join('');
    return encrypt(conc, n-1);
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || encryptedText === '' || n < 1) {
      return encryptedText;
    }
    let mid = Math.floor(encryptedText.length / 2);
    let oddCon = encryptedText.slice(0, mid).split('');
    let evenCon = encryptedText.slice(mid).split('');
    let conc = [];
    while (evenCon.length || oddCon.length) {
      if (evenCon.length) {
        conc.push(evenCon.shift());
      }
      if (oddCon.length) {
        conc.push(oddCon.shift());
      }
    }  
    return decrypt(conc.join(''), n-1);
}

/* function encrypt(text, n) {
	for (let i = 0; i < n; i++) {
  	text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
  }
  return text
}

function decrypt(text, n) {
	let l = text && text.length / 2 | 0
	for (let i = 0; i < n; i++) {
  	text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
} */