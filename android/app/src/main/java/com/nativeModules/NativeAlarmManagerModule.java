package com.nativeModules;

public class NativeAlarmManagerModule extends NativeAlarmManagerSpec {

  public static final String NAME = "NativeAlarmManager";

  private final AlarmManager am = (AlarmManager) getCurrentActivity().getApplicationContext().getSystemService(Context.ALARM_SERVICE);

  public NativeAlarmManagerModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public void createAlarm(String id, ReadableMap time) {
  }
}