// キャプチャリングなしのグループ化(?:...)

var postalCode = /〒(?:\d{3})-(?:\d{4})/;
postalCode.test("〒131-8634");      // → true