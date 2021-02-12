# Binance Traderat App

This is a small web app about cryptocurrencies and trading. You can use this webapp to learn more about the basics of trading algorithms, check the algorithm's performance (the algorithm is currently offline as it needs to be improved) with the dashboard, track live cryptocurrency price changes ...

<p align="center">
  <img src="https://raw.githubusercontent.com/GitHub-Valie/trading-app/master/app/src/images/app%20images/home.png" width="800"/>
</p>
 
<p align="center">
  <img src="https://raw.githubusercontent.com/GitHub-Valie/trading-app/master/app/src/images/app%20images/dashboard.png" width="800"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/GitHub-Valie/trading-app/master/app/src/images/app%20images/cryptos-exchange.png" width="800"/>
</p>

## How to setup the server and app
Let's walk through a quick guide with steps to get you started with flask served react apps

### Step 0 : Create a config.py file

This step is only required if you wish to make this particular app work: Because Traderat App sends requests to the Binance API to get account information and price data, you will need to create a Binance account and generate public and private keys.

This is the sample content of a ```config.py``` file that you want to store in the ```\server``` directory:

```
binance = {
    'public_key' : 'your_public_key',
    'secret_key' : 'your_secret_key',
}

production = False
```

### Flask server setup

Go to the flask server directory
```cd server```

Create a new virtual environment to install and isolate project dependencies
```python -m venv .venv```

Activate the virtual environment
```.venv\Scripts\activate```

Update pip if necessary
```python -m pip install --upgrade pip```

Install dependencies listed in requirements.txt
```pip install flask gunicorn python-binance python-dotenv```

List all installed dependencies
```pip list```

### React App setup

Install all necessary dependencies listed in ```app/package.json```
```npm i```


## How to start the Traderat App

### Start the flask server

```flask run```

### Start the react app

```npm start```

