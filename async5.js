function fakeRequest(name, delay, willFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFail) {
        reject(`${name} başarısız oldu.`);
      } else {
        resolve(`${name} tamamlandı`);
      }
    }, delay);
  });
}

function timeOut(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject("Zaman alımı!"), ms);
  });
}

async function run() {
  console.log("1: Başlatıldı");

  try {
    const sonuc = await Promise.race([
      fakeRequest("İstek-1", 202),
      fakeRequest("İstek-2", 201),
      timeOut(4300),
    ]);

    console.log("Kazanan:", sonuc);
  } catch (err) {
    console.log("hata", err);
  } finally {
    console.log("\n2 Yarış Bitti!");
  }
}

run();
