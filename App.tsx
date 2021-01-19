import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { GuideList } from "./src/components/organisms/GuideList";
import axios from "axios";
import { NHK_API_KEY, NHK_API_URL } from "@env";

const area = "130";
const service = "g1";
const date = "2021-01-20";
const url = `${NHK_API_URL}/list/${area}/${service}/${date}.json?key=${NHK_API_KEY}`;

export default function App() {
  const [guideList, setGuideList] = useState([]);
  useEffect(() => {
    getNHKGuideData();
  }, []);

  const getNHKGuideData = async () => {
    const response = await axios.get(url);
    setGuideList(response.data.list.g1);
  };

  return (
    <SafeAreaView>
      <GuideList guideList={guideList} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
