ionic cordova build --release --platform android;
keytool -genkey -v -keystore my-release-key.keystore -alias quick-book-test -keyalg RSA -keysize 2048 -validity 10000;
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk quick-book-test;
