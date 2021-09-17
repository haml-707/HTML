# import requests
# from bs4 import BeautifulSoup
# start=0
# for n in range(0,10):
#  html=requests.get('https://movie.douban.com/top250?start='+str(start))
#  start+=25
#  soup = BeautifulSoup(html.text, 'html.parser')
#  for item in soup.find_all('div',"info"):
#  title=item.div.a.span.string #获取标题
#  yearline=item.find('div','bd').p.contents[2].string #获取年份那一行
#  yearline=yearline.replace(' ','') #去掉这一行的空格
#  yearline=yearline.replace('\n','') #去掉这一行的回车换行
#  year=yearline[0:4] #只取年份前四个字符
#  print(title,'\t',year)
print('我爱小佳与')
teep = input('请输入数字')
gess = int(teep)
if gess == 9:
    print('你是小甲鱼的蛔虫吗')
else:
    print('猜错了弟弟')
print('游戏结束')