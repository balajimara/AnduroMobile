package com.anduromobile;

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class MainActivity extends NavigationActivity {

   protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
    }

}