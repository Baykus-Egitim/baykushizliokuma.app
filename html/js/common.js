// prototypes
Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

// modules
const modules = [
  "Aktif Görme Alanı Genişletme Egzersizleri",
  "Göz Sıçrama Egzersizleri",
  "Göz Odaklanma Egzersizleri",
  "Bloklama ve Gölgeleme Egzersizleri",
  "Hızlı Okuma Çalışmaları",
  "Okuma Anlama Çalışmaları"
]

// words
const words1 = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];
const words2 = ["AÇ", "AF", "AK", "AL", "AS", "AŞ", "AT", "AV", "AZ", "BU", "DO", "EK", "EL", "EN", "EŞ", "EV", "FA", "HE", "HU", "IR", "İÇ", "İL", "İP", "İŞ", "İZ", "JE", "JE", "LA", "MA", "Mİ", "NÜ", "OF", "OH", "OK", "ON", "OT", "OY", "ÖÇ", "ÖN", "ÖZ", "PE", "RA", "RE", "Sİ", "SU", "ŞU", "UÇ", "UN", "UR", "ÜÇ", "ÜS", "VE", "YE", "YO", "ZE"];
const words3 = ["ŞAM", "ŞEF", "ŞAL", "MAÇ", "MOR", "MUZ", "MUM", "NAL", "MİT", "NAZ", "ŞIK", "SÖZ", "SIR", "ŞUT", "ŞOV", "ŞİŞ", "SOL", "SEL", "SAÇ", "SAF", "RUM", "RUJ", "RUS", "RUH", "SAZ", "PES", "PİL", "PÜF", "POZ", "ÜST", "PİS", "ZOR", "ZIT", "ZİL", "ULU", "ULA", "ÜTÜ", "ZAR", "YER", "ZAM", "YOL", "YÖN", "YOK", "YAŞ", "YAT", "YEM", "ANI", "VIZ", "VAY", "VAR", "YÜZ", "ALP", "ARA", "ALİ", "AMA", "BEN", "BEZ", "BİZ", "BOL", "BOŞ", "BOT", "CAM", "CAM", "CAN", "CAZ", "CEM", "CİN", "DAL", "DAR", "DEV", "DIŞ", "DİŞ", "DON", "DÜŞ", "DÜZ", "ECE", "EDA", "EFE", "EGE", "ELA", "ETİ", "FAN", "FAR", "FAY", "FEN", "FİL", "FÖN", "GAF", "GOL", "GÖK", "GÖL", "GRİ", "GÜR", "GÜZ", "HAÇ", "HAK", "HAZ", "HEP", "HİS", "HOP", "HUY", "IRK", "IRZ", "ISI", "İKİ", "İLE", "İLK", "İRİ", "İYİ", "JEL", "JET", "JÖN", "KAÇ", "KAN", "KAR", "KEL", "KIZ", "KİM", "KİM", "KİN", "LAF", "LAV", "LAZ", "LEŞ", "LOR", "LOŞ", "NEM", "NİL", "NUH", "OBA", "ODA", "OJE", "OVA", "OYA", "ÖCÜ", "ÖGE", "ÖRF", "ÖRS", "ÖTE"];
const words4 = ["ACİL", "ADAM", "ADIM", "AKÇE", "AKNE", "ANNE", "ARPA", "ASİT", "AVCI", "AMCA", "AKSİ", "AĞAÇ", "AĞIT", "AÇIK", "ABLA", "BABA", "BALO", "BAZI", "BETA", "BANK", "BANT", "BORA", "BALE", "BORÇ", "BOZA", "BÜFE", "BUSE", "BURS", "BURÇ", "BİGA", "CİRO", "CAMİ", "CADI", "CENK", "CEZA", "CİLA", "CUMA", "CÜCE", "CİLT", "CİNS", "DOST", "DOKU", "DEDE", "DİNÇ", "DANA", "DERS", "ETÜT", "ESKİ", "ESAS", "ELİF", "EĞİK", "EBRU", "FAKS", "FİDE", "FORM", "FOBİ", "FÜZE", "FOÇA", "GECE", "GİŞE", "GRUP", "GÜYA", "GİBİ", "GÖMÜ", "HOCA", "HECE", "HİLE", "HALK", "HARF", "HOBİ", "ITIR", "ITRİ", "ILIK", "IŞIK", "IŞIN", "İADE", "İKON", "İLAÇ", "İMZA", "İYOT", "İZİN", "JALE", "JANT", "JÜRİ", "JÖLE", "KALE", "KALP", "KASK", "KİVİ", "KOCA", "KÖTÜ", "LİRA", "LİSE", "LÜKS", "LEKE", "LOCA", "LOGO", "MODA", "MERT", "MONT", "MÜZE", "MOLA", "MAAŞ", "NORM", "NİNE", "NEŞE", "NENE", "NAİL", "OBEZ", "OFİS", "ORDU", "OYUN", "ORUÇ", "ÖDEV", "ÖFKE", "ÖĞLE", "ÖYKÜ", "ÖVGÜ", "PARA", "PARK", "PRİZ", "PİRE", "PLAK", "RİCA", "RIZA", "RÜYA", "RİZE", "RULO", "SÜRE", "STOP", "SORU", "SİTE", "SADE", "ŞARJ", "ŞANS", "ŞİİR", "ŞİŞE", "ŞİFA", "TOST", "TURP", "TÖRE", "TEST", "TAZE", "UZUN", "URLA", "USTA", "UYDU", "UĞUR", "ÜZÜM", "ÜNYE", "ÜÇÜZ", "ÜLKE", "ÜMİT", "VAGON", "VATAN", "VAPUR", "VİNÇ", "VİDA", "VEBA", "YURT", "YUVA", "YAŞA", "YAYA", "YENİ", "ZEVK", "ZİYA", "ZULA", "ZARF"];
const words5 = ["ABİYE", "ACEMİ", "AĞMAK", "AKTÖR", "ANTEN", "ARIZA", "AŞURE", "AYRAN", "ATARİ", "AMPER", "AROMA", "AKREP", "AHKAM", "ADANA", "ACELE", "BAHİS", "BEYAZ", "BULUT", "BURSA", "BÜTÇE", "BÜCÜR", "BUTİK", "BETON", "BIÇAK", "BOYUN", "BIYIK", "BÖCEK", "BİLET", "BEYİN", "BAMBU", "CAHİL", "CEKET", "CÜMLE", "CASUS", "CİĞER", "CEVİZ", "CEREN", "CEMAL", "CANAN", "CADDE", "DAYAK", "DAVUL", "DİKİŞ", "DİZEL", "DOLAP", "DÜDEN", "EZBER", "EYVAH", "ESNAF", "ENDER", "EMTİA", "EKSEN", "FAKİR", "FELEK", "FIRIN", "FİŞEK", "FOLYO", "FUNDA", "GEÇİT", "GAZOZ", "GIDIK", "GİTME", "GİYSİ", "GÖLGE", "HACİZ", "HALKA", "HARAÇ", "HAPİS", "HATAY", "HELVA", "IĞDIR", "IRKÇI", "IRGAT", "ILGAZ", "ISLAK", "İSRAF", "İZMİR", "İŞGAL", "İNCİR", "İKRAM", "İDMAN", "JETON", "JİLET", "JOKER", "KABAN", "KAHVE", "KALIP", "KARGO", "KAVAK", "KAYAK", "LADES", "LAMBA", "LEĞEN", "LİMON", "LÜGAT", "LODOS", "MADEN", "MAZOT", "MELEK", "MESAJ", "MANGO", "MAKAS", "NUTUK", "NİKAH", "NİĞDE", "NOHUT", "NEHİR", "NAZAR", "OĞLAK", "ORMAN", "OYMAK", "OTLAK", "OPERA", "ÖZNEL", "ÖRGÜT", "ÖZGÜR", "ÖZLEM", "ÖTEKİ", "PANDA", "PAMUK", "PAZAR", "PERDE", "PİLOT", "ROBOT", "RADYO", "RAMPA", "REÇEL", "RUMUZ", "SABAH", "SAKAL", "SALÇA", "SEBZE", "SİNİR", "ŞAFAK", "ŞİŞKO", "ŞÖYLE", "ŞÜPHE", "ŞÖFÖR", "TAKİP", "TAKLA", "TAKIM", "TAKSİ", "TABAK", "UKALA", "UTANÇ", "UYGUR", "ULEMA", "UCUBE", "ÜÇGEN", "ÜNLEM", "ÜNİTE", "ÜSTAT", "ÜSLUP", "VÜCUT", "VİTES", "VİŞNE", "VİRÜS", "VERGİ", "VENÜS", "YÜZÜK", "YUFKA", "YILAN", "YERLİ", "YAVUZ", "ZAMİR", "ZAFER", "ZEHİR", "ZEKAT", "ZENCİ"];
const words6 = ["ABAKÜS", "AÇILIM", "ADALET", "AFACAN", "ALABAŞ", "ANKARA", "APOLET", "ANAMUR", "ANASON", "AKBABA", "ALERJİ", "AKASYA", "AFERİN", "AÇELYA", "ACAYİP", "BAHŞİŞ", "BASKET", "BAŞBUĞ", "BEYKOZ", "BİLGİN", "BOYKOT", "BOKSÖR", "BOŞNAK", "BORNOZ", "BEDAVA", "BENCİL", "BAYRAK", "BASINÇ", "BALKON", "BAĞLAÇ", "CAMGÖZ", "CAZİBE", "CENNET", "CÜZDAN", "CENAZE", "CUMHUR", "CİKLET", "CEMİLE", "CETVEL", "CERRAH", "DÜZGÜN", "DÜELLO", "DÖRTLÜ", "DİŞLEK", "DİSKET", "DÜZLEM", "ECZANE", "EĞİTİM", "ELAZIĞ", "ENİŞTE", "ESKİCİ", "EVLİYA", "FUTBOL", "FORMÜL", "FİZİKİ", "FİNİKE", "FAYTON", "FANİLA", "GALERİ", "GEMİCİ", "GEZGİN", "GİRDAP", "GÖÇMEN", "GÖMLEK", "HANGAR", "HATIRA", "HAYDUT", "HERKES", "HIRÇIN", "HİMAYE", "ISICAM", "IZGARA", "IŞILAK", "ILIMLI", "İĞRENÇ", "İLGİNÇ", "İNCESU", "İPOTEK", "İSTİLA", "İTİRAZ", "JAGUAR", "JÜBİLE", "JETSKİ", "KADİFE", "KAKTÜS", "KANTAR", "KAPARO", "KARBON", "KASKET", "LAKTOZ", "LAHANA", "LEOPAR", "LİSANS", "LÜTFEN", "LÖSEMİ", "MEŞHUR", "MEKTEP", "MAYMUN", "MANUEL", "MAKARA", "MACERA", "NUMARA", "NORMAL", "NİSPET", "NEVZAT", "NEŞTER", "NETİCE", "ORKİDE", "ONBAŞI", "OMURGA", "ODUNCU", "OFSAYT", "ÖDEMİŞ", "ÖFKELİ", "ÖRTBAS", "ÖZVERİ", "ÖZENİŞ", "PIRASA", "PARFÜM", "PANJUR", "PASPAS", "PEKİYİ", "RAHMET", "REHBER", "RİZELİ", "RÜZGAR", "RÖVANŞ", "SÜZGEÇ", "SÜNGER", "SULTAN", "SOHBET", "SARHOŞ", "ŞAHSEN", "ŞARKÖY", "ŞIRNAK", "ŞERBET", "ŞOVMEN", "TAHLİL", "TAKDİM", "TARÇIN", "TARSUS", "TEBRİK", "ULUBEY", "UŞAKLI", "USTURA", "UYUŞUK", "UZAYLI", "ÜTOPİK", "ÜŞENME", "ÜRETİM", "ÜLKÜCÜ", "ÜROLOG", "VOLTAJ", "VİZYON", "VİTRİN", "VİRGÜL", "VALİDE", "VESİKA", "YÜZGEÇ", "YÖNTEM", "YOKSUL", "YENGEÇ", "YARGIÇ", "ZAMBAK", "ZABITA", "ZÜRAFA", "ZİMMET", "ZEYTİN"];
const words7 = ["AŞÇILIK", "AYAKUCU", "ASPİRİN", "AYVACIK", "ASOSYAL", "AYRINTI", "AZINLIK", "AVCILAR", "ASİMİLE", "AVOKADO", "AYDINLI", "ATILGAN", "ASANSÖR", "ATASÖZÜ", "AVANTAJ", "BABAEVİ", "BAĞLAMA", "BANKACI", "BEYOĞLU", "BİREBİR", "BAHRİYE", "BEKARET", "BİBERON", "BATARYA", "BAZLAMA", "BAŞIBOŞ", "BARIŞÇI", "BALÇOVA", "BAHÇELİ", "BACANAK", "CAMEKAN", "CANAVAR", "CÜSSELİ", "COĞRAFİ", "CİNAYET", "CİĞERCİ", "CEPHANE", "CEMİYET", "CEHALET", "CADALOZ", "DOKÜMAN", "DOMATES", "DÖRTGEN", "DÖVÜŞÇÜ", "DUYUSAL", "DÜZMECE", "EFENDİM", "EKONOMİ", "ELMACIK", "EMLAKÇI", "ENTEGRE", "EROZYON", "FAKÜLTE", "FENOMEN", "FIRINCI", "FİRAVUN", "FONETİK", "FİZİKÇİ", "GENÇLİK", "GEZEGEN", "GIYABEN", "GİZEMLİ", "GÖRGÜLÜ", "GÖZETİM", "HAKARET", "HALKALI", "HASILAT", "HAVADİS", "HELVACI", "HENTBOL", "ISTAKOZ", "ISITICI", "IRGAMAK", "IHLAMUR", "ISIRGAN", "İADESİZ", "İHTİMAM", "İHTİYAÇ", "İLKOKUL", "İNEBOLU", "İNZİBAT", "JAPONCA", "JENERİK", "JEOLOJİ", "JÜPİTER", "KABURGA", "KADIKÖY", "KALAMAR", "KAMELYA", "KAMUSAL", "KARADUT", "LANGIRT", "LEBLEBİ", "LİMUZİN", "LİBERAL", "LOKANTA", "LEFKOŞA", "MAGAZİN", "MAVİMSİ", "MENTEŞE", "MEDRESE", "MARATON", "MALTEPE", "NÜKLEER", "NÖBETÇİ", "NİLÜFER", "NEZAKET", "NAKLİYE", "NAZİLLİ", "OKSİJEN", "OLUMSUZ", "ONURSAL", "OSMANLI", "OTOPARK", "ÖKSÜRME", "ÖLÇÜSÜZ", "ÖRGÜTLÜ", "ÖVÜNMEK", "ÖZDEYİŞ", "PİRZOLA", "PLASTİK", "PÖTİBÖR", "PRENSES", "POZİTİF", "REALİST", "RAPSODİ", "RENKSİZ", "ROBOTİK", "REZALET", "SADEYAĞ", "SAMURAY", "SAPANCA", "SEMERCİ", "SEYİRCİ", "ŞÖBİYET", "ŞİMDİKİ", "ŞEVKSİZ", "ŞEHADET", "ŞAİBELİ", "TABANCA", "TAHLİYE", "TAMİRCİ", "TASFİYE", "TAVUKÇU", "ULUDERE", "USULSÜZ", "UYKUSUZ", "UZLAŞMA", "UZAKTAN", "ÜLKÜDAŞ", "ÜSTYAPI", "ÜSTELİK", "ÜŞENGEÇ", "VİTAMİN", "VALLAHİ", "VANİLYA", "VİLAYET", "VEKALET", "VÜCUTÇA", "YATAĞAN", "YİYECEK", "YÖNETİM", "YUMURTA", "YÜZBAŞI", "ZAMPARA", "ZİYAFET", "ZİYASIZ", "ZUMLAMA", "ZİYARET"];
const words8 = ["ABONELİK", "ACEMİLİK", "ACIPAYAM", "AÇIKLAMA", "ADALETLİ", "ADEMBABA", "AGRONOMİ", "AKÇAKALE", "ALAGEYİK", "ALAKASIZ", "ALATURKA", "ALBATROS", "ALİNAZİK", "AMBULANS", "ALTINTOP", "BADANACI", "BAĞIRSAK", "BAŞÇAVUŞ", "BELGESEL", "BASIMEVİ", "BERGAMOT", "BANDIRMA", "BAŞSAVCI", "BAKLİYAT", "BELEDİYE", "BAŞHEKİM", "BAMBAŞKA", "BAHTİYAR", "BAKIRKÖY", "BADEMCİK", "CAHİLLİK", "CEHENNEM", "COĞRAFYA", "CİDDİYET", "CİLALAMA", "CÜMLETEN", "CİCİANNE", "CİHANGİR", "CEVAPSIZ", "CEBİRSEL", "DAMACANA", "DAVETSİZ", "DEDEKTİF", "DEMİRBAŞ", "DİDİNMEK", "DİKSİYON", "EGZERSİZ", "ELEKTRİK", "ENDİŞELİ", "ERGENLİK", "ETNOLOJİ", "EYVALLAH", "FEMİNİST", "FIRSATÇI", "FİKRİYAT", "FİZYOLOG", "FOSLAMAK", "FOTOKOPİ", "GAZİEMİR", "GAZİPAŞA", "GAZETECİ", "GERGEDAN", "GÖKDELEN", "GÖSTERİŞ", "HAFIZLIK", "HARCIRAH", "HARİCİYE", "HASTALIK", "HAYIRSIZ", "HELALLİK", "ISIÖLÇER", "ISLAHEVİ", "ISLANMAK", "ISIVEREN", "ISSIZLIK", "IZGARALI", "İLAÇLAMA", "İLAHİYAT", "İLETİŞİM", "İNSANCIL", "İSABETLİ", "İSTAVROZ", "JANDARMA", "JEOFİZİK", "JEOLOJİK", "JOYSTİCK", "KABARTMA", "KAHVALTI", "KALDIRAÇ", "KAMYONET", "KAPIKULE", "KAPUÇİNO", "LAHMACUN", "LİKİDİTE", "LİTRELİK", "LUNAPARK", "LEZZETLİ", "LASTİKÇİ", "MİTOLOJİ", "MUHTEMEL", "MARGARİN", "MAYDANOZ", "MUHABBET", "MUAFİYET", "NOSTALJİ", "NOTEBOOK", "NİZAMİYE", "NEVRESİM", "NARKOTİK", "NAKLİYAT", "OPTİMİST", "ORTAOKUL", "OTOMOBİL", "OPERATÖR", "OLASILIK", "ÖZNELLİK", "ÖZGÜRLÜK", "ÖRNEKLEM", "ÖKSÜRMEK", "ÖĞRETMEN", "PANSİYON", "PARANTEZ", "PASAPORT", "PAYİTAHT", "PEHLİVAN", "RÜTBESİZ", "RÜŞVETÇİ", "ROTASYON", "REZİLLİK", "RASTGELE", "SADRAZAM", "SANAYİCİ", "SARDUNYA", "SEFERBER", "SIRNAŞIK", "ŞİZOFREN", "ŞIPSEVDİ", "ŞEMDİNLİ", "ŞARAMPOL", "ŞAHSİYET", "TEÇHİZAT", "TAVŞANLI", "TATBİKAT", "TAKRİBEN", "TAHMİNEN", "UYGARLIK", "ULUBORLU", "ULTRASON", "USTABAŞI", "UZUNDERE", "ÜSTEĞMEN", "ÜSLUPSUZ", "ÜTOPYACI", "ÜSTÇAVUŞ", "ÜMRANİYE", "VEZNEDAR", "VATANDAŞ", "VARSAYIM", "VESTİYER", "VOLKANİK", "VOLEYBOL", "YALANSIZ", "YEMYEŞİL", "YOĞURTÇU", "YÖNETMEN", "YÜZDELİK", "ZERDEÇAL", "ZİHNİYET", "ZORBALIK", "ZÜLFİKAR", "ZERDEÇAL"];
const words9 = ["ACIMTIRAK", "AÇABİLMEK", "ABUKLAŞMA", "ABDESTSİZ", "ACİZLEŞME", "AÇIKLAMAK", "AKARYAKIT", "AKORDİYON", "ALÇALTMAK", "ALEVLENME", "ALIŞTIRMA", "ALIŞVERİŞ", "AMORTİSÖR", "ANTALYALI", "ARAKLAMAK", "BABAYİĞİT", "BAKKALİYE", "BAŞKANLIK", "BAYRAKTAR", "BENZEŞMEK", "BİYOGRAFİ", "BİTPAZARI", "BİLİNÇSİZ", "BİLARDOCU", "BİYOKİMYA", "BEYZBOLCU", "BESİCİLİK", "BAŞÜSTÜNE", "BAŞARISIZ", "BAKLAVACI", "CAHİLİYET", "CAMBAZLIK", "CUMARTESİ", "CEZAYİRLİ", "CESARETLİ", "CÖMERTLİK", "CEVAPLAMA", "CENTİLMEN", "CAYDIRICI", "CANKULAĞI", "DOĞASEVER", "DİKKAFALI", "DELİKANLI", "DEFTERDAR", "DAYANAKLI", "DAVLUMBAZ", "EĞLENCELİ", "EKSPERTİZ", "ENTERESAN", "ESKİŞEHİR", "ETKİLEŞİM", "ESTETİKÇİ", "FAKİRHANE", "FELSEFECİ", "FIRKATEYN", "FİNANSMAN", "FORMALİTE", "FRANSIZCA", "GASTRONOM", "GECEKONDU", "GIYABINDA", "GENELLEME", "GLADYATÖR", "GÖMLEKSİZ", "HAKİMİYET", "HALLETMEK", "HAPSETMEK", "HAREKETLİ", "HAYVANSAL", "HEYECANLI", "IŞIKÖLÇER", "ISTIRAPLI", "ISPARTALI", "ISLAHATÇI", "ILIMLILIK", "İDEOLOJİK", "İÇGÜDÜSEL", "İNATLAŞMA", "İNKILAPÇI", "İNSANOĞLU", "İSTİKAMET", "JEOTERMİK", "JEOTERMAL", "JİNEKOLOG", "JİMNASTİK", "JENERATÖR", "KAHVEHANE", "KALİTESİZ", "KANSIZLIK", "KARABASAN", "KARAKOÇAN", "KARTEZYEN", "LOKOMOTİF", "LİTERATÜR", "LOGARİTMA", "LİSTELEME", "MAGNEZYUM", "MEMURİYET", "MİNNETTAR", "MATEMATİK", "MANTIKSIZ", "MALAZGİRT", "NORMALLİK", "NOSTALJİK", "NOKTALAMA", "NEREDEYSE", "NARÇİÇEĞİ", "NARENCİYE", "ORGENERAL", "OLİMPİYAT", "OKALİPTÜS", "OLANAKSIZ", "ODAKLANMA", "ÖDENEKSİZ", "ÖLDÜRÜLME", "ÖNCELİKLİ", "ÖZETLEMEK", "ÖZELLİKLE", "PANORAMİK", "PARFÜMERİ", "PAZARTESİ", "PEYGAMBER", "PINARBAŞI", "RASTLANTI", "RENGARENK", "REZİSTANS", "ROMANTİZM", "RUTUBETLİ", "SAĞLIKSIZ", "SARAYKENT", "SERACILIK", "SEYİTGAZİ", "SİYASETEN", "ŞİZOFRENİ", "ŞÜKRETMEK", "ŞİFRELEME", "ŞATAFATLI", "ŞANLIURFA", "TIMARHANE", "TOMBALACI", "TORNAVİDA", "TURNAGÖZÜ", "TÜRKOLOJİ", "UKRAYNALI", "UYDURMACA", "UZUNKÖPRÜ", "URUGUAYLI", "UÇAKSAVAR", "ÜTÜLETMEK", "ÜNİVERSAL", "ÜSTÜNKÖRÜ", "ÜLKÜCÜLÜK", "ÜLTİMATOM", "VAKIFNAME", "VELİNİMET", "VETERİNER", "VİDEOTEYP", "VEDALAŞMA", "VİCDANSIZ", "YANKESİCİ", "YASAKLAMA", "YEDİVEREN", "YENİDÜNYA", "YEŞİLYURT", "ZANAATKAR", "ZEVZEKLİK", "ZÜCCACİYE", "ZONGULDAK", "ZİYARETÇİ"];
const words10 = ["ARŞİVCİLİK", "ACIMASIZCA", "ARAŞTIRMAK", "ACELECİLİK", "ABARTILMAK", "ACINDIRMAK", "AÇGÖZLÜLÜK", "AÇIKLAYICI", "ACİZLEŞMEK", "ACIMASIZCA", "ARDIŞIKLIK", "ALINGANLIK", "ALKIŞLAMAK", "AMAÇSIZLIK", "ANKETÖRLÜK", "BAĞIŞLAMAK", "BAHÇESARAY", "BALTALAMAK", "BARIŞSEVER", "BAŞKALAŞIM", "BELİRTİSİZ", "BENİMSENME", "BİLİNÇALTI", "BAYRAMPAŞA", "BEREKETSİZ", "BECERİKSİZ", "BAŞKOMUTAN", "BASİTLEŞME", "BANKAMATİK", "BAKTERİYEL", "CEPHANELİK", "CİDDİLEŞME", "CİHANBEYLİ", "COĞRAFYACI", "CEZASIZLIK", "CIMBIZLAMA", "CESARETSİZ", "CEVAPLAMAK", "CİHANBEYLİ", "CUMHURİYET", "DALGAKIRAN", "DALGAÖLÇER", "DAĞINIKLIK", "DAMGALAMAK", "DAĞITIMEVİ", "DAHİLİYECİ", "ETNOGRAFYA", "EZBERCİLİK", "ESRARENGİZ", "ENFEKSİYON", "ELEKTRİKÇİ", "EĞİTMENLİK", "FİZYOLOJİK", "FİZİBİLİTE", "FOTOMONTAJ", "FOTOSENTEZ", "FİKRİSABİT", "FEDERALİZM", "GAYRİRESMİ", "GELENEKSEL", "GENELGEÇER", "GİRİŞİMSEL", "GÖLMARMARA", "GÜNDELİKÇİ", "HABERLEŞME", "HANEDANLIK", "HASSASİYET", "HAVALİMANI", "HELİKOPTER", "HEYECANSIZ", "IŞINLAYICI", "ISPANAKLAR", "ISTAKOZLAR", "ISMARLAMAK", "ISSIZLAŞMA", "ISLATILMAK", "İHTİYARLIK", "İBADETHANE", "İNCİRLİOVA", "İRRASYONEL", "İSPANYOLCA", "İSKENDERUN", "JENERASYON", "JİNEKOLOJİ", "JEODİNAMİK", "KALPSİZLİK", "KARBÜRATÖR", "KARDİYOLOG", "KAYINPEDER", "KELEBEKLER", "KIRKBEŞLİK", "LİBERALİZM", "LİSTELEMEK", "LÜLEBURGAZ", "LANETLEMEK", "MAHKÜMİYET", "MANYETİZMA", "MEDİTASYON", "MEMNUNİYET", "MERHAMETLİ", "MİKRODALGA", "NAVİGASYON", "NÖBETLEŞME", "NİTELİKSİZ", "NEZAKETSİZ", "NİKAHLAMAK", "OYUNBAZLIK", "OTLAKÇILIK", "ORTOPEDİST", "ONURSUZLUK", "OKULLAŞMAK", "ÖĞRENCİLİK", "ÖLÜMSÜZLÜK", "ÖZELLEŞMEK", "ÖZENSİZLİK", "ÖRÜMCEKLER", "PALANDÖKEN", "PARAMPARÇA", "PASTIRMACI", "PINARHİSAR", "POSTMODERN", "RESEPSİYON", "RÜZGARGÜLÜ", "RİYAKARLIK", "REFERANDUM", "RADYOKİMYA", "SAFRANBOLU", "SARIMSAKLI", "SELAMLAŞMA", "SICAKKANLI", "SİVİLLEŞME", "ŞAŞIRTMACA", "ŞAHSİYETLİ", "ŞİMENDÜFER", "ŞÜPHECİLİK", "ŞEHİRCİLİK", "TERMOSİFON", "TERMOMETRE", "TELESİNEMA", "TELEVİZYON", "TEMİZLİKÇİ", "UMUTSUZLUK", "UNUTKANLIK", "UYGARLAŞMA", "UYUŞTURUCU", "UYANDIRMAK", "ÜNİFORMALI", "ÜNİVERSİTE", "ÜLKÜDAŞLIK", "ÜMMETÇİLİK", "ÜŞENGEÇLİK", "VEJETARYEN", "VANTİLATÖR", "VERİMLİLİK", "VEZİRKÖPRÜ", "VİRANŞEHİR", "VİTAMİNSİZ", "YARGILANMA", "YABANCILIK", "YÜKSEKOKUL", "YUMUŞATICI", "YÖRESELLİK", "ZİNCİRLEME", "ZIRVALAMAK", "ZEYTİNYAĞI", "ZERZEVATÇI", "ZAYIFLAMAK"];


