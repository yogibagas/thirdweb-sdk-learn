const { useContract } = require('@thirdweb-dev/react');
import ZLPABI from '../abi/zlp.json';

export const useZLPContract = () => {
  const { contract: zlpContract } = useContract(
    "0x441Af0D47cD02b57a7c39C2f4256427ADdE524AE",
    ZLPABI
  );
  return zlpContract;
};
