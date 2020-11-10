import {
    createChart
} from "lightweight-charts";
import React from 'react';

const ChartBATUSDT = () => {
    
    const chartRef = React.useRef(null);

    // function resize() {
    //     Chart.applyOptions({ width: (chartRef).width(), height: (chartRef).height() })
    // }
    
    // new ResizeObserver(outputsize).observe((chartRef))

    React.useEffect(()=> {
        if(chartRef.current){
            const chart = createChart(chartRef.current, {
                // autoSize: true,
                height: 300,
                // width: '100%',
                // height: '100%',
                crosshair: {
                    vertLine : {
                        color: '#008875',
                        labelBackgroundColor: '#008875',
                    },
                    horzLine : {
                        color: '#008875',
                        labelBackgroundColor: '#008875'
                    },
                },
                grid: {
                    vertLines: {
                        visible: true,
                    },
                    horzLines: {
                        visible: true,
                    },
                },
                handleScale: {
                    pinch: true,
                },
                layout : {
                    fontFamily: 'RobotoMono-Light',
                    backgroundColor: "#ffffff",
                },
                localization: {
                    locale: 'en-FR',
                    dateFormat: 'MMM-dd'
                },
                priceScale: {
                    position: 'right',
                    borderVisible: true,
                    borderColor: '#ADADAD'
                },
                priceFormat: {
                    precision: 4,
                    minMove: 0.0001,
                },
                timeScale: {
                    rightOffset: 30,
                    barSpacing: 9,
                    borderVisible: true,
                    borderColor: '#ADADAD',
                    timeVisible: true,
                },
                watermark: {
                    color: 'rgba(0, 0, 0, 0.5)',
                    visible: true,
                    text: 'USDT-Futures BATUSDT - 1h',
                    fontFamily: 'RobotoMono-Light',
                    fontSize: 20,
                    horzAlign: 'left',
                    vertAlign: 'bottom',
                },
            });

            chart.applyOptions({
                // autoSize: true,
                handleResize: true,
                window: ResizeObserver,
                resize: (250, 150),

            });

            // chart.resize(
            //     250, 150
            // )

            prepareChart(chart);
        }
    }, [])

    function prepareChart(chart) {

        const candleSeries = chart.addCandlestickSeries({
            // title: 'USDT-Futures BATUSDT - 1h',
            upColor: '#003B33',
            downColor: '#FDF41B', 
            borderDownColor: '#003B33',
            borderUpColor: '#003B33',
            wickDownColor: '#003B33',
            wickUpColor: '#003B33',
            priceFormat: {
                precision: 4,
                minMove: 0.0001,
            },
        });

        fetch('http://localhost:5000/BATUSDT_candlesticks')
        .then((r) => r.json())
        .then((response) => {
            candleSeries.setData(response);
        });

        const binanceSocket = new WebSocket('wss://fstream.binance.com/stream?streams=batusdt@kline_1h/');

        binanceSocket.onmessage = function (event) {
            
            const message = JSON.parse(event.data);

            const candlestick = message.data.k;

            candleSeries.update({
                time: candlestick.t / 1000,
                open: candlestick.o,
                high: candlestick.h,
                low: candlestick.l,
                close: candlestick.c
            });
        }

    }

    return <div ref={chartRef} />;

}

export default ChartBATUSDT;