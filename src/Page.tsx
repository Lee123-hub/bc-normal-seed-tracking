import React, { useState } from "react";
import RollTable from "./RollTable";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { getQueryParam, setQueryParam } from "./utils/queryParams";
import { AllBanners } from "./utils/bannerData";

const Page = () => {
  // We'll just put all our controls here because we're lazy
  const [seedInput, setSeedInput] = useState(getQueryParam("seed"));
  const selectedBanners = getQueryParam("banners").split(",") || [];

  return (
    <>
      <Typography variant="h4">
        BC Normal Seed Tracker <a href="#credits">[Credits]</a>
      </Typography>
      <Typography variant="h6">使用说明</Typography>
      <ul>
        <li>
          {" "}
          <strong>
            银票池子的种子和金票等稀有池子不共享。
          </strong>{" "}
          银票池子的种子需要重新获取。
        </li>
        <ul>
          <li>
            点击<a href="#/finder">这里</a>获取银票池种子.
          </li>
        </ul>
        <li>
          可以通过点击banner来选取不同的池子，可以通过切换池子来规避换线。
        </li>
        <li>
          点击<strong>蓝色物品文字</strong>会更新种子。 点击{" "}
          <strong>格子内其他位置</strong>则会高亮10连抽的物品。
        </li>
      </ul>
      <Typography variant="h6">控制</Typography>
      <Typography variant="subtitle2">当前种子</Typography>
      <div style={{ marginBottom: "4px" }}>
        <input
          type="text"
          style={{ marginRight: "4px" }}
          value={seedInput}
          onChange={(event) => setSeedInput(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            setQueryParam("seed", seedInput);
          }}
        >
          刷新
        </button>
      </div>
      <Typography variant="subtitle2">数量选择</Typography>
      <div style={{ marginBottom: "4px" }}>
        <select
          style={{ marginRight: "4px" }}
          onChange={(event) => setQueryParam("rolls", event.target.value)}
        >
          {[100, 200, 500, 999].map((numRolls) => (
            <option
              value={numRolls}
              selected={getQueryParam("rolls") === numRolls.toString()}
            >
              {numRolls}
            </option>
          ))}
        </select>
      </div>
      <Typography variant="subtitle2">Banners</Typography>
      <div style={{ display: "flex", gap: "24px" }}>
        {AllBanners.map((banner) => {
          return (
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={selectedBanners.includes(banner.shortName)}
                onClick={(event) => {
                  let newSelectedBanners;
                  if ((event.target as HTMLInputElement).checked) {
                    newSelectedBanners = [
                      ...selectedBanners,
                      banner.shortName,
                    ].sort();
                  } else {
                    newSelectedBanners = selectedBanners.filter(
                      (bannerName) => bannerName !== banner.shortName
                    );
                  }
                  setQueryParam("banners", newSelectedBanners.join(","));
                }}
                style={{ marginRight: "8px", width: "20px", height: "20px" }}
              ></input>
              <Typography variant="body1">{banner.name}</Typography>
            </label>
          );
        })}
      </div>
      <Typography variant="body1">&nbsp;</Typography>
      <RollTable />
    </>
  );
};

export default Page;
