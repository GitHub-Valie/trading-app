import config
from binance.client import Client
from futures_tradesCounter import trades
from futures_account import futures_account
from fees_count import totalCommissions
from datetime import datetime, date
from pprint import pprint

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

uptime = str(
    (datetime.fromtimestamp(
    round(datetime.timestamp((datetime.now())))
) - datetime.fromtimestamp(1603238400)).days
)

trades_list = []

for trade in trades:
    trades_list.append(trade)

best_trade = max(trades_list, key=lambda x:x['realizedPnl'])

generalInfo = {
    'starting_funds': '20.00 USDT',
    'total_commissions' : totalCommissions,
    'uptime': uptime + ' days',
    'strategy': 'AweOsc ta1',
    'candle_size': '1 Hour',
    'stop_loss' : 'Enabled'
}

bestTrade = {
    'best_trade' : best_trade
}