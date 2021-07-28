# 夏娜
> 桃花寻剑客，不语笑春风。白头归未得，家住海门东。

## 運行
 docker run -it --name shana-home -v $PWD/shana_home:/shana_home -p 3030:3030  -p 3000:3000  -p 9999:9999 node bash 

 yarn run dev  # 非強制更新 可以修改package vite -force

3030 开发环境的端口
3000 生产ssr环境的端口
9999 mock模拟数据的 ps 正常情况下，不需要。以实现无入侵的mockjs


yarn config set registry https://registry.npm.taobao.org/ #淘宝加速
yarn config set registry https://repo.huaweicloud.com/repository/npm/ #华为加速


PS： 缺少美感覺，stop一下。  从mac切换到arch，这么感觉这个变的不自然呢
个人缺少财力，先接一些外包订单。 
回头在搞这个，明天写后台

![截图](./public/index.png)

git clone git@github.com:jinkendo/shana_home.git