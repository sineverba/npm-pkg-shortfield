sonar-all:
	docker-compose start sonarscanner && docker-compose logs -f sonarscanner

sonar:
	docker-compose --profile scanner-only up

upgrade:
	npx ncu -u
	npm install
	npm audit fix
