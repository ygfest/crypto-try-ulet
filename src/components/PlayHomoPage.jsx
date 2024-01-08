import React from 'react'
const handleClick = () => {
  alert('WALA PA');
}
const PlayHomoPage = () => {
  return (
    <div class="card">
    <h2 className="card-header" style={{ fontWeight: '800' }}>PLAYFAIR CIPHER & HOMOPHONIC CIPHER</h2>
    <div class="card-body">
      <h5 class="card-title">Playfair Cipher</h5>
      <p class="card-text">A type of substitution cipher where each letter in the plaintext is mapped to its numeric equivalent, manipulated by a mathematical function, and converted back to a letter.</p>
      <h5 class="card-title">Homophonic Cipher</h5>
      <p class="card-text">A type of substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet.</p>
      <a href="#" className="btn btn-success" onClick={handleClick}>Try it yourself</a>
    </div>
  </div>
  )
}

export default PlayHomoPage;