import React from 'react'

function Kontakt() {
  const [kontaktPealkiri, setKontaktPealkiri] = React.useState("Kontakt");
  const [aadress, maaraAadress] = React.useState("Tallinn");
  const [telefon, maaraTelefon] = React.useState("5512345");
  const [email, maaraEmail] = React.useState("example@mail.com");
  const [ingliseKeelne, seaIngliseKeelne] = React.useState("ei");

  function muuda() {
    setKontaktPealkiri("Contact");
    maaraAadress("City of Tallinn");
    maaraTelefon("+372 5512345");
    maaraEmail("anotherxample@mail.com");
    seaIngliseKeelne("jah");
  }

  return (
    <div>
        <h1>{kontaktPealkiri}</h1>
        <p>{aadress}</p>
        <p>{telefon}</p>
        <p>{email}</p>
        {ingliseKeelne === "ei" && <button onClick={muuda}>Muuda inglise keelseks</button>}
        { ingliseKeelne === "jah" && <div>The page is now in English</div>}
    </div>
  )
}

export default Kontakt