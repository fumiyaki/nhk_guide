import React from "react";
import { render } from "@testing-library/react-native";
import { GuideDetailsTemplate } from "../../templates/GuideDetailsTemplate";
import { mockGuideDetail } from "../../../api/datasources/mockData";

describe("GuideDetails Test", () => {
  it("すべてのデータが正しい時、全てが表示されている", () => {
    const { getByText } = render(
      <GuideDetailsTemplate guideDetail={mockGuideDetail} />
    );

    const title = getByText("ＳＯＮＧＳ「密着！大泉洋紅白歌合戦ＳＰ」");
    const startTime = getByText("1/23(土) 23:00 - 23:30");
    const subTitle = getByText(
      "ＳＯＮＧＳ責任者・大泉洋が白組司会を務めた去年の第７１回ＮＨＫ紅白歌合戦。ＳＯＮＧＳは大泉に密着。けん玉シーンの舞台裏や大泉が感動した歌唱シーンを一挙お届け！"
    );
    const content = getByText(
      "ＳＯＮＧＳ責任者・大泉洋が白組司会を務めた去年の紅白歌合戦。ＳＯＮＧＳでは大泉に独占密着！実はヒヤヒヤだったけん玉シーンの舞台裏や、大泉が心を打ち抜かれた感動の歌唱シーンを一挙お届け！放送終了後まさかの展開に大泉タジタジ！？内村光良、二階堂ふみからのメッセージも！出演：あいみょん、石川さゆり、鈴木雅之、Ｓｕｐｅｒｆｌｙ、玉置浩二、氷川きよし、福山雅治、ＭＩＳＩＡ、三山ひろし、ＬｉＳＡ"
    );
    const act = getByText(
      "【出演】大泉洋，内村光良，二階堂ふみ，あいみょん，石川さゆり，鈴木雅之，Ｓｕｐｅｒｆｌｙ，玉置浩二，氷川きよし，福山雅治，ＭＩＳＩＡ，三山ひろし，ＬｉＳＡ，【語り】戸次重幸"
    );
    const airTime = getByText("30分");
    const homepage = getByText("http://nhk.jp/P599");

    expect(title).toBeDefined();
    expect(startTime).toBeDefined();
    expect(subTitle).toBeDefined();
    expect(content).toBeDefined();
    expect(act).toBeDefined();
    expect(airTime).toBeDefined();
    expect(homepage).toBeDefined();
  });
});