// phrases
const phrases2 = ["Acı Su", "Adam Ol", "Adam Akıllı", "Afiyet Olsun", "Aldırma Gönül", "Aldırma Reis", "Anılar Unutulmaz", "Arada Sırada", "Aslan Yürek", "Aşk Acısı", "Aşk Kazanır", "Az Kaldı", "Bir Zamanlar", "Birdaha Sevmekmi", "Bol Şanslar", "Böyle Olmaz", "Ceviz Kabuğu", "Çok Çalış", "Çok Yaşa", "Çokmu Olduk", "Deli Gönlüm", "Doğayı Koruyalım", "Dost Vefadır", "Erkekler Ağlamaz", "Gücünü Keşfet", "Güzel İnsan", "Gününü Görürsün", "Hayattaki Şansım", "Hayvanları Koruyalım", "İncir Ağacı", "İncir Çekirdeği", "İyilik Yap", "Kadınlar Güçlüdür", "Kara Çiçeğim", "Karpuz Çekirdeği", "Kendini Tanı", "Kısmen İyiyim", "Kimim Ben", "korkma kalbim", "Mor Karanfil", "Muz Kabuğu", "Olmadı Şimdi", "Olur Bazen", "Sadece Dinle", "Sakın Ağlama", "Selam Söyle", "Sesini Duymak", "Sev Kardeşim", "Sözün Özü", "Spor Yap", "Şanslı Çocuk", "Şeftali yağrağı", "Şımartılmamış Aşklar", "Şiirin Gücü", "Takma Kafana", "Tatlı Meyve", "Teşekkür Ederim", "Türkçe Sözlük", "Unut Onu", "Unut Gitsin", "Yandı Gönlüm", "Yanımda Olmalısın", "Yaramaz Öğrenci", "Yaşanmamış Günler", "Yol Arkadaşım", "Zor Hayat", "Alemin Kralı", "Sen Kimsin", "Beni Seviyormusun", "Yaramazlık Yapma", "Hızlı Oku", "Birden İlkildim", "Yalan Söyleme", "Doğru konuş", "Özet Çıkar", "Tekrar Et", "Kitap Oku", "Hayvanları Sev", "Alaska Kurdu", "Sivas Kangalı", "Afyon Kaymağı", "Aydın İnciri", "Kayseri Sucuğu", "Denizli Horozu", "Mekanın Sahibi", "Kastamonu Pastırması"];
const phrases3 = ["Allah Rahatlık Versin", "Allah Razı Olsun", "Annem Karpuz Almış", "Arkadaşım Beni Üzdü", "Arsıza Söz İşlemez", "Asla Asla Deme", "Aşk Engel Tanımaz", "Aşk Kağıda Yazılmıyor", "Ayağına Terlik Giy", "Az Yemek Ye", "Babam Eve Döndü", "Baykuş Hızlı Okuma", "Bazen Yetinmek Gerekir", "Bebek Ağlamaya Başladı", "Bir Şans Daha", "Boşver Takma Kafana", "Çalışana Hayat Güzel", "Çalışmadan Başarı Olmaz", "Çok Teşekkür Ederim", "Dişini Fırçala Yat", "Düşünüyorumda Sensiz Olmaz", "Ellerini Yıka Gel", "En Güzel Söz", "Eve Geç Kalma", "Evli Mutlu Çocuklu", "Gecenin Gözleri Görmez", "Gidilemeyen Denizlermiş Özlenen", "Hayat Çok Kısa", "Hayat Devam Ediyor", "Hedefler ve Hayaller", "Hep Mutlu Ol", "Herkes Kendi Yoluna", "Her Yerde Sen", "İnsan Gibi Davran", "İnsan Gibi Sev", "İnsan Gibi Sev", "İnsan İnsanın Kurdudur", "İnsan Kitap Gibidir", "İnsanın Kanadı, Gayretidir", "İnsanlar Üçe Ayrılır", "Kardeşim Günlerdir Hasta.", "Kışın Hava Soğur", "Kırmızı Işıkta Geçme", "Komşunun Çocuğu Yaramaz", "Lütfen Dersini Çalış", "Manavdan Çilek Al", "Mavi Bir Telaş", "Mutlu Olmak İstiyorsun", "Mutluluk İçinde Saklı", "Hadi Canım Sende", "Oburluğa Gerek Yok", "Oğlum Su Getir", "Saklarım Gözümde Güzelliğini", "Sana Çok Kızgınım", "Sanat Hayatın Neşesidir", "Sen Hızlı Okuyacaksın", "Seni Çok Seviyorum", "Sen Adam Olmazsın", "Sigara Sağlığa Zararlıdır.", "Sofra Hazır Gel", "Tabağını Lavaboya Koy", "Tak Sepeti Koluna", "Türkiye Hızlı Okuyacak", "Yağmurun Gardiyanları Yıldırımlardır", "Yalan Söylemek Kötüdür", "Yalnızlık Ömür Boyu", "Alma Mazlumun Ahını", "Şekil Yapma Bana", "Söyle Ben Kimim", "Dersi İyi Dinle", "Göz Kaslarını Eğit", "Geniş Açıdan Bak", "Görme Alanını Genişlet", "Titre Kendine Gel", "Hergün Meyve Yemelisin", "Hızlı Okuma Alıştırmaları", "Günlük Tekrar Yap", "İç Seslendirmeni Azalt", "Hızlı Okuma Çalışmaları", "Taş Yerinde Ağırdır", "Acıkmış Kudurmuştan Beterdir", "Balık Baştan Kokar", "Çivi Çiviyi Söker", "Çocuktan Al Haberi", "Demir Tavında Dövülür", "Gelene Git Denilmez"];
const phrases4 = ["Su Gibi Aziz Ol", "Ne Masal Ne Rüya", "Çok Oldun Ama Sen", "Daha Çok Ders Çalış", "Fol Yok Yumurta Yok", "Karnı Tok Sırtı Pek", "Sen Ne Zaman Doğdun", "Uçan Kuşa Borcu Var", "Gitme Dur Daha Erken", "İki Arada Bir Derede", "İyilik Yap Denize At", "Tam Takır Kuru Bakır", "Ulu Orta Söz Söyledi", "Başı Sonu Belli Değil", "Erken Kalkan Yol Alır", "Hata Değil Çare Bulun", "Kedi Olalı Fare Tuttu", "Kel Başa Şimşir Tarak", "Sen Eski Bir Şarkısın", "Söz Ölür Sahibi Kalır", "Söyle Bana Sen Kimsin", "İğne Atsan Yere Düşmez", "Tavşana Kaç Tazıya Tut", "Elim Ayağım Buz Kesildi", "İki Dirhem Bir Çekirdek", "Keşke Hep Yanımda Olsan", "Kırk Dereden Su Getirdi", "Senden Bana Şimdi kalan", "Takke Düştü Kel Göründü", "Yer Yarıldı İçine Girdi", "Olur Bazen Böyle Şeyler", "İki Elim Yakanda Bilesin", "On Parmağında On Marifet", "Topluma Mal Olmuş Sözler", "Ununu Eledi eleğini Astı", "Vur Patlasın Çal Oynasın", "Damlaya Damlaya Göl Olur", "Düşünmek En İyi Cevaptır.", "Hızlı Okuma Bir Beceridir", "Korkma Kalbim Geçer Acısı", "Ocağıma İncir Ağacı Dikti", "Pişmiş Kelle Gibi Sırıtma", "Su Akarken Testini Doldur", "Taş Üstünde Taş Bırakmadı", "Vur Dedikse Öldür Demedik", "Sakla Samanı Gelir Zamanı", "Elden Ayaktan Düştüm İyice", "Kendi Göbeğini Kendi Kesti", "Taşı Sıksa Suyunu Çıkartır", "Yenilir Yutulur Gibi Değil", "Baykuş Hızlı Okuma Programı", "Karınca Yuvası Gibi Mübarek", "Kendini Dev Aynasında Gördü", "Yere Göğe Sığdıramadım Seni", "İki Yakası Bir Araya gelmedi", "Susmak Noktasız Bir Cümledir", "Yemeden İçmeden Kesildin Sen", "Olmayacak Duaya Amin Denilmez", "Çocuklar İçin Eğitici Masallar", "Yüzünü Birdaha Görmek İstemiyorum", "Yağmurdan Kaçarken Doluya Tutulmak", "Umudunu Yitirme Hayallerin Seninle", "Hayal Etmek Mutluluğun Anahtarıdır.", "Zamanla İnsanlar Kendini Tanıtıyorlar.", "Aradığını Bilmeyen, Bulduğunu Anlayamaz", "Herkes Okumasını Çalışarak Geliştirebilir", "Haydi Güle Güle Git", "Alem Buysa Kral Benim", "Ateş Düştüğü Yeri Yakar", "Tavuğun Sadakası Bir Yumurta", "Bağlı Koyun Yerinde Otlar", "Bedava Sirke Baldan Tatlıdır", "Can Çıkmayınca Huy Çıkmaz", "Fazla Mal Göz Çıkartmaz", "Hak Gelince Batıl Gider", "Irmak Kenarına Çeşme Yapılmaz", "İnsan Beşer Kuldur Şaşar", "Kaçan Balık Büyük Olur", "Lâfla Peynir Gemisi Yürümez", "Minareyi Çalan Kılıfını Hazırlar", "Mum Dibine Işık Vermez", "Nerde Hareket Orda Bereket", "Ölmüş Eşek Kurttan Korkmaz", "Parayı Veren Düdüğü Çalar", "Pilâvdan Dönenin Kaşığı Kırılsın", "Rüzgâr Eken Fırtına Biçer"];

