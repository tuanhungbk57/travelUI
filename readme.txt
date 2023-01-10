-----------api---------------
cd G:\2022\Project\API\NTH.Travel
(chay local) docker-compose -f Docker-compose.yml up --name hungntithust/travel-api
docker build -t hungntithust/travel-api .
xóa container, image đã có
docker push hungntithust/travel-api
docker pull hungntithust/travel-api
docker run --name api -dp 5000:80 -v /nth/images:/data/Images hungntithust/travel-api

------database----------- khong dung
acc: nth - 18cbA@
docker compose -f mysql-only.yml  up --force-recreate --build -d

-------gateway----------
cd /nth/deployment/gateway         -- cd tai vps  
xóa container, image đã có
docker build -t hungntithust/gateway .
docker run --name gateway -dp 80:80 hungntithust/gateway

-------image service-------
cd /nth/deployment/nginx	-- cd tai vps   
docker compose -f  docker-compose.yml up

------- website build source tai local ---------
cd G:\2022\Project\NTH.Travel
G:
npm run build:ssr
copy folder dist, Dockerfile, Package.json vào vps /nth/deployment/website
cd /nth/deployment/website     (vps)
xóa container, image đã có
docker build -t hungntithust/travel-web .
docker run --name website  -dp 4000:4000 hungntithust/travel-web


---- admin
cd G:\2022\Project\NTH.TravelAdmin
G:
ng build --prod --base-href /
cd /nth/deployment/admin          (vps)
copy folder dist vao /nth/deployment/admin
docker build -t hungntithust/travel-admin .
docker run --name admin -dp 4100:80 hungntithust/travel-admin

------------------------docker
docker rm -f containerid
docker image rm -f imageid
