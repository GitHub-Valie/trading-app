from flask import Flask
from flask import jsonify

from dotenv import load_dotenv
import os

import config
from binance.client import Client

from spot_account import spot_totalWalletBalance, spot_balance_list
from futures_account import (
    futures_assets, 
    futures_pnl, 
    futures_totalMarginBalance, 
    futures_totalWalletBalance, 
    positions_list
)
from total_balance import TotalWalletBalance

from futures_tradesCounter import trades_counter, pnl_counter
from trading_bot_info import generalInfo, best_trade
from get_history import (
    BATUSDT_candlesticks, 
    XRPUSDT_candlesticks, 
    ZILUSDT_candlesticks
)

load_dotenv()

client = Client(
    api_key=config.binance['public_key'],
    api_secret=config.binance['secret_key']
)

app = Flask(__name__, static_folder='../app/build/', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/spotTotalWalletBalance', methods=['GET'])
def get_spotTotalWalletBalance():
    return jsonify(
        spotTotalWalletBalance=spot_totalWalletBalance
    )

@app.route('/spotBalanceList', methods=['GET'])
def get_spotBalanceList():
    return jsonify(
        spotBalanceList=spot_balance_list
    )

@app.route('/futuresAssets', methods=['GET'])
def get_futuresAssets():
    
    futures_account = client.futures_account()
    futures_assets = futures_account['assets']

    return jsonify(
        futuresAssets=futures_assets
    )

@app.route('/futuresPositions', methods=['GET'])
def get_futuresPositions():
    return jsonify(
        futuresPositions=positions_list
    )

@app.route('/futuresTotalWalletBalance', methods=['GET'])
def get_futuresTotalWalletBalance():
    return jsonify(
        futuresTotalWalletBalance=futures_totalWalletBalance
    )

@app.route('/futuresTotalMarginBalance', methods=['GET'])
def get_futuresTotalMarginBalance():
    return jsonify(
        futuresTotalMarginBalance=futures_totalMarginBalance
    )

@app.route('/generalInfo', methods=['GET'])
def get_generalInfo():
    return jsonify(
        generalInfo=generalInfo
    )

@app.route('/bestTrade', methods=['GET'])
def get_bestTrade():
    return jsonify(
        bestTrade=best_trade
    )

@app.route('/totalCommissions', methods=['GET'])
def get_totalCommissions():
    return jsonify(
        totalCommissions=totalCommissions
    )

@app.route('/TotalWalletBalance', methods=['GET'])
def get_TotalWalletBalance():
    return jsonify(
        TotalWalletBalance=TotalWalletBalance
    )

@app.route('/tradesCounter', methods=['GET'])
def get_tradesCounter():
    return jsonify(
        tradesCounter=trades_counter
    )

@app.route('/pnlCounter', methods=['GET'])
def get_pnlCounter():
    return jsonify(
        pnlCounter=pnl_counter
    )

@app.route('/BATUSDT_candlesticks', methods=['GET'])
def get_BATUSDT_candlesticks():
    response = jsonify(
        BATUSDT_candlesticks
    )

    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/XRPUSDT_candlesticks', methods=['GET'])
def get_XRPUSDT_candlesticks():
    response = jsonify(
        XRPUSDT_candlesticks
    )

    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/ZILUSDT_candlesticks', methods=['GET'])
def get_ZILUSDT_candlesticks():
    response = jsonify(
        ZILUSDT_candlesticks
    )

    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    app.run(port=(os.getenv('PORT') if os.getenv('PORT') else 8000), debug=False)