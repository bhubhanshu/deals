import requests
from selenium import webdriver
from bs4 import BeautifulSoup
import json
import re
import time
base = 'https://www.desidime.com'
driver = webdriver.Chrome('/home/bhubhanshu/chromedriver')
driver.get(base+'/new')
n=10
while n>0:
    driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(1)
    n-=1
driver.execute_script("window.scrollTo(0, 0);")
soup = BeautifulSoup(driver.page_source, 'html.parser')
results = soup.findAll('div',class_='deal-box')
items = []
for i in results:
    link = i.find('div',class_='getdeal')
    img = i.find('div',class_='pr')
    store = i.find('div',class_='deal-store')
    price = i.find('div',class_='deal-price')
    discount = i.find('div',class_='deal-discount')
    if None in (link,img,store,price,discount):
        continue
    store = store.find('a')
    if None in (store,):
        continue
    deal = img.find('a')['href']
    newpage = requests.get(base+deal)
    newsoup = BeautifulSoup(newpage.content, 'html.parser')
    deal = newsoup.find(id='deal-detail-like-dislike-container')
    if None in (deal,):
        continue
    deal = deal.find('h1')
    img = img.find('img')['data-src']
    link = link.find('a')['data-href']
    link = re.search(r'url=(.*)',link).groups()[0]
    time = i.find('time')['datetime']
    item = {
        'link': link,
        'img' : img,
        'deal' : deal.text.strip(),
        'store' : store.text.strip(),
        'price' : price.text.strip(),
        'discount' : discount.text.strip(),
        'time' : time
    }
    items.append(item)
with open('data.json','w') as f:
    json.dump(items, f)