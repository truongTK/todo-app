printf "\n===================== Installing Meteor ... ========================\n"
#curl https://install.meteor.com/ | sh
printf "\n===================== Installing NPM Package ... ===================\n"
npm install

case "$1" in
  'web')
  printf "\n===================== Run in webview mode... ========================\n"
  npm start
    ;;
  'android')
  printf "\n===================== Run in android emulator... ========================\n"
  meteor install-sdk android
  meteor add-platform android
  meteor run android
    ;;
  'ios')
  printf "\n===================== Run in ios emulator (MAC)... ========================\n"
  meteor install-sdk ios
  meteor add-platform ios
  gem install cocoapods
  meteor build ios
  cd .meteor/local/cordova-build/platforms/ios/cordova
  meteor npm install ios-sim@latest
  meteor run ios
    ;;
  'android-device')
  printf "\n===================== Run in android ... ========================\n"
  meteor install-sdk android
  meteor add-platform android
  meteor run android-device
    ;;
  'ios-device')
  printf "\n===================== Run in iphone(MAC) ... ========================\n"
  meteor install-sdk ios
  meteor add-platform ios
  meteor run ios-device
    ;;
esac
