async function getData() {
  console.log("1: Birden fazla istek gönderiliyor.");

  const userReq = fetch("https://jsonplaceholder.typicode.com/users/1");
  const postReq = fetch("https://jsonplaceholder.typicode.com/posts/1");
  const wrongReq = fetch("https://jsonplaceholder.typicode.com/wrong-url");

  const resaults = await Promise.allSettled([userReq, postReq, wrongReq]);

  console.log("2: Sonuçlar");

  for (let i = 0; i < resaults.length; i++) {
    const result = resaults[i];

    if (result.status === "fulfilled") {
      const response = result.value;

      if (!Response.ok) {
        console.log(`${i + 1}. istek HTTP hatası: ${response.status}`);
      } else {
        console.log(
          `${i + 1}. istek başarıyla tamamlandı (${response.status})`,
        );
      }
    } else {
      console.log(` ${i + 1}. istek  REJECT oldu:`, result.reason.message);
    }
  }
  console.log("3: işlem tamamlandı");
}

getData();
