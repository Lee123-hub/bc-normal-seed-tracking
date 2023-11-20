import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { BannerData } from "./utils/bannerData";
import { generateRollsLightweight } from "./utils/seed";

const getTrackUrlWithSeedQueryParam = (seed: number) => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set("seed", seed.toString());
  return `?${queryParams.toString()}#`;
};

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 1em;
  border: 1px solid black;
  max-width: 40em;
`;

const ProgressBar = styled.div<{ percentage: number }>`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: green;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

// Don't ask
const UlWithStrong = styled.ul`
  strong {
    font-weight: bold;
  }
`;

const FinderResults = ({
  workerProgresses,
  seedsFound,
  isSearching,
  bannerData,
  numPulls,
}: {
  workerProgresses: number[];
  seedsFound: number[];
  isSearching: boolean;
  bannerData: BannerData;
  numPulls: number;
}) => {
  if (seedsFound.length > 200) {
    seedsFound = seedsFound.slice(0, 200);
  }
  return isSearching ? (
    <div>
      <Typography variant="body1">Searching...</Typography>
      {workerProgresses.map((progress, i) => {
        return (
          <RowContainer>
            <Typography variant="body1" style={{ minWidth: "30px" }}>
              #{i + 1}
            </Typography>
            <ProgressBarContainer>
              <ProgressBar percentage={progress} />
            </ProgressBarContainer>
          </RowContainer>
        );
      })}
    </div>
  ) : (
    <div style={{ marginBottom: "24px" }}>
      {seedsFound.length > 0 ? (
        <>
          <Typography variant="body1">
            Notes:
            <ul>
              <li>
                如果有多个找到了种子，只有一个是正确的。您可以多抽几次，用于验证哪一个种子是正确的。
              </li>
              <li>
                也有可能因为输入了错误的序列导致无结果
                <ul>
                  <li>
                    出现这种情况请检查序列并重新输入
                  </li>
                </ul>
              </li>
            </ul>
            <br />
            共计发现{seedsFound.length}个满足您输入序列的种子。{" "}
          </Typography>
          <UlWithStrong>
            {seedsFound.map((seed, i) => {
              const [seedAfterRolls, nextRollIsReroll] =
                generateRollsLightweight(seed, numPulls, bannerData);
              return (
                <li>
                  <strong>Seed {i + 1}</strong>
                  <ul>
                    <li>
                      <strong>包含</strong>输入的{numPulls}抽序列:{" "}
                      <a href={getTrackUrlWithSeedQueryParam(seed)}>{seed}</a>
                    </li>
                    <li>
                      <strong>不包含</strong>输入的{numPulls}抽序列:{" "}
                      <a href={getTrackUrlWithSeedQueryParam(seedAfterRolls)}>
                        {seedAfterRolls}
                      </a>
                    </li>
                    {nextRollIsReroll && (
                      <li>
                        <strong>Important:</strong> For this seed, the next roll
                        is detected to be a <i>dupe track switch</i>.
                        <ul>
                          <li>
                            The tracker <i>doesn't account for this</i> if you
                            use the <strong>After</strong> link, so it will
                            incorrectly show you proceeding along track A.
                          </li>
                          <li>
                            Instead, you should use the <strong>Before</strong>{" "}
                            link and update your seed manually.
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </li>
              );
            })}
          </UlWithStrong>
        </>
      ) : (
        <Typography variant="body1">
          无法搜索到种子，请检查输入的序列是否正确。
        </Typography>
      )}
    </div>
  );
};

export default FinderResults;
