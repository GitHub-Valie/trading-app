from futures_account import futures_totalMarginBalance
from spot_account import spot_totalWalletBalance

TotalWalletBalance = format((float(spot_totalWalletBalance) + float(futures_totalMarginBalance)), '.4f')
