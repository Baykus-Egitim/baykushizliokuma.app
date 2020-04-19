var configs = [
  {
    exerciseId: "m1e1",
    startInfo: "",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m1e2",
    startInfo: "",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m1e3",
    startInfo: "",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m1e4",
    startInfo: "Ortadaki yeşil kısma odaklanarak sağdan ve soldan aynı anda genişleyerek çıkan harf ve rakamları gözümüzü sıçrama yaptırmadan aynı anda görüp okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "charType", label: "Karakter" },
    ],
  },
  {
    exerciseId: "m1e5",
    startInfo: "Ortadaki çizgiye odaklanarak aynı anda sağda ve solda çıkan kelime ve harfleri okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "angle", label: "Açı" },
      { id: "sweep", label: "Kaydırma" },
    ],
  },
  {
    exerciseId: "m1e6",
    startInfo: "Otadaki siyah çizgiye odaklanarak, genişleyen ve büyüyen diktörtgenin kenarlarında çıkan harf-kelime ve rakamları görüp okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "charType", label: "Karakter" },
    ],
  },
  {
    exerciseId: "m1e7",
    startInfo: "Ekranda aynı anda çıkan ve uzaklaşarak değişen harf-kelime ve rakamları ortaya bakarak görüp okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "charType", label: "Karakter" },
      { id: "split", label: "Harf Ayır" },
    ],
  },
  {
    exerciseId: "m2e1",
    startInfo: "Karenin köşelerinde belli hızlarda çıkan harf-kelime ve rakamları çıkış hızında başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip edip görmeye ve okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "charType", label: "Karakter" },
    ],
  },
  {
    exerciseId: "m2e2",
    startInfo: "Ekranda hızla çıkan nesneleri çıkış hızında hep en son çıkan resmi başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip ederek görüp algılamaya çalışalım. Bu egzersiz gözümüzün takip hızını arttıracaktır.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "small", label: "Küçük Resim" },
    ],
  },
  {
    exerciseId: "m2e3",
    startInfo: "8 rakamının etrafında hareket eden okun ucunu takip edin.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m2e4",
    startInfo: "Ekranda farklı yönlere hareket eden OKU, özellikle okun ucunu başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip edin.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m2e5",
    startInfo: "Ekranda farklı yönlere hareket eden topu, başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip edin.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m2e6",
    startInfo: "Ekranda farklı şekillerde çıkan ve farklı yönlere hareket eden emojileri, başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip edin, ve hangi emojinin çıktığını görüp anlamaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m2e7",
    startInfo: "Ekranda farklı şekiller ve açılarda çıkan kelimeleri başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle takip edip okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "charType", label: "Karakter" },
    ],
  },
  {
    exerciseId: "m2e8",
    startInfo: "Ekranda karışık verilen harfleri (A'dan Z'ye kadar) ve rakamları (1'den 50'ye kadar) başınızı hiç oynatmadan sabit tutarak sadece gözlerinizle sırasıyla bulunuz. Son rakam yada harfi bulduğunuzda <kbd>Space</kbd> tuşuna basıp başarı sürenizi görün. Her tekrarınızda süreyi kısaltmaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "charType", label: "Karakter" },
      { id: "duration", label: "Süre" },
    ],
  },
  {
    exerciseId: "m2e9",
    startInfo: "Ekranda çıkan metindeki kırmızı çerçeveli kutuları başınızı oynatmadan sadece gözünüzle takip edin ve kutu içindeki kelimeleri okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
    ],
  },
  {
    exerciseId: "m3e1",
    startInfo: "Ekranda çıkan kelimeleri hızlı bir şekilde okuyun. Kelimeler birbiriyle aynı ise sol tuşa, farklı ise sağ tuşa basınız.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "duration", label: "Süre" },
    ],
  },
  {
    exerciseId: "m3e2",
    startInfo: "Bu egzersizimizde size verilen sürede, sizden istenilen harf ve sayıları ekrandaki harf-sayı dizininde kaç tane olduğunu bulup yazmaya çalışılınız.",
    stats: [
      { id: "date", label: "Tarih" },
      // { id: "speedLevel", label: "Süre" },
      { id: "level", label: "Seviye" },
      { id: "duration", label: "Süre" },
      { id: "score", label: "Doğru/Yanlış" },
    ],
  },
  {
    exerciseId: "m3e3",
    startInfo: "Ekranın ortasındaki renkli yuvarlağa bakarak, etrafında çıkan tüm harf ve rakamları görüp algılamaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Süre" },
      { id: "level", label: "Seviye" },
      { id: "charType", label: "Karakter" },
    ],
  },
  {
    exerciseId: "m3e4",
    startInfo: "Hız ve seviye seçerek ekranda hızla çıkan kelime ve sayıları doğru bir şekilde okumaya çalışalım ve aşağıdaki kutuya yazalım. Doğru sayısı 10'u bulduğunda egzersiz tamamlanmış olacaktır.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Süre" },
      { id: "level", label: "Seviye" },
      { id: "score", label: "Başarı" },
    ],
  },
  {
    exerciseId: "m3e5",
    startInfo: "Ekranda çıkan sayı dizinleri içinde sizden istenilen rakamları verilen sürede bulup yazınız.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "duration", label: "Süre" },
      // { id: "speedLevel", label: "Süre" },
      { id: "score", label: "Doğru/Yanlış" },
    ],
  },
  {
    exerciseId: "m3e6",
    startInfo: "Üsteki satırda hızlıca çıkan cümleleri okumaya çalışın, doğru okuyup okumadığınızı alttaki satırda kontrol ediniz.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Süre" },
      { id: "level", label: "Seviye" },
    ],
  },
  {
    exerciseId: "m3e7",
    startInfo: "Orta kısma odaklanarak sağdaki ve soldaki satırlarda çıkan kelime ve cümleleri aynı anda görüp okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Süre" },
      { id: "level", label: "Seviye" },
    ],
  },
  {
    exerciseId: "m3e8",
    startInfo: "Ekrandaki sayı/harf dizinleri içerisinden farklı olanları bulup adedini yazınız.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "game", label: "Oyun" },
      { id: "level", label: "Seviye" },
      { id: "score", label: "Doğru/Yanlış" },
      { id: "duration", label: "Süre" },
    ],
  },
  {
    exerciseId: "m4e1",
    startInfo: "Ekranda çıkan metinde, kelime sayısı ve hız seçerek turkuaz gölgelemeleri takip edin ve okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
  },
  {
    exerciseId: "m4e2",
    startInfo: "Kelime sayısı ve hız seçerek ekrandaki kelimeleri okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
  },
  {
    exerciseId: "m4e3",
    startInfo: "Kelime sayısı ve hız seçerek ekranda tek satır olarak çıkan metni okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
  },
  {
    exerciseId: "m4e4",
    startInfo: "Ekranın farklı yerlerinde farklı açılarda çıkan kelimeleri okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
    ],
  },
  {
    exerciseId: "m4e5",
    startInfo: "Turkuaz renk ile gölgeleme yapılmış satırları takip ederek okumaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "schema", label: "Şekil" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
  },
  {
    exerciseId: "m5e1",
    startInfo: "Hız, Seviye(yani sütun sayısı) ve metin seçerek ekranda1-2 ve 3 sütun halinde, tek satır tek satır çıkan metni okuyup anlamaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [1600, 1400, 1200, 1000, 800, 600],
    levels: [1, 2, 3]
  },
  {
    exerciseId: "m5e2",
    startInfo: "Hız ve metin seçerek ekrana gelen parçayı, satır arasında sekme yapan kırmızı noktayı takip ederek okumaya çalışalım. Buradaki amaç satır arasından gözümüze sıçrama yaptırmak ve bloklayarak okumaya çalışmaktır.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [1200, 1000, 800, 600, 400, 200],
  },
  {
    exerciseId: "m5e3",
    startInfo: "Bu çalışma bir tam satır okuma çalışmasıdır. Hız, seviye ve metin seçerek, ekranda 2-3 ya da 4 satır halinde koyu renkte belirtilen yazıları okumaya çalışalım. ",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [2000, 1800, 1600, 1400, 1200, 1000],
    levels: [1, 2, 3]
  },
  {
    exerciseId: "m5e4",
    startInfo: "Bu çalışma ilk 3 son 3 kelime çalışmasıdır. Burada hız ve seviye seçerek satır arasında 2,3.ya da 4. Kelimeden başlayıp yine satır sonunda sondan 2,3. ya da 4. Kelimede son bulan kırmızı çizgiyi takip ederek tüm satırdaki kelimeleri okumaya çalışın. Kırmızı çizgi satırın başında hangi kelimede başlar ya da satırın sonunda hangi kelimede bitse bile biz tüm satırı okumaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [3000, 2600, 2200, 1800, 1600, 1200],
    levels: [1, 2, 3]
  },
  {
    exerciseId: "m5e5",
    startInfo: "Hız, seviye ve metin seçerek, ekranın ortasındaki yeşil noktanın üstünde çıkan kelime ve kelime guruplarını görüp okumaya çalışalım. Buradaki amaç yeşil noktaya odaklanıp onun üstünde çıkan yazıları okuyup algılamaktır.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [1400, 1200, 1000, 800, 600, 400],
    levels: [1, 2, 3]
  },
  {
    exerciseId: "m5e6",
    startInfo: "Bu çalışmamızda hız ve metin seçerek ekranda çerçeve içinde tam satır şeklinde akan/çıkan metni okuyup anlamaya çalışalım.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [160, 140, 120, 100, 90, 80],
  },
  {
    exerciseId: "m5e7",
    startInfo: "Bu egzersiz satır başı, satır sonu göz sıçratma ve okuma çalışmasıdır. Hız ve seviye seçerek satırın başında ve sonunda turkuaz renkte gölgeleme yapılan 1’li 2’li 3’lü ve 4’lü kelime ve kelime guruplarını okumaya çalışalım. Buradaki amaç sadece satırın başında ve sonunda belirtilen kelimeleri gözümüzü sıçrama yaptırarak okumaktır. Onun dışında satır arasındaki kelimeleri okuma çalışmayınız.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
    ],
    durations: [1200, 1000, 800, 600, 400, 200],
    levels: [1, 2, 3]
  },
  {
    exerciseId: "m5e8",
    startInfo: "Bu egzersizimizde hız, seviye ve gösterim şekli seçerek ekrana gelen metni okumaya çalışın. Burada ne kadar hızlı ve ne kadar çok kelimeli bloklama yaparsanız sizin için o derece faydalı olacaktır. Tüm gösterim şekillerinde bolca tekrar yapmaya çalışın.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "speedLevel", label: "Hız" },
      { id: "level", label: "Seviye" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" }
    ],
    durations: [1000, 800, 600, 400, 200, 100],
    levels: [1, 2, 3, 4]
  },
  {
    exerciseId: "m6e1",
    startInfo: "Bu son çalışma modülümüzdeki egzersizler size program tarafından bir ritim/hız yada 'gölgeleme-eşleştirme-guruplama-bloklama' animasyonu verilmeden, sizin serbest olarak yapmanız gereken okuma çalışmalarından oluşmaktadır. 1.Egzersizimizde bir metin seçin ve şimdiye kadar öğrendiğiniz göz hareket-sıçrama hareketleri ve okuma tekniklerini kullanarak hızlı bir şekilde metni okuyun ve metin sonundaki soruları doğru bir şekilde cevaplamaya çalışınız. Soruları cevapladıktan sonra okuma hızınız ve anlama oranınızla birlikte okuduğunuz metindeki anahtar kelimeler ve 5N1K sonuçları size verilecektir.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" },
      { id: "score", label: "Anlama" },
    ],
  },
  {
    exerciseId: "m6e2",
    startInfo: "2.Egzersizimizde seçtiğiniz metin size 2 sütun şeklinde gelecektir. Sütunların ortasındaki çizgiyi takip ederek tüm satırdaki kelimeleri görüp okumaya çalışın. Gözlerinizi mümkün olduğunca sağa ve sola hareket ettirmeyin; aşağıya doğru inen çizgiye odaklanın ve tüm sayfayı okumaya çalışın. Ekrana gelen sayfayı okuduktan sonra sonraki sayfa tuşuna basarak elerleyiniz. Metin sonundaki soruları doğru bir şekilde cevaplamaya çalışınız. Soruları cevapladıktan sonra okuma hızınız ve anlama oranınızla birlikte okuduğunuz metindeki anahtar kelimeler ve 5N1K sonuçları size verilecektir.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" },
      { id: "score", label: "Anlama" },
    ],
  },
  {
    exerciseId: "m6e3",
    startInfo: "3.Egzersizimizde seçtiğiniz metin size 2 sütun şeklinde gelecektir. Sütunların ortasındaki 'S' çizgisini takip ederek tüm satırdaki kelimeleri görüp okumaya çalışın. Gözlerinizi mümkün olduğunca sağa ve sola hareket ettirmeyin ve 'S' çizgisine odaklanın ve tüm sayfayı okumaya çalışın. Ekrana gelen sayfayı okuduktan sonra sonraki sayfa tuşuna basarak elerleyiniz. Metin sonundaki soruları doğru bir şekilde cevaplamaya çalışınız. Soruları cevapladıktan sonra okuma hızınız ve anlama oranınızla birlikte okuduğunuz metindeki anahtar kelimeler ve 5N1K sonuçları size verilecektir.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" },
      { id: "score", label: "Anlama" },
    ],
  },
  {
    exerciseId: "m6e4",
    startInfo: "4.Egzersizimizde seçtiğiniz metin size 2 sütun şeklinde gelecektir. Sütunların ortasındaki 'Z' çizgisini takip ederek tüm satırdaki kelimeleri görüp okumaya çalışın. Gözlerinizi mümkün olduğunca sağa ve sola hareket ettirmeyin ve 'Z' çizgisine odaklanın ve tüm sayfayı okumaya çalışın. Ekrana gelen sayfayı okuduktan sonra sonraki sayfa tuşuna basarak elerleyiniz. Metin sonundaki soruları doğru bir şekilde cevaplamaya çalışınız. Soruları cevapladıktan sonra okuma hızınız ve anlama oranınızla birlikte okuduğunuz metindeki anahtar kelimeler ve 5N1K sonuçları size verilecektir.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "textTitle", label: "Metin" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" },
      { id: "score", label: "Anlama" },
    ],
  },
  {
    exerciseId: "m6e5",
    startInfo: "5.Egzersizimize 'Satır Başı Satır Sonu Okuması' yada 'İlk 3 Son 3 Kelime Okuması' da diyebiliriz. Seçtiğiniz seviyede satırın başındaki çizgiden gözlerinizi hareket ettirin ve satırın sonundaki çizgide göz hareketinizi durdurun. Buradaki amaç göz hareket alanımızı daraltmak okuma alanımızı genişletmektir. Başlangıç çizgisinin solundaki ve bitiş çizgisinin sağındaki kelimeleride gözümüzün yan görme alanlarıyla'periferik alan' görüp okumamız gerekir. İşte 1.modüldeki tüm egzersizler bu alanı çalıştırır ve bu tarz/şekil okumamıza fayda sağlar. Seviyenizi arttırarak ilerleyin ve görme alanınızı daraltıp okuma alanınızı genişletmeye çalışınız. Ne kadar az kelime üzerinde göz hareketi yapıp tüm satırı okursanız o kadar başarılı olmuş olursunuz.",
    stats: [
      { id: "date", label: "Tarih" },
      { id: "textTitle", label: "Metin" },
      { id: "level", label: "Seviye" },
      { id: "readSpeed", label: "Okuma Hızı (K/D)" },
      { id: "score", label: "Anlama" },
    ],
    levels: [1, 2, 3, 4]
  },
]

const assert = require("assert")
const mongoClient = require("mongodb").MongoClient
const mongodbUrl = 'mongodb://127.0.0.1:27017/baykushizliokuma';
mongoClient.connect(mongodbUrl, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
  assert.equal(null, err);
  db = client.db("baykushizliokuma");
  db.collection("configs").drop()
  db.collection("configs").insertMany(configs, function (err, result) {
    console.log(result)
    client.close()
  })
  console.log("Connected successfully to database");
});