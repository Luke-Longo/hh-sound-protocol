/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SafeTransferLib,
  SafeTransferLibInterface,
} from "../../../../solady/src/utils/SafeTransferLib";

const _abi = [
  {
    inputs: [],
    name: "ApproveFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ETHTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromFailed",
    type: "error",
  },
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207aadcfa39e1060b03886349b1e92758330dd2ef332a3a291e0b551b1528511e064736f6c63430008100033";

type SafeTransferLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeTransferLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeTransferLib__factory extends ContractFactory {
  constructor(...args: SafeTransferLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SafeTransferLib> {
    return super.deploy(overrides || {}) as Promise<SafeTransferLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SafeTransferLib {
    return super.attach(address) as SafeTransferLib;
  }
  override connect(signer: Signer): SafeTransferLib__factory {
    return super.connect(signer) as SafeTransferLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeTransferLibInterface {
    return new utils.Interface(_abi) as SafeTransferLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeTransferLib {
    return new Contract(address, _abi, signerOrProvider) as SafeTransferLib;
  }
}
