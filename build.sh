ionic cordova plugin rm cordova-plugin-console;
ionic cordova build --release android;

# In case of an existing keystore please copy the file as `quickbook.keystore` to the root project
[ -f ./quickbook.keystore ] && echo "==> quickbook.keystore exist"|| keytool -genkey -v -keystore quickbook.keystore -alias quick-book -keyalg RSA -keysize 2048 -validity 10000;
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore quickbook.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk quick-book;

# If can not find zipalign, `export PATH=${PATH}:path/to/build-tools/VERSION`
# Example `export PATH=${PATH}:~/Library/Android/sdk/build-tools/26.0.1`
rm QuickBook.apk
zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk QuickBook.apk
