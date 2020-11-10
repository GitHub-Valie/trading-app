import config
from binance.client import Client

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

trades = client.futures_account_trades(startTime = 1603238400)

profit_counter = 0
loss_counter = 0

pnl_counter = [
    {
        'symbol': 'BATUSDT',
        'PNL': format(float(0.00000000), '.6f')
    },
    {
        'symbol': 'XRPUSDT',
        'PNL': format(float(0.00000000), '.6f')
    }
]

for i in range(len(pnl_counter)):
    for j in range(len(trades)):
        if trades[j]['symbol'] == pnl_counter[i]['symbol']:
            pnl_counter[i]['PNL'] = format(round(float(pnl_counter[i]['PNL']), 6) + round(float(trades[j]['realizedPnl']), 6), '.6f')

for index in range(len(trades)):
    if float(trades[index]['realizedPnl']) > 0:
        profit_counter = profit_counter + 1
    if float(trades[index]['realizedPnl']) < 0:
        loss_counter = loss_counter + 1

trades_counter = {
    'profitCounter': profit_counter,
    'lossCounter': loss_counter
}
