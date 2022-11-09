// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@soundxyz/sound-protocol/contracts/core/SoundCreatorV1.sol";

contract TestMe is SoundCreatorV1 {
    constructor() SoundCreatorV1("TestMe", "TST") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
