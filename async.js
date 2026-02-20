async function getData() {
  console.log("1) İstekler başlatılıyor...");

  try {
    const [userResponse, postResponse] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
    ]);

    if (!userResponse.ok || !postResponse.ok) {
      throw new Error("API isteklerinden biri başarısız oldu");
    }

    const user = await userResponse.json();
    const post = await postResponse.json();

    console.log("2) Kullanıcı verisi:", user);
    console.log("3) Gönderi verisi:", post);
  } catch (err) {
    console.log("4) Hata:", err.message);
  }

  console.log("5) İşlem tamamlandı");
}

getData();
