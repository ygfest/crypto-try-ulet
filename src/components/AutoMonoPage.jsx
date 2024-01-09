import React from 'react';

const handleClick = () => {
  alert('INAMO');
}

const AutoMonoPage = () => {
  return ( 
    <div className="card">
      <h2 className="card-header" style={{ fontWeight: '800' }}>AUTOKEY CIPHER & MONOALPHABETIC CIPHER</h2>
      <div className="card-body">
        <h5 className="card-title">Autokey Cipher</h5>
        <p className="card-text">
          <span style={{fontWeight: 'bold'}}>Autokey Cipher</span> is a polyalphabetic substitution cipher. It is closely related to the Vigenere cipher but uses a different method of generating the key. It was invented by Blaise de Vigenère in 1586. In general, more secure than the <u>Vigenere cipher</u>.
        </p>
        <h6 className="" style={{ textAlign: 'center' }}>Image here</h6>
        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Example #1:</h6>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span>Plaintext = "HELLO"</span><br />
            <span>Autokey = N</span><br />
            <span>Ciphertext = "ULPWZ" </span><br />
          </div>
        </div><br/>

        <h6 className="" style={{ textAlign: 'center', fontWeight: '600' }}>Example #1:</h6>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span>Plaintext = "GEEKSFORGEEKS"</span><br />
            <span>Autokey = P</span><br />
            <span>Ciphertext = "VKIOCXTFXKIOC" </span><br />
          </div>
        </div><br/>
        <p className="card-text" style={{textAlign: 'center'}}>In this cipher, the key is a stream of subkeys which is used to encrypt the corresponding character in the plaintext.</p>
        <h6 className="" style={{ textAlign: 'center' }}>Image here</h6>
        <p className="card-text" style={{textAlign: 'center'}}>As shown, the autokey is added at the first of the subkeys.</p>
        <div className="card" style={{ width: '32rem', backgroundColor: 'rgb(200,200,200)', border: 'none', margin: 'auto' }}>
          <div className="card-body">
            <span>Let's explain Example 1:</span><br /><br/>
            <span>Given plain text is : H E L L O</span><br />
            <span>Key is              : N H E L L </span><br /><br/>
            <span>Plain Text(P)       : H   E   L   L   O</span><br /><br/>
            <span>Corresponding Number: 7   4   11  11  14   </span><br />
            <span>Applying the formula: 20  11  15  22  25  </span><br /><br/>
            <span>Plain Text(P)       : H   E   L   L   O</span><br /><br/>
            <span>Corresponding</span><br />
            <span>Letters are         : U    L   P   W   Z</span><br /><br/>
            <span>Hence Ciphertext is: ULPWZ</span><br />
            <span>Let's decrypt:</span><br /><br/>
            <span>Cipher Text(C)      : U   L   P   W   Z</span><br /><br/>
            <span>Key(K)              : N   H   E   L   L</span><br />
            <span>---------------------</span><br /><br/>
            <span>Applying the formula: H   E   L   L   O</span><br /><br/>
            <span>Key(K)              : N   H   E   L   L</span><br />
            <span>Hence Plaintext is: HELLO </span><br /><br/>
          </div>
        </div>
        

        <h5 className="card-title">Monoalphabetic Cipher</h5>
        <p className="card-text">A type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.</p>
        <a href="#" className="btn btn-success" onClick={handleClick}>Try it yourself</a>
      </div>
    </div>
  )
}

export default AutoMonoPage;
