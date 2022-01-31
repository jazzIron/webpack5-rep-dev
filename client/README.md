
# **webpack5-repo-dev**
##### webpack5 react typescript storybook boilerplate



## Features ✏

- Webpack5
- React
- Typescript
- Yarn Berry 사용한 패키지 관리 시스템
  - Pnp 시스템을 통한  Zero-Install (yarn install x)
  - CI에서 의존성 설치하는 시간 절약
- 스토리북
  - react & typescript 통한 아토믹 디자인 구현
  - 스토리북을 통한 시각화 작업

## Tech 🛠
- [node] 16.x
- [webpack] 5
- [yarnberry]
- [react] 17.x
- [typescript] 4.x
- [storybook] 6.x 
- [Emotion] 
- [ESLint]
- [Prettier]
- [Jest]
- [cypress]

## Project Structure

|폴더명|내용|
|:-|:-|
|api|api 관련 모음|
|assets|리소스 아이템 모음|
|components|페이지에 종속되지 않는 하위 컴포넌트|
|features|페이지 조각들의 모음<br/> 각 도메인(페이지) 단위 모음|
|layout|레이아웃 컴포넌트 위치|
|pages|문서 최상단 구조 페이지 모음|
|routes|라우터 설정 페이지 모음|
|store|recoil에 사용되는 Atom, Selector 모음 <br/>상태 초기값, 공용 값 정리|
|utils|필요한 공통 유틸|

## Project Setting

- Yarn berry의 PnP 기능을 사용할 때 TypeScript가 작동 하도록 추가 구성 필요
  - VSCode에서는 사용자 지정 TypeScript 설정을 명시적으로 활성화

####  1. VSCode extension [zipfs]추가
	```bash
	yarn dlx @yarnpkg/sdks vscode
	```
.vscode 폴더와.yarn/sdks에 추가된 SDK를 확인
	 __Zero-Installs을 사용하기 때문에 `.vscode`는 `.gitignore`에 추가하면 안됩니다.__
	

#### 2. [typescript plugin] import
 플러그인은 types를 포함하지 않는 패키지를 추가할 때 @types/ 패키지를 package.json 폴더에 종속성을 자동으로 추가해줌 
 
	```bash
	yarn plugin import typescript
	```

설치 후에는 `.yarn/plugins/@yarnpkg` 폴더 아래에 `plugin-typescript.cjs` 파일이 생성
	`TypeScript 버전 선택..`을 검색해 `Use Workspace Version` 선택하여 workspace의 typescript sdk 변경

## Development 🛠

### react 실행

```bash
# react port 3000
yarn start
```

### storybook 실행 
``` bash
# storybook port 6006
yarn storybook
```

### jest 실행
``` bash
yarn test:coverage
```

### cypress 실행
``` bash
yarn cypress:open
```



## License
MIT
**Free Software, Hell Yeah!**

[//]: # 
   [node]: <https://nodejs.org/ko/>
   [webpack]: <https://webpack.kr/migrate/5/>
   [yarnberry]: <https://github.com/yarnpkg/berry>
   [react]: <https://ko.reactjs.org/>
   [typescript]: <https://www.typescriptlang.org/>
   [storybook]: <https://storybook.js.org/>
   [Emotion]: <https://emotion.sh/docs/introduction>
   [Prettier]: <https://prettier.io/>
   [ESLint]: <https://eslint.org/>
   [cypress]: <https://www.cypress.io/>
   [jest]: <https://jestjs.io/>
   [zipfs]: <https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs>
   [typescript plugin]: <https://github.com/yarnpkg/berry/tree/master/packages/plugin-typescript>

