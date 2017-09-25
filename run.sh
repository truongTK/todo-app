printf "\n===================== Installing Meteor ... ========================\n"
#curl https://install.meteor.com/ | sh
printf "\n===================== Installing NPM Package ... ===================\n"
npm install

case "$1" in
  'web')
  printf "\n===================== Run in webview mode... ========================\n"
  npm start
    ;;
  'ios')
  meteor install-sdk ios
  meteor add-platform ios
  gem install cocoapods
  meteor build ios
  cd .meteor/local/cordova-build/platforms/ios/cordova
  meteor npm install ios-sim@latest
  meteor run ios
    ;;
esac
