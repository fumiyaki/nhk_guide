import React from "react";
import { render } from "@testing-library/react-native";
import { GuideList } from "../../organisms/GuideList";
import { mockGuideListData } from "../../../api/datasources/mockData";

describe("GuideList Test", () => {
  it("すべてのデータが正しい時、全てが表示されている", () => {
    const { getByText } = render(<GuideList guideList={mockGuideListData} />);
    const title1 = getByText("時論公論「緊急事態宣言　休業手当を急げ！」");
    const title2 = getByText("ＮＨＫニュース　おはよう日本");
    expect(title1).toBeDefined();
    expect(title2).toBeDefined();
  });

  it("渡ってくるデータがundefinedの時、No Dataが表示されている", () => {
    let guideList = undefined;
    const { getByText } = render(<GuideList guideList={guideList} />);
    const noData = getByText("No Data");
    expect(noData).toBeDefined();
  });
});
