import React from "react";
import { render } from "@testing-library/react-native";
import { GuideDetails } from "../../templates/GuideDetails";
import { mockGuideData } from "../../../api/datasources/mockData";

describe("GuideDetails Test", () => {
  it("すべてのデータが正しい時、全てが表示されている", () => {
    const { getByText } = render(<GuideDetails guide={mockGuideData} />);

    const title = getByText("時論公論「緊急事態宣言　休業手当を急げ！」");
    const startTime = getByText("1/15(金) 4:50 - 5:00");
    const subTitle = getByText(
      "長引くコロナ禍。休業手当が受け取れない従業員が続出。企業が立て替える仕組みのため、その余裕がないか忌避したとみられる。新たな支援金も利用が伸びない。どうすれば？"
    );
    const content = getByText("【出演】ＮＨＫ解説委員…竹田忠");
    const act = getByText("竹田忠");
    const airTime = getByText("10分");

    expect(title).toBeDefined();
    expect(startTime).toBeDefined();
    expect(subTitle).toBeDefined();
    expect(content).toBeDefined();
    expect(act).toBeDefined();
    expect(airTime).toBeDefined();
  });
});
