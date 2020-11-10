from binance.client import Client
import config

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

# Spot's endpoints

spot_account = client.get_account()
spot_balance_list = []

for spot_bal in spot_account['balances']:
    if float(spot_bal['free']) != 0:
        spot_balance_list.append({
            'Asset': spot_bal['asset'],
            'Free': format(float(spot_bal['free']), '.8f'),
            'Symbol': spot_bal['asset'] + 'USDT',
            'Value': '0'
        })

spot_totalWalletBalance = 0.00000000

for index in range(len(spot_balance_list)):
    try:
        value = client.get_avg_price(symbol=spot_balance_list[index]['Symbol'])
        tmp= float(value['price']) * float(spot_balance_list[index]['Free'])
        spot_totalWalletBalance += tmp
        spot_balance_list[index]['Value'] = round(tmp, 8)
        spot_balance_list[index]['Free'] = format(float(spot_balance_list[index]['Free']), '.8f')
    except:
        tmp = float(spot_balance_list[index]['Free'])
        spot_totalWalletBalance += tmp
        spot_balance_list[index]['Value'] = round(tmp, 8)
        spot_balance_list[index]['Free'] = format(float(spot_balance_list[index]['Free']), '.8f')

spot_totalWalletBalance = format(float(spot_totalWalletBalance), '.4f')