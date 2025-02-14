/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  LibOrderDataV3,
  LibOrderDataV3Interface,
} from "../LibOrderDataV3";

const _abi = [
  {
    inputs: [],
    name: "V3_BUY",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "V3_SELL",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60f5610025600b82828239805160001a60731461001857fe5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c806366c5bb27146042578063fcbf579d14605c575b600080fd5b60486062565b6040516053919060aa565b60405180910390f35b60486086565b7f2fa3cfd36fc2a11048e46a7dac1916c392731880ba073f2b7f10566b2fd6133e81565b7f1b18cdf6be079a715471a3705c2d89e1d730066ce14915cb307cc3e4a90c92d481565b6001600160e01b03199190911681526020019056fea2646970667358221220c642a6a25240d3c61e28a75c2879894887016f65cf89e8774c3ab1b9484e6f8164736f6c63430007060033";

type LibOrderDataV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibOrderDataV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibOrderDataV3__factory extends ContractFactory {
  constructor(...args: LibOrderDataV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LibOrderDataV3> {
    return super.deploy(overrides || {}) as Promise<LibOrderDataV3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LibOrderDataV3 {
    return super.attach(address) as LibOrderDataV3;
  }
  override connect(signer: Signer): LibOrderDataV3__factory {
    return super.connect(signer) as LibOrderDataV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibOrderDataV3Interface {
    return new utils.Interface(_abi) as LibOrderDataV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibOrderDataV3 {
    return new Contract(address, _abi, signerOrProvider) as LibOrderDataV3;
  }
}