// emojis
const emojis = ["angry", "angry", "dizzy", "dizzy", "flushed", "flushed", "frown", "frown", "frown-open", "frown-open", "grimace", "grimace", "grin", "grin", "grin-alt", "grin-alt", "grin-beam", "grin-beam", "grin-beam-sweat", "grin-beam-sweat", "grin-hearts", "grin-hearts", "grin-squint", "grin-squint", "grin-squint-tears", "grin-squint-tears", "grin-stars", "grin-stars", "grin-tears", "grin-tears", "grin-tongue", "grin-tongue", "grin-tongue-squint", "grin-tongue-squint", "grin-tongue-wink", "grin-tongue-wink", "grin-wink", "grin-wink", "kiss", "kiss", "kiss-beam", "kiss-beam", "kiss-wink-heart", "kiss-wink-heart", "laugh", "laugh", "laugh-beam", "laugh-beam", "laugh-squint", "laugh-squint", "laugh-wink", "laugh-wink", "meh", "meh", "meh-blank", "meh-blank", "meh-rolling-eyes", "meh-rolling-eyes", "sad-cry", "sad-cry", "sad-tear", "sad-tear", "smile", "smile", "smile-beam", "smile-beam", "smile-wink", "smile-wink", "surprise", "surprise", "tired", "tired"];

