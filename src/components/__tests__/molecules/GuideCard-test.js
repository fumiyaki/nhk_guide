import React from "react";
import { render } from "@testing-library/react-native";
import { GuideCard } from "../../molecules/GuideCard";
import { mockGuideData } from "../../../api/datasources/mockData";

describe("GuideCard Test", () => {
  it("すべてのデータが正しい時、全てが表示されている", () => {
    const { getByText, getByTestId } = render(
      <GuideCard guide={mockGuideData} />
    );
    const title = getByText("時論公論「緊急事態宣言　休業手当を急げ！」");
    const content = getByText("【出演】ＮＨＫ解説委員…竹田忠");
    const start_time = getByText("1/15(金) 4:50 - 5:00");
    const image = getByTestId("guide_image_component");

    expect(title).toBeDefined();
    expect(image).toBeDefined();
    expect(content).toBeDefined();
    expect(start_time).toBeDefined();
  });

  it("contentが''の時、内容未定が表示されている", () => {
    let guide = mockGuideData;
    guide.content = "";
    const { getByText, getByTestId } = render(<GuideCard guide={guide} />);
    const title = getByText("時論公論「緊急事態宣言　休業手当を急げ！」");
    const content = getByText("内容未定");
    const start_time = getByText("1/15(金) 4:50 - 5:00");
    const image = getByTestId("guide_image_component");

    expect(title).toBeDefined();
    expect(image).toBeDefined();
    expect(content).toBeDefined();
    expect(start_time).toBeDefined();
  });
});
