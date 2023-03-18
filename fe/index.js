const getBlog = () => {
  try {
    fetch("http://localhost:3000", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((elem) => {
          $("#blogContent").append(
            ` 
              <div>
              <h3>${elem.title}</h3>
              <p>${elem.intro}</p>
              </div>
            `
          );
        });
      });
  } catch (error) {
    console.log(error);
  }
};

getBlog();
