import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveLocal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getLocal = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key);

    if (res) {
      return JSON.parse(res);
    }

    return null;
  } catch (error) {
    console.log(error);
  }
};
