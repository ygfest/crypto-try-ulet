import React, { useState } from 'react';

const AffineCaesarPage = () => {
  const [plainText, setPlainText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [caesarEncryptedText, setCaesarEncryptedText] = useState('');
  const [caesarDecryptedText, setCaesarDecryptedText] = useState('');
  const [caesarShift, setCaesarShift] = useState(''); // Default shift value for Caesar Cipher


  const a = 17;
  const b = 20;

  const encryptMessage = (msg) => {
    let cipher = '';
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] !== ' ') {
        cipher +=
          String.fromCharCode((((a * (msg[i].charCodeAt(0) - 65)) + b) % 26) + 65);
      } else {
        cipher += msg[i];
      }
    }
    return cipher;
  };

  const decryptCipher = (cipher) => {
    let msg = '';
    let a_inv = 0;
    let flag = 0;

    for (let i = 0; i < 26; i++) {
      flag = (a * i) % 26;
      if (flag === 1) {
        a_inv = i;
      }
    }

    for (let i = 0; i < cipher.length; i++) {
      if (cipher[i] !== ' ') {
        msg +=
          String.fromCharCode(
            ((a_inv * ((cipher[i].charCodeAt(0) + 65 - b)) % 26)) + 65
          );
      } else {
        msg += cipher[i];
      }
    }
    return msg;
  };

  const caesarEncrypt = (text, shift) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let code = char.charCodeAt(0);
      let offset = code >= 65 && code <= 90 ? 65 : 97;
      let shifted = (code - offset + shift) % 26;
      if (shifted < 0) {
        shifted += 26;
      }
      let ch = String.fromCharCode(shifted + offset);
      result += ch;
    }
    return result;
  };
  
  const caesarDecrypt = (text, shift) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      let code = char.charCodeAt(0);
      let offset = code >= 65 && code <= 90 ? 65 : code >= 97 && code <= 122 ? 97 : null;
      if (offset !== null) {
        let shifted = (code - offset - shift + 26) % 26;
        let ch = String.fromCharCode(shifted + offset);
        result += ch;
      } else {
        result += char; // Keep non-alphabetic characters unchanged
      }
    }
    return result;
  };
  
  

  const handleEncrypt = () => {
    const encryptedMessage = encryptMessage(plainText.toUpperCase());
    const caesarEncrypted = caesarEncrypt(plainText.toUpperCase(), caesarShift);
    setEncryptedText(encryptedMessage);
    setCaesarEncryptedText(caesarEncrypted);
  };

  const handleDecrypt = () => {
    const decryptedMessage = decryptCipher(encryptedText.toUpperCase());
    const caesarDecrypted = caesarDecrypt(decryptedMessage.toUpperCase(), caesarShift);
    setDecryptedText(decryptedMessage);
    setCaesarDecryptedText(caesarDecrypted);
  };


  const handleClick = () => {
    alert('INAMO');
  };

  return (
    <div className="card" style={{marginLeft: '225px', marginRight: '200px' , border: 'none'}}>
      <h2 className="card-header" style={{ fontWeight: '800',backgroundColor: 'white' }}>AFFINE CIPHER & CAESAR CIPHER</h2>
      <div className="card-body">
        <h5 className="card-title">Affine Cipher</h5>
        <p className="card-text">
          The Affine cipher is a type of monoalphabetic substitution cipher, wherein each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter. The formula used means that each letter encrypts to one other letter, and back again, meaning the cipher is essentially a standard substitution cipher with a rule governing which letter goes to which. <br/>
          The whole process relies on working modulo m (the length of the alphabet used). In the affine cipher, the letters of an alphabet of size m are first mapped to the integers in the range 0 … m-1. <br/>
          The ‘key’ for the Affine cipher consists of 2 numbers, we’ll call them a and b. The following discussion assumes the use of a 26 character alphabet (m = 26). a should be chosen to be relatively prime to m (i.e. a should have no factors in common with m).
        </p>
        <h6 className="" style={{ textAlign: 'center' }}>Image here</h6>
        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Encryption</h6>
        <p className="card-text">
          It uses modular arithmetic to transform the integer that each plaintext letter corresponds to into another integer that corresponds to a ciphertext letter. The encryption function for a single letter is<br />
        </p>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span style={{ fontWeight: '600' }}>E(x) = (ax + b) mod m</span><br />
            <span>Modulus m: size of the alphabet</span><br />
            <span>a and b: key of the cipher.</span><br />
            <span>a must be chosen such that a and m are coprime.</span>
          </div>
        </div>
        <br/>
        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Decryption</h6>
        <p className="card-text">
          In deciphering the ciphertext, we must perform the opposite (or inverse) functions on the ciphertext to retrieve the plaintext. Once again, the first step is to convert each of the ciphertext letters into their integer values. The decryption function is  <br />
        </p>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span style={{ fontWeight: '600' }}>D ( x ) = a^-1 ( x - b ) mod m</span><br />
            <span>a^-1 : modular multiplicative inverse of a modulo m. i.e., it satisfies the equation 1 = a a^-1 mod m .</span><br />
          </div>
        </div>
        <p className="card-text">
          <span>We need to find a number x such that: </span><br/> 
          <span>
            If we find the number x such that the equation is true, then x is the inverse of a, and we call it a^-1. The easiest way to solve this equation is to search each of the numbers 1 to 25, and see which one satisfies the equation.   
          </span>
        </p>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span style={{ fontWeight: '600' }}>[g,x,d] = gcd(a,m);  % we can ignore g and d, we dont need them</span><br />
            <span>x = mod(x,m);</span><br />
          </div>
        </div>
        <p className="card-text">
          If you now multiply x and a and reduce the result (mod 26), you will get the answer 1. Remember, this is just the definition of an inverse i.e. if a*x = 1 (mod 26), then x is an inverse of a (and a is an inverse of x) <br />
        </p>
        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Example:</h6>
        <h6 className="" style={{ textAlign: 'center' }}>Image here</h6>
        <div className="card" style={{ width: '32rem', border: 'none', margin: 'auto' }}>
            <textarea className=''
              value={plainText}
              onChange={(e) => setPlainText(e.target.value)}
              placeholder="Enter text to encrypt"
            /><br/>
            <button className="btn btn-success" onClick={handleEncrypt}>Encrypt</button>
            <p className="card-text">
              Encrypted Text: {encryptedText}
            </p>
          <button className="btn btn-danger" style={{backgroundColor: 'rgb(42,42,44)'}} onClick={handleDecrypt}>Decrypt</button>
            <p className="card-text">
              Decrypted Text: {decryptedText}
            </p>
        </div><hr/>
        

        <h5 className="card-title">Caesar Cipher</h5>
        <p className="card-text">  
        <div className="card-body">
  <ul>
    <li>
      <span>The Caesar cipher is a simple encryption technique that was used by Julius Caesar to send secret messages to his allies. It works by shifting the letters in the plaintext message by a certain number of positions, known as the “shift” or “key”.</span>
    </li>
    <li>
      <span>The Caesar Cipher technique is one of the earliest and simplest methods of encryption technique. It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.</span>
    </li>
    <li>
      <span>Thus to cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down.</span>
    </li>
    <li>
      <span>The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25. Encryption of a letter by a shift n can be described mathematically as.</span>
    </li>
    <li>
      <span>For example, if the shift is 3, then the letter A would be replaced by the letter D, B would become E, C would become F, and so on. The alphabet is wrapped around so that after Z, it starts back at A.</span>
    </li>
    <li>
      <span>Here is an example of how to use the Caesar cipher to encrypt the message “HELLO” with a shift of 3: <br/>
       1. Write down the plaintext message: HELLO<br/>
       2. Choose a shift value. In this case, we will use a shift of 3.<br/>
       3. Replace each letter in the plaintext message with the letter that is three positions to the right in the alphabet.<br/>
       </span>
    </li>
  </ul>
</div>

          <h6 style={{textAlign:'center'}}>
            H becomes K (shift 3 from H)<br/><br/>

            E becomes H (shift 3 from E)<br/><br/>

            L becomes O (shift 3 from L)<br/><br/>

            L becomes O (shift 3 from L)<br/><br/>

            O becomes R (shift 3 from O)<br/><br/>
          </h6>
          <div className='card=text'>
            4. The encrypted message is now “KHOOR”.
          </div>
          <ul>
            <li>
              <span>
                To decrypt the message, you simply need to shift each letter back by the same number of positions. In this case, you would shift each letter in “KHOOR” back by 3 positions to get the original message, “HELLO”.
              </span>
            </li>
          </ul>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto', textAlign:'center' }}>
          <div className="card-body">
            <span style={{ fontWeight: '600' }}>En(x) = (x+n)mod 26</span><br />
            <span>(Encryption Phase with shift n)</span><br /><br/>
            <span style={{ fontWeight: '600' }}>Dn(x)=(x-n)mod 26</span><br />
            <span>(Decryption Phase with shift n)</span><br />
          </div>
        </div>

        <h6 className="" style={{ textAlign: 'center' }}>Image here</h6><br/>
        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Example:</h6><br/>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto', paddingLeft: '10px'}}>
          <div className="card-body">
            <span>Text : ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
            <span>Shift : 23</span><br />
            <span>Cipher : XYZABCDEFGHIJKLMNOPQRSTUVW</span><br /><br/>
            <span>Cipher : XYZABCDEFGHIJKLMNOPQRSTUVW</span><br />
            <span>Shift: 4</span><br />
            <span>Cipher: EXXEGOEXSRGI</span><br /><br/>
          </div>
        </div>


        </p>
        <a href="#" className="btn btn-success" onClick={handleClick}>Try it yourself</a>
        <div className="card" style={{ width: '32rem', border: 'none', margin: 'auto' }}>
      <textarea
        value={plainText}
        onChange={(e) => setPlainText(e.target.value)}
        placeholder="Enter text to encrypt"
      />
      <input
        type="number"
        value={caesarShift}
        onChange={(e) => setCaesarShift(parseInt(e.target.value))}
        placeholder="Enter Caesar shift value"
      />
      <button className="btn btn-success"  onClick={handleEncrypt}>Encrypt</button>
      <p>Encrypted Text: {caesarEncryptedText}</p>
      <button className="btn btn-danger" style={{backgroundColor: 'rgb(42,42,44)'}} onClick={handleDecrypt}>Decrypt</button>
      <p>Decrypted Text: {caesarDecryptedText}</p>
    </div>

  
      </div>
    </div>
  );
};

export default AffineCaesarPage;
