import supportedChains from './chains';
import { IChainData } from './types';
import type { BigNumberish } from '@ethersproject/bignumber';
import { formatUnits } from '@ethersproject/units';

export function getChainData(chainId?: number): IChainData {
  const chainData = supportedChains.filter((chain: any) => chain.chain_id === chainId)[0];

  if (!chainData) {
    throw new Error('ChainId missing or not supported');
  }

  const API_KEY = '460f40a260564ac4a4f4b3fffb032dad';

  if (
    chainData.rpc_url.includes('infura.io') &&
    chainData.rpc_url.includes('%API_KEY%') &&
    API_KEY
  ) {
    const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY);

    return {
      ...chainData,
      rpc_url: rpcUrl,
    };
  }

  return chainData;
}

export function ellipseAddress(address = '', width = 10): string {
  if (!address) {
    return '';
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export const parseBalance = (value: BigNumberish, decimals = 18, decimalsToDisplay = 3) =>
  parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay);
