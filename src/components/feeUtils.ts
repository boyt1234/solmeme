export interface FeeInputs {
  showCreatorInfo: boolean;
  showSocialLinks: boolean;
  showLiquidity: boolean;
  liquiditySol: number;
  revokeMint: boolean;
  revokeUpdate: boolean;
}

export const calculateTotalFee = ({
  showCreatorInfo,
  showSocialLinks,
  showLiquidity,
  liquiditySol,
  revokeMint,
  revokeUpdate,
}: FeeInputs): number => {
  // Base fee includes revoke freeze (always on), revoke mint + update (default on)
  let totalFee = 0.3;

  // Remove 0.1 if revoke mint is turned off
  if (!revokeMint) totalFee -= 0.1;

  // Remove 0.1 if revoke update is turned off
  if (!revokeUpdate) totalFee -= 0.1;

  // Optional add-ons
  if (showCreatorInfo) totalFee += 0.1;
  if (showSocialLinks) totalFee += 0.1;

  // Add liquidity amount directly
  if (showLiquidity) {
    totalFee += isNaN(liquiditySol) ? 0 : liquiditySol;
  }

  return Number(totalFee.toFixed(2));
};
