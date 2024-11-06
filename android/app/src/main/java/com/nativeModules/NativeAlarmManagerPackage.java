package com.nativeModules;

import androidx.annotation.NonNull;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;

import java.util.HashMap;
import java.util.Map;

public class NativeAlarmManagerPackage extends TurboReactPackage {
  @Override
  public NativeModule getModule(String name, @NonNull ReactApplicationContext reactContext) {
    if (name.equals(NativeAlarmManagerModule.NAME)) {
      return new NativeAlarmManagerModule(reactContext);
    } else {
      return null;
    }
  }

  @Override
  public ReactModuleInfoProvider getReactModuleInfoProvider() {
    return new ReactModuleInfoProvider() {
      @NonNull
      @Override
      public Map<String, ReactModuleInfo> getReactModuleInfos() {
        Map<String, ReactModuleInfo> map = new HashMap<>();
        map.put(NativeAlarmManagerModule.NAME, new ReactModuleInfo(
            NativeAlarmManagerModule.NAME,       // name
            NativeAlarmManagerModule.NAME,       // className
            false, // canOverrideExistingModule
            false, // needsEagerInit
            false, // isCXXModule
            true   // isTurboModule
        ));
        return map;
      }
    };
  }
}
