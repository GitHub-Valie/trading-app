import config
from binance.client import Client
from futures_tradesCounter import trades
from futures_account import futures_account
from datetime import datetime, date
from pprint import pprint

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)


# Obtenir le 'commission' et le 'commissionAsset' de chaque trade dans trades
# Convertir le 'commission' en float et faire la somme des commissions
# Convertir la somme des commissions en USDT

BNB_fees = []
USDT_fees = []

for trade in trades:
    if trade['commissionAsset'] == 'BNB':
        trade['commission'] = float(trade['commission'])
        BNB_fees.append(trade['commission'])
    
    elif trade['commissionAsset'] == 'USDT':
        trade['commission'] = float(trade['commission'])
        USDT_fees.append(trade['commission'])
    
    else:
        pass

BNBUSDT_value = client.get_avg_price(symbol='BNBUSDT')
BNBUSDT_value = float(BNBUSDT_value['price'])

totalCommissions = str(round(sum(BNB_fees) * BNBUSDT_value + sum(USDT_fees), 2)) + ' USDT' # Total BNB fees * conversion to USDT + Total USDT fees
