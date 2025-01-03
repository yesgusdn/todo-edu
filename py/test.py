import yfinance as yf
import pandas as pd

# 10년치 KOSPI와 NASDAQ 데이터 가져오기
kospi = yf.download("^KS11", start="2024-01-01", end="2024-01-01")  # KOSPI Index
nasdaq = yf.download("^IXIC", start="2024-01-01", end="2024-01-01")  # NASDAQ Index

# 데이터 확인
print(kospi.head())
print(nasdaq.head())

# # CSV로 저장 (옵션)
# kospi.to_csv("kospi_10y.csv")
# nasdaq.to_csv("nasdaq_10y.csv")