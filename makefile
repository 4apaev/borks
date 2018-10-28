DC = docker-compose
# SQ = @./src/../node_modules/.bin/sequelize
NPM = node_modules/.bin
MOCHA = $(NPM)/mocha
SPECS = $(shell find ./src/* -name "*.spec.js")

down:
	$(DC) -f docker-compose.yml down

up:
ifeq ($(shell $(DC) ps | grep "postgres"),)
	@echo "UP"
	$(DC) up --build -d
endif

migrate: up
	@echo "MIGRATE"
	cd src && ../$(NPM)/sequelize db:migrate && ../$(NPM)/sequelize db:seed:all && cd ..

# seed: migrate
# 	@echo "SEED"
# 	cd ./src && $(SQ) db:seed:all && cd ..


test: migrate
	@echo "TEST $(SPECS)"
	@NODE_ENV=test nyc $(MOCHA) $(SPECS) --exit

# psql:
# 	docker exec -it olo_db_1 psql -U postgres

all: down up migrate seed test

# .PHONY: test