// numbers 
var oneDigitNumbersInStr = []
var twoDigitNumbersInStr = []
var threeDigitNumbersInStr = []
var fourDigitNumbersInStr = []
var fiveDigitNumbersInStr = []
var sixDigitNumbersInStr = []
for (var i = 0; i < 10; ++i) oneDigitNumbersInStr.push(`0${i}`)
for (var i = 10; i < 100; ++i) twoDigitNumbersInStr.push(`${i}`)
for (var i = 100; i < 1000; ++i) threeDigitNumbersInStr.push(`${i}`)
for (var i = 1000; i < 10000; ++i) fourDigitNumbersInStr.push(`${i}`)
for (var i = 10000; i < 100000; ++i) fiveDigitNumbersInStr.push(`${i}`)
for (var i = 100000; i < 1000000; ++i) sixDigitNumbersInStr.push(`${i}`)


// JQuery element initialization
$(document).ready(function () {
  // speed or character count level
  $('.page-item').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });


  // char select
  $("#char-select").change(function () {
    if ($(this).val() == 1) $(this).attr("value", 0)
    else $(this).attr("value", 1)
  })
})


// Timer
toastr.options = {
  "closeButton": false, // true/false
  "debug": false, // true/false
  "newestOnTop": false, // true/false
  "progressBar": false, // true/false
  "positionClass": "md-toast-bottom-right", // md-toast-top-right / md-toast-top-left / md-toast-bottom-right / md- toast - bottom - left
  "preventDuplicates": false, //true / false
  "onclick": null,
  "showDuration": "300", // in milliseconds
  "hideDuration": "1000", // in milliseconds
  "timeOut": "445000", // in milliseconds
  "extendedTimeOut": "445000", // in milliseconds
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
var timer = new easytimer.Timer();

// speed
var speedLevel = 1
var durationMax = 900
var durationMin = durationMax / 6
var duration = durationMax
$(document).ready(function () {
  $('.speed').click(function () {
    speedLevel = Number($(this).text())
    duration = durationMin * (7 - speedLevel)
  });
})

// control variables
var speedLevel = 1
var duration = 1000
var level = 1
var isFirstRun = true
var interval = null

// word count
var wordCount = 1

// random integer
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// random float
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// rem to px
// rem to pixels
function rem2px(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// check if element is in viewport
var isInViewport = function (elem, heightOffset = 0, widthOffset = 0) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight - heightOffset || document.documentElement.clientHeight - heightOffset) &&
    bounding.right <= (window.innerWidth - widthOffset || document.documentElement.clientWidth - widthOffset)
  );
};


