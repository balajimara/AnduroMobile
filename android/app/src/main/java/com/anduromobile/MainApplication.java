package com.anduromobile;
import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
// import com.reactnativenavigation.NavigationApplication;
// import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

      @Override
      protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new SplashScreenReactPackage()  //here
            );
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        // @Override
        // protected boolean isNewArchEnabled() {
        //   super.isNewArchEnabled();
        //   return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        // }

        // @Override
        // protected Boolean isHermesEnabled() {
        //   return BuildConfig.IS_HERMES_ENABLED;
        // }
      };

      @Override
      public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
      }

    @Override
public void onCreate() {
  super.onCreate();
  SoLoader.init(this, /* native exopackage */ false); // add this one
  ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
}


}
