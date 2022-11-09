import { DeployFunction } from "hardhat-deploy/dist/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre
    const { deploy } = deployments

    const { deployer } = await getNamedAccounts()

    await deploy("SoundCreatorV1", {
        from: deployer,
        args: [deployer],
        log: true,
    })
}

export default func

func.tags = ["SoundCreatorV1"]
