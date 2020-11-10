from binance.client import Client
import config

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

futures_account = client.futures_account()
futures_assets = futures_account['assets']
positions_list = []

for symbol in futures_account['positions']:
    if symbol['initialMargin'] != '0':
        positions_list.append({
            'symbol': symbol['symbol'],
            'entryPrice': format(float(symbol['entryPrice']), '.6f'),
            'leverage': symbol['leverage'],
            'PnL': format(float(symbol['unrealizedProfit']), '.6f')
        })

futures_totalWalletBalance = format(float(futures_account['totalWalletBalance']), '.8f')
futures_totalMarginBalance = format(float(futures_account['totalMarginBalance']), '.8f')
futures_pnl = format(float(futures_account['totalUnrealizedProfit']), '.8f')