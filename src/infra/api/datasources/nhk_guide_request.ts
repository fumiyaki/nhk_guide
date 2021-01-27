import axios from "axios";
import { NHK_API_KEY, NHK_API_URL } from "@env";
import { Guide, GuideDetails } from "../../../types/guide";
/*
 * APIで使用するURL一覧
  Ｐｒｏｇｒａｍ Ｌｉｓｔ ＡＰＩ （Ｖｅｒ．２）
  https://api.nhk.or.jp/v2/pg/list/{area}/{service}/{date}.json?key={apikey}
  Ｐｒｏｇｒａｍ Ｇｅｎｒｅ ＡＰＩ （Ｖｅｒ．２）
  https://api.nhk.or.jp/v2/pg/genre/{area}/{service}/{genre}/{date}.json?key={apikey}
  Ｐｒｏｇｒａｍ Ｉｎｆｏ ＡＰＩ （Ｖｅｒ．２）
  https://api.nhk.or.jp/v2/pg/info/{area}/{service}/{id}.json?key={apikey}
  Ｎｏｗ Ｏｎ Ａｉｒ ＡＰＩ （Ｖｅｒ．２）
  https://api.nhk.or.jp/v2/pg/now/{area}/{service}.json?key={apikey}
 */

/**
 * @param {string} area - 地域ID(3byte)。詳細はこちら[https://api-portal.nhk.or.jp/doc-request#explain_area]をご覧ください。
 * @param {string} service - サービスID(2byte)。詳細はこちら[https://api-portal.nhk.or.jp/doc-request#explain_service]をご覧ください。
 * @param {string} date - 日付（YYYY-MM-DD形式、当日から１週間先までの日付を指定）
 * @return {Guide[] | undefined} - [通信成功、エラー] GuideListかundefinedを返す
 */
export const fetchNHKGuideListData = async (
  area: string,
  service: string,
  date: string
): Promise<Guide[] | undefined> => {
  const url = `${NHK_API_URL}/list/${area}/${service}/${date}.json?key=${NHK_API_KEY}`;
  console.log("通信実行", {
    url,
    area,
    service,
    date,
  });
  const res = await axios.get(url).catch((err) => {
    console.log("受信エラー¥n¥n", err);
    return undefined;
  });
  if (res && res.status === 200) {
    console.log("受信データ¥n¥n", res.data);
    let data: Guide[];
    try {
      data = res.data.list.g1.map((doc: Guide) => ({ ...doc }));
      return data;
    } catch (e) {
      console.log(`変換エラー発生 ${e}`);
      return undefined;
    }
  } else {
    console.error("受信エラー", res);
    return undefined;
  }
};

/**
 * @param {string} area - 地域ID(3byte)。詳細はこちら[https://api-portal.nhk.or.jp/doc-request#explain_area]をご覧ください。
 * @param {string} service - サービスID(2byte)。詳細はこちら[https://api-portal.nhk.or.jp/doc-request#explain_service]をご覧ください。
 * @param {string} id - 番組ID(13byte) Program List APIから取得できます。
 * @return {GuideDetails | undefined} - [通信成功、エラー] GuideDetailsかundefinedを返す
 */
export const fetchNHKGuideDetailsData = async (
  area: string,
  service: string,
  id: string
): Promise<GuideDetails | undefined> => {
  const url = `${NHK_API_URL}/info/${area}/${service}/${id}.json?key=${NHK_API_KEY}`;
  console.log("通信実行", {
    url,
    area,
    service,
    id,
  });

  const res = await axios.get(url).catch((err) => {
    console.log("受信エラー¥n¥n", err);
    return undefined;
  });
  if (res && res.status === 200) {
    console.log("受信データ¥n¥n", res.data);
    let data: GuideDetails;
    try {
      data = res.data.list.g1[0];
      return data;
    } catch (e) {
      console.log(`変換エラー発生 ${e}`);
      return undefined;
    }
  } else {
    console.error("受信エラー", res);
    return undefined;
  }
};
