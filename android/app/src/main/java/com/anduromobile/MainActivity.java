package com.anduromobile;

import android.os.Bundle;
// import com.reactnativenavigation.NavigationActivity;
import android.app.Activity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {


  // @Override
  // protected String getMainComponentName() {
  //   return "testActivity";
  // }

   @Override
     protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    setTheme(R.style.AppTheme);
    super.onCreate(savedInstanceState);
  }

   public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(Activity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }

   };




  // }
}

