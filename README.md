# **webpack5-repo-dev**
##### webpack5 react typescript storybook boilerplate

---

## Features ✏

- 스토리북 설정
 - react & typescript 통한 아토믹 디자인 구현
 - 스토리북을 통한 시각화 작업




> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.



## Tech 🛠
---
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
---

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

## Development 🛠
---

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
---
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


