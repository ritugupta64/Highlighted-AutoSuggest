export function PostData(userDetails) {
  return new Promise((resolve, reject) => {
    fetch("https://swapi.co/api/people", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    })
      .then(response => response.json())
      .then(rj => {
        resolve(rj);
      })
      .catch(err => {
        reject(err);
      });
  });
}
