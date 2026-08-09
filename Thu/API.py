import json
import requests
from pprint import pprint

city_name = input("Enter city name: ")
api_key = "793d06451d93b8fdec873dae2cc02182" 
api_url = f"http://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}&units=metric"
get_server_information = requests.get(api_url)
data = get_server_information.json()
pprint(data)