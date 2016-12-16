# AWS CodePipeline hello world

Build & nasazení nodejs aplikace pomocí AWS CodePipeline.

Shit get serious! Mám totiž TODO list:

- [x] build trigger & fetch pomocí AWS Lambda
- [ ] velmi základní build na AWS CodeBuild
- [ ] velmi základní build pipeline
- [ ] slack notifikace
- [ ] build & push docker image s aplikací
- [ ] přidání jednoduchých testů
- [ ] přepsání do TypeScriptu
- [ ] vlastní build environment
- [ ] nasazení na kubernetes
- [ ] publikovat terraform konfiguraci pro celý cirkus

A budou další, třeba:

- stažení kódu pomocí gitu místo zipu
- informace o buildu: kdo ho spustil, jaké commity se buildí, jak dlouho to trvalo
- podpora buildů z různých branchí
- sparse checkout & build, to potřebuji obzvlášť

## fetch & build

AWS Lambda funkce stáhne ZIP s masterem z gitu a uloží ho na S3, kde si ho vyzvedne build. Tahle lambda je vystavená
světu pomocí AWS API Gateway a tudy do ní žďuchne GitHub při každém push eventu, pomocí webhooku.
