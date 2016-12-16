.DEFAULT_GOAL := all
.PHONY: all help build push bash

IMAGE := stibi/aws-pipeline-nodejs-hello-world

RELEASE := latest
IMAGE_TAG := ${RELEASE}

all: build

help:
	@echo "Build a backup nodejs hello world image"
	@echo ""
	@echo "Targets:"
	@echo "  help		This message"
	@echo "  build		Builds the docker image"
	@echo "  push		Publish the docker image to a repository"

build:
	@echo "Building image: ${IMAGE}:${IMAGE_TAG}"
	@echo "RELEASE=${RELEASE}"
	docker build -t ${IMAGE}:${IMAGE_TAG} .
	@echo
	@echo "SUCCESS!"
	@echo ${IMAGE}:${IMAGE_TAG}

push:
	@echo "Pushing ${IMAGE}:${IMAGE_TAG}"
	docker push ${IMAGE}:${IMAGE_TAG}

run:
	docker run --rm -p 3000:3000 ${IMAGE}:${IMAGE_TAG}