// text operations
String.prototype.turkishToUpper = function () {
  var string = this;
  var letters = { "i": "İ", "ş": "Ş", "ğ": "Ğ", "ü": "Ü", "ö": "Ö", "ç": "Ç", "ı": "I" };
  string = string.replace(/(([iışğüçö]))+/g, function (letter) { return letters[letter]; })
  return string.toUpperCase();
}

String.prototype.turkishToLower = function () {
  var string = this;
  var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
  string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function (letter) { return letters[letter]; })
  return string.toLowerCase();
}

function hasLetter(myString) {
  return /[A-Z]/i.test(myString);
}
function hasNumber(myString) {
  return /\d/i.test(myString);
}

const nonWords = [
  "-",
  "de", "da", "ki",
  "mi", "mı", "mü", "mu", "mi?", "mı?", "mü?", "mu?",
  "miyim", "mıyım", "müyüm", "muyum", "miyim?", "mıyım?", "müyüm?", "muyum?",
  "misin", "mısın", "müsün", "musun", "misin?", "mısın?", "müsün?", "musun?",
  "miyiz", "mıyız", "müyüz", "muyuz", "miyiz?", "mıyız?", "müyüz?", "muyuz?",
  "misiniz", "mısınız", "müsünüz", "musunuz", "misiniz?", "mısınız?", "müsünüz?", "musunuz?",
]


var texts = []
$.get("/app/collections/texts", res => {
  texts = res
  // console.log(res)
})
