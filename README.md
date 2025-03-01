## 접속 및 시연 연상

URL : https://prography-10th-frontend-five.vercel.app/

![Image](https://github.com/user-attachments/assets/c4d93b7e-8740-460d-8139-23ef18a45ce0)

## 기술 스택 및 소개

- #### react-hook-form

  폼과 입력 필드의 간편한 관리를 위해 사용

- #### @useFunnel

  퍼널의 기본 형식을 적용하기 위해 사용

  커스텀 기능이 필요 없기에 라이브러리를 적용

- #### zod

  간단한 validation작업 및 에러 메시지 정리를 위해 사용

- #### vite

  간단한 환경 설정을 위해 사용

- #### react-router

  SPA로 개발 위해 사용

  2개의 페이지로 구성되고, SEO의 필요가 없으므로 CSR로만 제작

- #### tailwind

  RCC에서 간단한 스타일링과 런타임에 스타일 변형에 용이해 사용

- #### tanstack querty

  pending, error, success핸들링을 간단히 처리하기 위해 사용

- #### react-toastify

  간단한 알림 UI를 위해 사용

  브라우저의 히스토리 조작 및 제출 에러 대응에 적용

## 고려 사항

### 서비스 목표

- 1인 개발, 작은 서비스, 낮은 확장 가능성

  개발되는 기능이 작으며 이에 다른 기능 및 페이지를 붙일 계획이 없으므로,

  닫힌 서비스를 위한 구조 및 코드 구상

  테스트 코드 생략, 기타 환경 설정 생략

### 퍼널 동작

- @useFunnel의 일반적 사용방식과 다르게, 요구사항에 맞춰 이전 Step으로 돌아가도 데이터 유지
- 브라우저 히스토리 조작으로 ( '뒤로가기'로 이전 Step으로 이동하고, 수정 후 '앞으로가기') 인한 폼 데이터와 Step의 컨텍스트 사이 괴리 해소

  위 상황 발생 시 toast UI를 통해 에러 메시지 알리며 Step 이동 방지

### 제출 동작

- 데이터를 post할 endpoint가 존재하지 않으므로, Promise로 대체

### 코드 정리

- 커스텀 훅은 제작하지 않음

  여러 훅들간 복잡한 상호작용 없으며, 훅의 재활용 및 확장 가능성 없으므로

- 컴포넌트 분리

  책임에 따라 컴포넌트를 분리

  Step의 UI를 책임지는 컴포넌트들, Funnel동작 관리하는 컴포넌트, form동작 관리하는 컴포넌트로 분리

  SubHeader는 확장 가능성이 적은 것을 고려해 중복되는 코드 제거만을 위해 분리

- 동일 스타일 적용 위해 style폴더에 input필드들 스타일 작성

  공통의 컴포넌트로 묶기에 차이점이 존재하는 경우가 존재하여 스타일 코드만 따로 분리

### 폴더 구조

- 프로젝트 크기가 작으므로, 간단한 폴더 구조 사용

  atomic및 fsd는 보다 큰 프로젝트에 확장 가능성을 크게 고려하므로 요구사항과 맞지 않아 제외

### 스타일

- UI는 기본 요청 사항에 벗어나지 않도록 함.
- 반응형으로 제작해 레이아웃이 크게 깨지지 않는 최대-최소 범위를 정함
