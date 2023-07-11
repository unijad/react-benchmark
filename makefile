install: 
	brew install hyperfine
benchmark-vite-dev:
	cd ./vite && hyperfine npm run dev -i -r 100
benchmark-swc-dev:
	cd ./swc && hyperfine npm run dev -i -r 100
benchmark-cra-dev:
	cd ./cra && hyperfine npm run dev -i -r 100
benchmark-vite-build:
	cd ./vite && hyperfine npm run build -i -r 100
benchmark-swc-build:
	cd ./swc && hyperfine npm run build -i -r 100
benchmark-cra-build:
	cd ./cra && hyperfine npm run build -i -r 100
benchmark-all:
	make benchmark-vite-dev
	make benchmark-swc-dev
	make benchmark-cra-dev
	make benchmark-vite-build
	make benchmark-swc-build
	make benchmark-cra-build