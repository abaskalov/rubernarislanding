REPOSITORY:=cr.rubernaris.team
IMAGE_NAME:=rubernaris-team-frontend
TAG:=latest
CONTAINER_NAME:=rubernaris-frontend

.PHONY: build push run stop logs clean all

# Сборка Docker образа
build:
	docker build -t $(REPOSITORY)/$(IMAGE_NAME):$(TAG) -f Containerfile .

# Загрузка образа в registry
push: build
	docker push $(REPOSITORY)/$(IMAGE_NAME):$(TAG)

# Запуск контейнера локально
run:
	docker run --rm --name $(CONTAINER_NAME) -p 8080:8080 $(REPOSITORY)/$(IMAGE_NAME):$(TAG)

# Остановка и удаление контейнера
stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

# Просмотр логов контейнера
logs:
	docker logs -f $(CONTAINER_NAME)

# Удаление образа
clean: stop
	docker rmi $(REPOSITORY)/$(IMAGE_NAME):$(TAG) || true

# Полная пересборка и запуск
all: stop build run