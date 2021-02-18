# 움짤검색기

## Description

자바스크립트를 이용해 구현한 움짤 검색기 입니다. ajax를 이용해 서버에서 검색 데이터를 불러오고 불러온 검색 결과를 화면에 그렸습니다.


## Preview
### 검색기능
 <img src="https://user-images.githubusercontent.com/71836751/108381440-27285380-724b-11eb-80f7-b26fefef0fc6.gif">

### debounce처리
  <img src="https://user-images.githubusercontent.com/71836751/108382289-01e81500-724c-11eb-94bc-b06fa608a244.gif">
  

## Contributors
  - 송보은 [Github](https://github.com/Boeun05) 
 
## Features

#### 검색기능
- 각 역할을 하는 컴포넌트를 만들고(searchResult, searchKeyword) App.js에서 모든 컴포넌트를 관리
- fetch로 지정된 API에서 검색결과 데이터 array를 반환받고 화면에 결과를 그린다
- async/ await를 이용한 비동기 처리

#### debounce처리
- setTimer를 이용한 debounce처리로 불필요한 Api요청이 가는 것을 방지(300ms)

#### 기타
- import문을 이용해 스크립트를 module화 해서 불러온다


## Requirements

### Language
Javascript
### Framework
X
  
## 참고자료
- https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import
- https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95
- https://joshua1988.github.io/web-development/javascript/js-async-await/
