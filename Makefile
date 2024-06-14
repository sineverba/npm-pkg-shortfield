SONARSCANNER_VERSION=5.0.1

sonar:
	docker run \
		--rm \
		-it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_TOKEN=$(SONAR_TOKEN) \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu \
		-x eslint \
		-u 
	npx update-browserslist-db@latest
	npm install
	npm audit fix || exit 0;