/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISoundFeeRegistry,
  ISoundFeeRegistryInterface,
} from "../../../../contracts/core/interfaces/ISoundFeeRegistry";

const _abi = [
  {
    inputs: [],
    name: "InvalidPlatformFeeBPS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSoundFeeAddress",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "platformFeeBPS",
        type: "uint16",
      },
    ],
    name: "PlatformFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "soundFeeAddress",
        type: "address",
      },
    ],
    name: "SoundFeeAddressSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "requiredEtherValue",
        type: "uint128",
      },
    ],
    name: "platformFee",
    outputs: [
      {
        internalType: "uint128",
        name: "fee",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "platformFeeBPS",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "platformFeeBPS_",
        type: "uint16",
      },
    ],
    name: "setPlatformFeeBPS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "soundFeeAddress_",
        type: "address",
      },
    ],
    name: "setSoundFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "soundFeeAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISoundFeeRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ISoundFeeRegistryInterface {
    return new utils.Interface(_abi) as ISoundFeeRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISoundFeeRegistry {
    return new Contract(address, _abi, signerOrProvider) as ISoundFeeRegistry;
  }
}