SONARSCANNER_VERSION=4.8.0

sonar:
	docker run \
		--rm \
		-it \
		--user="$(id -u):$(id -g)" \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_LOGIN=$(SONAR_TOKEN) \
		-e SONAR_SCANNER_OPTS="-Xmx1024m" \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npx browserslist@latest --update-db
	npm install
	npm audit fix
