const {MAINCHAIN_GENESIS_BLOCK_REWARD,MAINCHAIN_BLOCK_TIME,
    MAINCHAIN_DIFFICULTY_TUNING_INTERVAL,
    MAINCHAIN_REWARD_TUNING_INTERVAL,
    MAINCHAIN_BLOCK_MAX_SEIZE}=require('./defaults');



//infinit sum equals MAINCHAIN_GENESIS_BLOCK_REWARD*MAINCHAIN_REWARD_TUNING_INTERVAL/(1-rateofdecay)
    console.log('Total assets in ciculation:')
console.log( 2.0*MAINCHAIN_GENESIS_BLOCK_REWARD*MAINCHAIN_REWARD_TUNING_INTERVAL)

console.log(Number.MAX_SAFE_INTEGER);

/*let totalasset=0
let chainlength
for (let i = 0; i < 100; i++) {
    chainlength=i*MAINCHAIN_REWARD_TUNING_INTERVAL
    totalasset+=parseInt(MAINCHAIN_GENESIS_BLOCK_REWARD/Math.pow(2, chainlength / MAINCHAIN_REWARD_TUNING_INTERVAL))*MAINCHAIN_REWARD_TUNING_INTERVAL
    console.log(totalasset)
}*/
console.log( 2.0*MAINCHAIN_GENESIS_BLOCK_REWARD*MAINCHAIN_REWARD_TUNING_INTERVAL/1000000000000,'tera globatios')
console.log(Number.MAX_SAFE_INTEGER);