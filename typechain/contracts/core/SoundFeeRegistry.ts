/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SoundFeeRegistryInterface extends utils.Interface {
  functions: {
    "cancelOwnershipHandover()": FunctionFragment;
    "completeOwnershipHandover(address)": FunctionFragment;
    "grantRoles(address,uint256)": FunctionFragment;
    "hasAllRoles(address,uint256)": FunctionFragment;
    "hasAnyRole(address,uint256)": FunctionFragment;
    "ordinalsFromRoles(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownershipHandoverExpiresAt(address)": FunctionFragment;
    "ownershipHandoverValidFor()": FunctionFragment;
    "platformFee(uint128)": FunctionFragment;
    "platformFeeBPS()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounceRoles(uint256)": FunctionFragment;
    "requestOwnershipHandover()": FunctionFragment;
    "revokeRoles(address,uint256)": FunctionFragment;
    "rolesFromOrdinals(uint8[])": FunctionFragment;
    "rolesOf(address)": FunctionFragment;
    "setPlatformFeeBPS(uint16)": FunctionFragment;
    "setSoundFeeAddress(address)": FunctionFragment;
    "soundFeeAddress()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOwnershipHandover"
      | "completeOwnershipHandover"
      | "grantRoles"
      | "hasAllRoles"
      | "hasAnyRole"
      | "ordinalsFromRoles"
      | "owner"
      | "ownershipHandoverExpiresAt"
      | "ownershipHandoverValidFor"
      | "platformFee"
      | "platformFeeBPS"
      | "renounceOwnership"
      | "renounceRoles"
      | "requestOwnershipHandover"
      | "revokeRoles"
      | "rolesFromOrdinals"
      | "rolesOf"
      | "setPlatformFeeBPS"
      | "setSoundFeeAddress"
      | "soundFeeAddress"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOwnershipHandover",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "completeOwnershipHandover",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRoles",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasAllRoles",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasAnyRole",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ordinalsFromRoles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownershipHandoverExpiresAt",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownershipHandoverValidFor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "platformFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "platformFeeBPS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRoles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "requestOwnershipHandover",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRoles",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rolesFromOrdinals",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "rolesOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeBPS",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSoundFeeAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "soundFeeAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOwnershipHandover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeOwnershipHandover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRoles", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasAllRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasAnyRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ordinalsFromRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownershipHandoverExpiresAt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownershipHandoverValidFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "platformFeeBPS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestOwnershipHandover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeRoles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rolesFromOrdinals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rolesOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeBPS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSoundFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "soundFeeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipHandoverCanceled(address)": EventFragment;
    "OwnershipHandoverRequested(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PlatformFeeSet(uint16)": EventFragment;
    "RolesUpdated(address,uint256)": EventFragment;
    "SoundFeeAddressSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipHandoverCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipHandoverRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformFeeSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RolesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SoundFeeAddressSet"): EventFragment;
}

export interface OwnershipHandoverCanceledEventObject {
  pendingOwner: string;
}
export type OwnershipHandoverCanceledEvent = TypedEvent<
  [string],
  OwnershipHandoverCanceledEventObject
>;

export type OwnershipHandoverCanceledEventFilter =
  TypedEventFilter<OwnershipHandoverCanceledEvent>;

export interface OwnershipHandoverRequestedEventObject {
  pendingOwner: string;
}
export type OwnershipHandoverRequestedEvent = TypedEvent<
  [string],
  OwnershipHandoverRequestedEventObject
>;

export type OwnershipHandoverRequestedEventFilter =
  TypedEventFilter<OwnershipHandoverRequestedEvent>;

export interface OwnershipTransferredEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PlatformFeeSetEventObject {
  platformFeeBPS: number;
}
export type PlatformFeeSetEvent = TypedEvent<
  [number],
  PlatformFeeSetEventObject
>;

export type PlatformFeeSetEventFilter = TypedEventFilter<PlatformFeeSetEvent>;

export interface RolesUpdatedEventObject {
  user: string;
  roles: BigNumber;
}
export type RolesUpdatedEvent = TypedEvent<
  [string, BigNumber],
  RolesUpdatedEventObject
>;

export type RolesUpdatedEventFilter = TypedEventFilter<RolesUpdatedEvent>;

export interface SoundFeeAddressSetEventObject {
  soundFeeAddress: string;
}
export type SoundFeeAddressSetEvent = TypedEvent<
  [string],
  SoundFeeAddressSetEventObject
>;

export type SoundFeeAddressSetEventFilter =
  TypedEventFilter<SoundFeeAddressSetEvent>;

