package com.anduromobile;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // here

import com.reactnativenavigation.NavigationActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;


public class MainActivity extends NavigationActivity {

   @Override
   protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        setTheme(R.style.AppTheme);
        super.onCreate(savedInstanceState);
    }

}


