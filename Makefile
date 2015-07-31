.PHONY: all build serve

all: build


build:
	git submodule init
	jekyll build

serve:
	jekyll serve -H 0.0.0.0
