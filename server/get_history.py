from binance.client import Client
import config

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

symbol_list = ['BATUSDT', 'XRPUSDT', 'ZILUSDT']

BATUSDT_candlesticks = []
XRPUSDT_candlesticks = []
ZILUSDT_candlesticks = []

for symbol in symbol_list:

    candlesticks = client.futures_klines(     
        symbol=symbol,
        interval=Client.KLINE_INTERVAL_1HOUR,
        start_str='Last 20 Days'
    )

    if symbol=='BATUSDT':

        for data in candlesticks:

            candlestick = {
                'time': round(data[0]/1000),
                'open': data[1],
                'high': data[2],
                'low': data[3],
                'close': data[4],
                'volume': data[5]
            }

            BATUSDT_candlesticks.append(candlestick)

    elif symbol=='XRPUSDT':

        for data in candlesticks:

            candlestick = {
                'time': round(data[0]/1000),
                'open': data[1],
                'high': data[2],
                'low': data[3],
                'close': data[4],
                'volume': data[5]
            }

            XRPUSDT_candlesticks.append(candlestick)

    elif symbol=='ZILUSDT':

        for data in candlesticks:

            candlestick = {
                'time': round(data[0]/1000),
                'open': data[1],
                'high': data[2],
                'low': data[3],
                'close': data[4],
                'volume': data[5]
            }

            ZILUSDT_candlesticks.append(candlestick)

    else:
        
        pass