
 export async function alltourapidata() {
    const res = await fetch("http://localhost:3000/api.json");
    return res.json();
  }
  