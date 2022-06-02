run:
	docker build . -t hivebound-challenge
	docker run -d -p 3000:3000 -v $(PWD):/app/ -v /app/node_modules --name hivebound hivebound-challenge

kill:
	docker kill hivebound
	docker rm hivebound
	docker rmi hivebound-challenge