export interface SoundFeeRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SoundFeeRegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    completeOwnershipHandover(
      pendingOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    grantRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    hasAllRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { result: boolean }>;

    hasAnyRole(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { result: boolean }>;

    ordinalsFromRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number[]] & { ordinals: number[] }>;

    owner(overrides?: CallOverrides): Promise<[string] & { result: string }>;

    ownershipHandoverExpiresAt(
      pendingOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { result: BigNumber }>;

    ownershipHandoverValidFor(overrides?: CallOverrides): Promise<[BigNumber]>;

    platformFee(
      requiredEtherValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { fee: BigNumber }>;

    platformFeeBPS(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    requestOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokeRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rolesFromOrdinals(
      ordinals: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { roles: BigNumber }>;

    rolesOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { roles: BigNumber }>;

    setPlatformFeeBPS(
      platformFeeBPS_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSoundFeeAddress(
      soundFeeAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    soundFeeAddress(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancelOwnershipHandover(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  completeOwnershipHandover(
    pendingOwner: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  grantRoles(
    user: PromiseOrValue<string>,
    roles: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  hasAllRoles(
    user: PromiseOrValue<string>,
    roles: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  hasAnyRole(
    user: PromiseOrValue<string>,
    roles: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  ordinalsFromRoles(
    roles: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  ownershipHandoverExpiresAt(
    pendingOwner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownershipHandoverValidFor(overrides?: CallOverrides): Promise<BigNumber>;

  platformFee(
    requiredEtherValue: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  platformFeeBPS(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceRoles(
    roles: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  requestOwnershipHandover(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokeRoles(
    user: PromiseOrValue<string>,
    roles: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rolesFromOrdinals(
    ordinals: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rolesOf(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setPlatformFeeBPS(
    platformFeeBPS_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSoundFeeAddress(
    soundFeeAddress_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  soundFeeAddress(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancelOwnershipHandover(overrides?: CallOverrides): Promise<void>;

    completeOwnershipHandover(
      pendingOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    grantRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    hasAllRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    hasAnyRole(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    ordinalsFromRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    ownershipHandoverExpiresAt(
      pendingOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownershipHandoverValidFor(overrides?: CallOverrides): Promise<BigNumber>;

    platformFee(
      requiredEtherValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformFeeBPS(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounceRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    requestOwnershipHandover(overrides?: CallOverrides): Promise<void>;

    revokeRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rolesFromOrdinals(
      ordinals: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rolesOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPlatformFeeBPS(
      platformFeeBPS_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSoundFeeAddress(
      soundFeeAddress_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    soundFeeAddress(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipHandoverCanceled(address)"(
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnershipHandoverCanceledEventFilter;
    OwnershipHandoverCanceled(
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnershipHandoverCanceledEventFilter;

    "OwnershipHandoverRequested(address)"(
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnershipHandoverRequestedEventFilter;
    OwnershipHandoverRequested(
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnershipHandoverRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      oldOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "PlatformFeeSet(uint16)"(platformFeeBPS?: null): PlatformFeeSetEventFilter;
    PlatformFeeSet(platformFeeBPS?: null): PlatformFeeSetEventFilter;

    "RolesUpdated(address,uint256)"(
      user?: PromiseOrValue<string> | null,
      roles?: PromiseOrValue<BigNumberish> | null
    ): RolesUpdatedEventFilter;
    RolesUpdated(
      user?: PromiseOrValue<string> | null,
      roles?: PromiseOrValue<BigNumberish> | null
    ): RolesUpdatedEventFilter;

    "SoundFeeAddressSet(address)"(
      soundFeeAddress?: null
    ): SoundFeeAddressSetEventFilter;
    SoundFeeAddressSet(soundFeeAddress?: null): SoundFeeAddressSetEventFilter;
  };

  estimateGas: {
    cancelOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    completeOwnershipHandover(
      pendingOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    grantRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    hasAllRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasAnyRole(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ordinalsFromRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownershipHandoverExpiresAt(
      pendingOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownershipHandoverValidFor(overrides?: CallOverrides): Promise<BigNumber>;

    platformFee(
      requiredEtherValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    platformFeeBPS(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    requestOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokeRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rolesFromOrdinals(
      ordinals: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rolesOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPlatformFeeBPS(
      platformFeeBPS_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSoundFeeAddress(
      soundFeeAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    soundFeeAddress(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    completeOwnershipHandover(
      pendingOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    grantRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    hasAllRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasAnyRole(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ordinalsFromRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownershipHandoverExpiresAt(
      pendingOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownershipHandoverValidFor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformFee(
      requiredEtherValue: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    platformFeeBPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceRoles(
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    requestOwnershipHandover(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokeRoles(
      user: PromiseOrValue<string>,
      roles: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rolesFromOrdinals(
      ordinals: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rolesOf(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPlatformFeeBPS(
      platformFeeBPS_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSoundFeeAddress(
      soundFeeAddress_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    soundFeeAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
