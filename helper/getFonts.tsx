import * as Font from "expo-font";

import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { Caveat_400Regular, Caveat_700Bold } from "@expo-google-fonts/caveat";
import {
  DancingScript_400Regular,
  DancingScript_700Bold,
} from "@expo-google-fonts/dancing-script";
import {
  GentiumPlus_400Regular,
  GentiumPlus_700Bold,
} from "@expo-google-fonts/gentium-plus";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import {
  JosefinSans_400Regular,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import {
  ShantellSans_400Regular,
  ShantellSans_700Bold,
} from "@expo-google-fonts/shantell-sans";
import {
  TurretRoad_400Regular,
  TurretRoad_700Bold,
} from "@expo-google-fonts/turret-road";
import {
  NotoSansKR_400Regular,
  NotoSansKR_700Bold,
} from "@expo-google-fonts/noto-sans-kr";
import {
  NanumGothic_400Regular,
  NanumGothic_700Bold,
} from "@expo-google-fonts/nanum-gothic";
import {
  NotoSerifKR_400Regular,
  NotoSerifKR_700Bold,
} from "@expo-google-fonts/noto-serif-kr";
import {
  Sunflower_300Light,
  Sunflower_700Bold,
} from "@expo-google-fonts/sunflower";
import { Gaegu_400Regular, Gaegu_700Bold } from "@expo-google-fonts/gaegu";
import { Dongle_400Regular, Dongle_700Bold } from "@expo-google-fonts/dongle";
import {
  GowunBatang_400Regular,
  GowunBatang_700Bold,
} from "@expo-google-fonts/gowun-batang";
import { CuteFont_400Regular } from "@expo-google-fonts/cute-font";
import { NanumPenScript_400Regular } from "@expo-google-fonts/nanum-pen-script";
import { Inder_400Regular } from "@expo-google-fonts/inder";

export const getFonts = async () => {
  await Font.loadAsync({
    AmaticSC_400Regular,
    AmaticSC_700Bold,
    Caveat_400Regular,
    Caveat_700Bold,
    DancingScript_400Regular,
    DancingScript_700Bold,
    GentiumPlus_400Regular,
    GentiumPlus_700Bold,
    Inter_400Regular,
    Inter_700Bold,
    JosefinSans_400Regular,
    JosefinSans_700Bold,
    OpenSans_400Regular,
    OpenSans_700Bold,
    ShantellSans_400Regular,
    ShantellSans_700Bold,
    TurretRoad_400Regular,
    TurretRoad_700Bold,
    NotoSansKR_400Regular,
    NotoSansKR_700Bold,
    NanumGothic_400Regular,
    NanumGothic_700Bold,
    NotoSerifKR_400Regular,
    NotoSerifKR_700Bold,
    Sunflower_300Light,
    Sunflower_700Bold,
    Gaegu_400Regular,
    Gaegu_700Bold,
    Dongle_400Regular,
    Dongle_700Bold,
    GowunBatang_400Regular,
    GowunBatang_700Bold,
    CuteFont_400Regular,
    NanumPenScript_400Regular,
    Inder_400Regular,
  });
};
export default getFonts;
