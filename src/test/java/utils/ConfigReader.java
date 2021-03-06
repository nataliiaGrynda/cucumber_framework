package utils;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {

  private static Properties properties = new Properties();
  static{
    try {
      FileInputStream fileInputStream = new FileInputStream("configuration.properties");
      properties.load(fileInputStream);
      fileInputStream.close();
    } catch (Exception e) {//catch any exception that my come up
      e.printStackTrace();
    }
  }
  public static String getProperties(String key){
    return properties.getProperty(key);
  }
}
