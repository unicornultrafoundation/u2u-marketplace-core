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
} from "./common";

export declare namespace ITransferManager {
  export type BatchTransferItemStruct = {
    collection: PromiseOrValue<string>;
    collectionType: PromiseOrValue<BigNumberish>;
    itemIds: PromiseOrValue<BigNumberish>[];
    amounts: PromiseOrValue<BigNumberish>[];
  };

  export type BatchTransferItemStructOutput = [
    string,
    number,
    BigNumber[],
    BigNumber[]
  ] & {
    collection: string;
    collectionType: number;
    itemIds: BigNumber[];
    amounts: BigNumber[];
  };
}

export interface TransferManagerInterface extends utils.Interface {
  functions: {
    "cancelOwnershipTransfer()": FunctionFragment;
    "confirmOwnershipRenouncement()": FunctionFragment;
    "confirmOwnershipTransfer()": FunctionFragment;
    "hasUserApprovedOperator(address,address)": FunctionFragment;
    "initiateOwnershipRenouncement()": FunctionFragment;
    "initiateOwnershipTransfer(address)": FunctionFragment;
    "isOperatorAllowed(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownershipStatus()": FunctionFragment;
    "potentialOwner()": FunctionFragment;
    "transferItemsERC721(address,address,address,uint256[],uint256[])": FunctionFragment;
    "transferItemsERC1155(address,address,address,uint256[],uint256[])": FunctionFragment;
    "transferBatchItemsAcrossCollections((address,uint8,uint256[],uint256[])[],address,address)": FunctionFragment;
    "grantApprovals(address[])": FunctionFragment;
    "revokeApprovals(address[])": FunctionFragment;
    "allowOperator(address)": FunctionFragment;
    "removeOperator(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelOwnershipTransfer"
      | "confirmOwnershipRenouncement"
      | "confirmOwnershipTransfer"
      | "hasUserApprovedOperator"
      | "initiateOwnershipRenouncement"
      | "initiateOwnershipTransfer"
      | "isOperatorAllowed"
      | "owner"
      | "ownershipStatus"
      | "potentialOwner"
      | "transferItemsERC721"
      | "transferItemsERC1155"
      | "transferBatchItemsAcrossCollections"
      | "grantApprovals"
      | "revokeApprovals"
      | "allowOperator"
      | "removeOperator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "confirmOwnershipRenouncement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "confirmOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasUserApprovedOperator",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateOwnershipRenouncement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initiateOwnershipTransfer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorAllowed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ownershipStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "potentialOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferItemsERC721",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferItemsERC1155",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferBatchItemsAcrossCollections",
    values: [
      ITransferManager.BatchTransferItemStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "grantApprovals",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeApprovals",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "allowOperator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeOperator",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmOwnershipRenouncement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasUserApprovedOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateOwnershipRenouncement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownershipStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "potentialOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferItemsERC721",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferItemsERC1155",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferBatchItemsAcrossCollections",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOperator",
    data: BytesLike
  ): Result;

  events: {
    "ApprovalsGranted(address,address[])": EventFragment;
    "ApprovalsRemoved(address,address[])": EventFragment;
    "CancelOwnershipTransfer()": EventFragment;
    "InitiateOwnershipRenouncement()": EventFragment;
    "InitiateOwnershipTransfer(address,address)": EventFragment;
    "NewOwner(address)": EventFragment;
    "OperatorAllowed(address)": EventFragment;
    "OperatorRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalsGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalsRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CancelOwnershipTransfer"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "InitiateOwnershipRenouncement"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InitiateOwnershipTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorRemoved"): EventFragment;
}

export interface ApprovalsGrantedEventObject {
  user: string;
  operators: string[];
}
export type ApprovalsGrantedEvent = TypedEvent<
  [string, string[]],
  ApprovalsGrantedEventObject
>;

export type ApprovalsGrantedEventFilter =
  TypedEventFilter<ApprovalsGrantedEvent>;

export interface ApprovalsRemovedEventObject {
  user: string;
  operators: string[];
}
export type ApprovalsRemovedEvent = TypedEvent<
  [string, string[]],
  ApprovalsRemovedEventObject
>;

export type ApprovalsRemovedEventFilter =
  TypedEventFilter<ApprovalsRemovedEvent>;

export interface CancelOwnershipTransferEventObject {}
export type CancelOwnershipTransferEvent = TypedEvent<
  [],
  CancelOwnershipTransferEventObject
>;

export type CancelOwnershipTransferEventFilter =
  TypedEventFilter<CancelOwnershipTransferEvent>;

export interface InitiateOwnershipRenouncementEventObject {}
export type InitiateOwnershipRenouncementEvent = TypedEvent<
  [],
  InitiateOwnershipRenouncementEventObject
>;

export type InitiateOwnershipRenouncementEventFilter =
  TypedEventFilter<InitiateOwnershipRenouncementEvent>;

export interface InitiateOwnershipTransferEventObject {
  previousOwner: string;
  potentialOwner: string;
}
export type InitiateOwnershipTransferEvent = TypedEvent<
  [string, string],
  InitiateOwnershipTransferEventObject
>;

export type InitiateOwnershipTransferEventFilter =
  TypedEventFilter<InitiateOwnershipTransferEvent>;

export interface NewOwnerEventObject {
  newOwner: string;
}
export type NewOwnerEvent = TypedEvent<[string], NewOwnerEventObject>;

export type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;

export interface OperatorAllowedEventObject {
  operator: string;
}
export type OperatorAllowedEvent = TypedEvent<
  [string],
  OperatorAllowedEventObject
>;

export type OperatorAllowedEventFilter = TypedEventFilter<OperatorAllowedEvent>;

export interface OperatorRemovedEventObject {
  operator: string;
}
export type OperatorRemovedEvent = TypedEvent<
  [string],
  OperatorRemovedEventObject
>;

export type OperatorRemovedEventFilter = TypedEventFilter<OperatorRemovedEvent>;

export interface TransferManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TransferManagerInterface;

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
    /**
     * This function can be used for both cancelling a transfer to a new owner and      cancelling the renouncement of the ownership.
     * This function is used to cancel the ownership transfer.
     */
    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This function is used to confirm the ownership renouncement.
     */
    confirmOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This function can only be called by the current potential owner.
     * This function is used to confirm the ownership transfer.
     */
    confirmOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This returns whether the user has approved the operator address. The first address is the user and the second address is the operator (e.g. LooksRareProtocol).
     */
    hasUserApprovedOperator(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * This function is used to initiate the ownership renouncement.
     */
    initiateOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This function is used to initiate the transfer of ownership to a new owner.
     * @param newPotentialOwner New potential owner address
     */
    initiateOwnershipTransfer(
      newPotentialOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * This returns whether the operator address is allowed by this contract's owner.
     */
    isOperatorAllowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Ownership status.
     */
    ownershipStatus(overrides?: CallOverrides): Promise<[number]>;

    /**
     * Address of the potential owner.
     */
    potentialOwner(overrides?: CallOverrides): Promise<[string]>;

    /**
     * This function transfers items for a single ERC721 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC721(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * It does not allow batch transferring if from = msg.sender since native function should be used.
     * This function transfers items for a single ERC1155 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC1155(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferBatchItemsAcrossCollections(
      items: ITransferManager.BatchTransferItemStruct[],
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Each operator address must be globally allowed to be approved.
     * This function allows a user to grant approvals for an array of operators.         Users cannot grant approvals if the operator is not allowed by this contract's owner.
     * @param operators Array of operator addresses
     */
    grantApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Each operator address must be approved at the user level to be revoked.
     * This function allows a user to revoke existing approvals for an array of operators.
     * @param operators Array of operator addresses
     */
    revokeApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Only callable by owner.
     * This function allows an operator to be added for the shared transfer system.         Once the operator is allowed, users can grant NFT approvals to this operator.
     * @param operator Operator address to allow
     */
    allowOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    /**
     * Only callable by owner.
     * This function allows the user to remove an operator for the shared transfer system.
     * @param operator Operator address to remove
     */
    removeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  /**
   * This function can be used for both cancelling a transfer to a new owner and      cancelling the renouncement of the ownership.
   * This function is used to cancel the ownership transfer.
   */
  cancelOwnershipTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This function is used to confirm the ownership renouncement.
   */
  confirmOwnershipRenouncement(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This function can only be called by the current potential owner.
   * This function is used to confirm the ownership transfer.
   */
  confirmOwnershipTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This returns whether the user has approved the operator address. The first address is the user and the second address is the operator (e.g. LooksRareProtocol).
   */
  hasUserApprovedOperator(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * This function is used to initiate the ownership renouncement.
   */
  initiateOwnershipRenouncement(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This function is used to initiate the transfer of ownership to a new owner.
   * @param newPotentialOwner New potential owner address
   */
  initiateOwnershipTransfer(
    newPotentialOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * This returns whether the operator address is allowed by this contract's owner.
   */
  isOperatorAllowed(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Ownership status.
   */
  ownershipStatus(overrides?: CallOverrides): Promise<number>;

  /**
   * Address of the potential owner.
   */
  potentialOwner(overrides?: CallOverrides): Promise<string>;

  /**
   * This function transfers items for a single ERC721 collection.
   * @param amounts Array of amounts
   * @param collection Collection address
   * @param from Sender address
   * @param itemIds Array of itemIds
   * @param to Recipient address
   */
  transferItemsERC721(
    collection: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    itemIds: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * It does not allow batch transferring if from = msg.sender since native function should be used.
   * This function transfers items for a single ERC1155 collection.
   * @param amounts Array of amounts
   * @param collection Collection address
   * @param from Sender address
   * @param itemIds Array of itemIds
   * @param to Recipient address
   */
  transferItemsERC1155(
    collection: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    itemIds: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferBatchItemsAcrossCollections(
    items: ITransferManager.BatchTransferItemStruct[],
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Each operator address must be globally allowed to be approved.
   * This function allows a user to grant approvals for an array of operators.         Users cannot grant approvals if the operator is not allowed by this contract's owner.
   * @param operators Array of operator addresses
   */
  grantApprovals(
    operators: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Each operator address must be approved at the user level to be revoked.
   * This function allows a user to revoke existing approvals for an array of operators.
   * @param operators Array of operator addresses
   */
  revokeApprovals(
    operators: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Only callable by owner.
   * This function allows an operator to be added for the shared transfer system.         Once the operator is allowed, users can grant NFT approvals to this operator.
   * @param operator Operator address to allow
   */
  allowOperator(
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  /**
   * Only callable by owner.
   * This function allows the user to remove an operator for the shared transfer system.
   * @param operator Operator address to remove
   */
  removeOperator(
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * This function can be used for both cancelling a transfer to a new owner and      cancelling the renouncement of the ownership.
     * This function is used to cancel the ownership transfer.
     */
    cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    /**
     * This function is used to confirm the ownership renouncement.
     */
    confirmOwnershipRenouncement(overrides?: CallOverrides): Promise<void>;

    /**
     * This function can only be called by the current potential owner.
     * This function is used to confirm the ownership transfer.
     */
    confirmOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    /**
     * This returns whether the user has approved the operator address. The first address is the user and the second address is the operator (e.g. LooksRareProtocol).
     */
    hasUserApprovedOperator(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * This function is used to initiate the ownership renouncement.
     */
    initiateOwnershipRenouncement(overrides?: CallOverrides): Promise<void>;

    /**
     * This function is used to initiate the transfer of ownership to a new owner.
     * @param newPotentialOwner New potential owner address
     */
    initiateOwnershipTransfer(
      newPotentialOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * This returns whether the operator address is allowed by this contract's owner.
     */
    isOperatorAllowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Ownership status.
     */
    ownershipStatus(overrides?: CallOverrides): Promise<number>;

    /**
     * Address of the potential owner.
     */
    potentialOwner(overrides?: CallOverrides): Promise<string>;

    /**
     * This function transfers items for a single ERC721 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC721(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * It does not allow batch transferring if from = msg.sender since native function should be used.
     * This function transfers items for a single ERC1155 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC1155(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    transferBatchItemsAcrossCollections(
      items: ITransferManager.BatchTransferItemStruct[],
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Each operator address must be globally allowed to be approved.
     * This function allows a user to grant approvals for an array of operators.         Users cannot grant approvals if the operator is not allowed by this contract's owner.
     * @param operators Array of operator addresses
     */
    grantApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Each operator address must be approved at the user level to be revoked.
     * This function allows a user to revoke existing approvals for an array of operators.
     * @param operators Array of operator addresses
     */
    revokeApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Only callable by owner.
     * This function allows an operator to be added for the shared transfer system.         Once the operator is allowed, users can grant NFT approvals to this operator.
     * @param operator Operator address to allow
     */
    allowOperator(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Only callable by owner.
     * This function allows the user to remove an operator for the shared transfer system.
     * @param operator Operator address to remove
     */
    removeOperator(
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ApprovalsGranted(address,address[])"(
      user?: null,
      operators?: null
    ): ApprovalsGrantedEventFilter;
    ApprovalsGranted(
      user?: null,
      operators?: null
    ): ApprovalsGrantedEventFilter;

    "ApprovalsRemoved(address,address[])"(
      user?: null,
      operators?: null
    ): ApprovalsRemovedEventFilter;
    ApprovalsRemoved(
      user?: null,
      operators?: null
    ): ApprovalsRemovedEventFilter;

    "CancelOwnershipTransfer()"(): CancelOwnershipTransferEventFilter;
    CancelOwnershipTransfer(): CancelOwnershipTransferEventFilter;

    "InitiateOwnershipRenouncement()"(): InitiateOwnershipRenouncementEventFilter;
    InitiateOwnershipRenouncement(): InitiateOwnershipRenouncementEventFilter;

    "InitiateOwnershipTransfer(address,address)"(
      previousOwner?: null,
      potentialOwner?: null
    ): InitiateOwnershipTransferEventFilter;
    InitiateOwnershipTransfer(
      previousOwner?: null,
      potentialOwner?: null
    ): InitiateOwnershipTransferEventFilter;

    "NewOwner(address)"(newOwner?: null): NewOwnerEventFilter;
    NewOwner(newOwner?: null): NewOwnerEventFilter;

    "OperatorAllowed(address)"(operator?: null): OperatorAllowedEventFilter;
    OperatorAllowed(operator?: null): OperatorAllowedEventFilter;

    "OperatorRemoved(address)"(operator?: null): OperatorRemovedEventFilter;
    OperatorRemoved(operator?: null): OperatorRemovedEventFilter;
  };

  estimateGas: {
    /**
     * This function can be used for both cancelling a transfer to a new owner and      cancelling the renouncement of the ownership.
     * This function is used to cancel the ownership transfer.
     */
    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This function is used to confirm the ownership renouncement.
     */
    confirmOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This function can only be called by the current potential owner.
     * This function is used to confirm the ownership transfer.
     */
    confirmOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This returns whether the user has approved the operator address. The first address is the user and the second address is the operator (e.g. LooksRareProtocol).
     */
    hasUserApprovedOperator(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * This function is used to initiate the ownership renouncement.
     */
    initiateOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This function is used to initiate the transfer of ownership to a new owner.
     * @param newPotentialOwner New potential owner address
     */
    initiateOwnershipTransfer(
      newPotentialOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * This returns whether the operator address is allowed by this contract's owner.
     */
    isOperatorAllowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Ownership status.
     */
    ownershipStatus(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Address of the potential owner.
     */
    potentialOwner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * This function transfers items for a single ERC721 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC721(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * It does not allow batch transferring if from = msg.sender since native function should be used.
     * This function transfers items for a single ERC1155 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC1155(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferBatchItemsAcrossCollections(
      items: ITransferManager.BatchTransferItemStruct[],
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Each operator address must be globally allowed to be approved.
     * This function allows a user to grant approvals for an array of operators.         Users cannot grant approvals if the operator is not allowed by this contract's owner.
     * @param operators Array of operator addresses
     */
    grantApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Each operator address must be approved at the user level to be revoked.
     * This function allows a user to revoke existing approvals for an array of operators.
     * @param operators Array of operator addresses
     */
    revokeApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Only callable by owner.
     * This function allows an operator to be added for the shared transfer system.         Once the operator is allowed, users can grant NFT approvals to this operator.
     * @param operator Operator address to allow
     */
    allowOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    /**
     * Only callable by owner.
     * This function allows the user to remove an operator for the shared transfer system.
     * @param operator Operator address to remove
     */
    removeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * This function can be used for both cancelling a transfer to a new owner and      cancelling the renouncement of the ownership.
     * This function is used to cancel the ownership transfer.
     */
    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This function is used to confirm the ownership renouncement.
     */
    confirmOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This function can only be called by the current potential owner.
     * This function is used to confirm the ownership transfer.
     */
    confirmOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This returns whether the user has approved the operator address. The first address is the user and the second address is the operator (e.g. LooksRareProtocol).
     */
    hasUserApprovedOperator(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * This function is used to initiate the ownership renouncement.
     */
    initiateOwnershipRenouncement(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This function is used to initiate the transfer of ownership to a new owner.
     * @param newPotentialOwner New potential owner address
     */
    initiateOwnershipTransfer(
      newPotentialOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * This returns whether the operator address is allowed by this contract's owner.
     */
    isOperatorAllowed(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Ownership status.
     */
    ownershipStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Address of the potential owner.
     */
    potentialOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * This function transfers items for a single ERC721 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC721(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * It does not allow batch transferring if from = msg.sender since native function should be used.
     * This function transfers items for a single ERC1155 collection.
     * @param amounts Array of amounts
     * @param collection Collection address
     * @param from Sender address
     * @param itemIds Array of itemIds
     * @param to Recipient address
     */
    transferItemsERC1155(
      collection: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      itemIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferBatchItemsAcrossCollections(
      items: ITransferManager.BatchTransferItemStruct[],
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Each operator address must be globally allowed to be approved.
     * This function allows a user to grant approvals for an array of operators.         Users cannot grant approvals if the operator is not allowed by this contract's owner.
     * @param operators Array of operator addresses
     */
    grantApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Each operator address must be approved at the user level to be revoked.
     * This function allows a user to revoke existing approvals for an array of operators.
     * @param operators Array of operator addresses
     */
    revokeApprovals(
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Only callable by owner.
     * This function allows an operator to be added for the shared transfer system.         Once the operator is allowed, users can grant NFT approvals to this operator.
     * @param operator Operator address to allow
     */
    allowOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    /**
     * Only callable by owner.
     * This function allows the user to remove an operator for the shared transfer system.
     * @param operator Operator address to remove
     */
    removeOperator(
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
