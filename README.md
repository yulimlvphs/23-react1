# 23-React1 <h1>202130228_정유림</h1>
2023 react 수업

<h3>6/1</h3>

- Sytle-components는 태그드 템플릿 리터럴을 사용하여 구성 요소의 스타일을 지정합니다.

- 프로그래밍에서 리터럴은 소스코드의 고정된 값을 의미.

- 템플릿 리터럴은 말 그대로 리터럴을 템플릿 형태로 사용하는 자바스크립트 문법인데, `를 사용하여 문자열을 작성하고 그 안에 대체 가능한 expression을 넣는 방법이다.

- 
------------------------------------------------------------------------------------------------------------------
<h3>5/25</h3>

- 여러 개의 컨텍스트를 동시에 사용하려면 Context.Provider를 중첩해서 사용한다. 

- 하지만 두 개 또는 그 이상의 컨텍스트 값이 자주 함께 사용될 경우 모든 값을 한 번에 제공해주는 

- React.createContext -> 컨텍스트를 생성하기 위한 함수이고 파라미터에는 기본값을 넣어주면 된다. 

- Context.Provider -> 컴포넌트로 하위 컴포넌트들을 감싸주면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있게 된다. 하위 컴포넌트를 consumer 컴포넌트라고 부른다.

- Class.contextType -> Provider 하위에 있는 클래스 컴포넌트에서 컨텍스트의 데이터에 접근하기 위해서 사용된다.

------------------------------------------------------------------------------------------------------------------

<h3>5/18</h3>

- Containment: 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법입니다.

- 컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없는 경우가 있습니다.

- 이런 컴포넌트에서는 children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋습니다.

- 이때 children prop은 컴포넌트의 props에 기본적으로 들어있는 children속성을 사용합니다.

- 만일 여러개의  children 집합이 필요할 경우는 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어줍니다.

- 리액트에서는 propsm children을 통해 하위 컴포넌트를 하나로 모아서 제공해줍니다.

- 웰컴다이얼로그는 아이얼로그의 특별한 케이스이다.

- 범용적인 개념을 구별이 되게 구체화하는 것을 특수화라고 한다.

- 리엑트에서는 합성을 사용하여 특수화를 구현한다.

- containment를 위해서 props.children을 사용하고, specialization을 위해 직접 정의한 props를 사용하면 됩니다.

- 합성과 대비되는 개념으로 상속이 있다.

- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다.

- 컨텍스트를 사용하면 일일이 props로 전달핳 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있습니다.

- 컨텍스트를 사용하려면 컴포넌트의 상위 컴포넌트에서 Provider로 감싸주어야 합니다.

- 다른 레벨의 많은 컴포넌트가 에디터를 필요로 하는 경우가 아니면 props를 통해 데이터를 전달하는 컴포넌트 합성 방식이 더 적합하다.

------------------------------------------------------------------------------------------------------------------
<h3>5/11</h3>

- State 상태 끌어 올리기 : 상위 컴포넌트의 상태 변경 함수 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행하는 것이다.
동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야할 필요가 있다.
이땐 가장 가까운 공통 조상(컴포넌트)에서 state를 끌어올리는 것을 권장한다.

------------------------------------------------------------------------------------------------------------------
<h3>5/4</h3>

- 리스크는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것이다.

- 키는 각 객체나 아이템을 구분할 수 있는 고유한 값을 의미한다.

- 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있다.

- 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해서 사용

- 키는 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 된다. 

- 제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트입니다.

- 제어 컴포넌트에 value prop를 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력값을 바꿀 수 없다.

- 만약 value prop은 넣되 자유롭게 입력할 수 있게 만들고 싶다면 값이 undefined 또는 null을 넣어주면 됩니다.
------------------------------------------------------------------------------------------------------------------
<h3>4/27/</h3>

- 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 헨들러"라고 하고, 이벤트가 발생하는 것을 게속 듣고 있다는 의미로 "이벤트 리스너"라고 부르기도 한다.

- event(e)라는 매개변수는 리액트의 이벤트 객체를 의미합니다.

- 리액트의 이벤트는 이름을 카멜 표기법으로 표기하고, 이벤트를 처리할 함수를 그대로 전달.

- 렌더링해야 할 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수이다.

- 인라인 if = if문을 직접 사용하지 않고, 동일한 효과를 내기 위해서 &&(논리연산자)를 사용한다.

- 컴포넌트 렌더링 막기 : 리액트에서는 null을 리턴하면 렌더링되지 않음. 특히 컴포넌트를 렌더링하고 싶지 않을 경우에는 null을 반환하면 됌.
------------------------------------------------------------------------------------------------------------------

<h3>4/13</h3>

- 클래스형 컴포넌트애서는 생성자에서 state를 정의하고, setState() 함수를 통해 state를 업데이트합니다.

- 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가 실행되도록 할 수 없었다.

- 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 바로 '훅'이다.

- 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.

- HOOK이랑 'State와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'를 의미합니다.

- useEffect는 useState와 함께 가장 많이 사용되는 HOOK입니다.

- 이 함수는 사이트 이펙트를 수행하기 위한 것입니다.
- useEffect는 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공합니다.

- 의존성 배열은 이펙트가 의존하고 있는 배열로, 배열 안에 있는 변수 중에 하나라도 값이 변경되었을 때 이펙트 함수가 실행됩니다.

- 이팩트 함수는 처음 컴포넌트가 렌더링 된 이후, 그리고 재 랜더링 이후에 실행됩니다. useEffect(이팩트 함수, 의존성 배열)

- 훅은 무조건 최상위 레벨에서만 호출해야 한다는 것입니다. 여기서 최상위 컴포넌트의 최상위 레벨을 의미합니다. 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안됩니다. 

- 훅은 리액트 함수 컴포넌트에서만 훅을 호출해야 한다는 것입니다. 따라서 일반 js 함수에서 훅을 호출하면 안됩니다. 

- 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있다. 
-------------------------------------------------------------------------------------------------------------------
<h3>4/6</h3>

- 컴포넌트 추출 : 복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 나눌 수도 있습니다.

- state는 리액트 컴포넌트의 상태를 의미합니다.

- 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미합니다.

- 정확히는 컴포넌트의 변경가능한 데이터를 의미합니다.

- state가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야합니다.

- 리액트만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐입니다.

- state는 변경이 가능하다고 했지만 직접 수정해서는 안됩니다. 불가능하다고 생각하는 것이 좋습니다.

- 생명주기는 컴포넌트의 생성 시점, 사용시점, 종료시점을 나타내는 것입니다.

- constructor가 실행되면서 컴포넌트가 생성됩니다.

- 생성 직후 conponentDidMount() 함수가 호출됩니다.

- 컴포넌트가 소멸하기 전까지 여러번 랜더링 합니다.

- 렌더링은 props, setState(), forceUpdate()에 의해 상태가 변경되면 이루어집니다.

- 그리고 렌더링이 끝나면 conponentDinUpdate() 함수가 호출됩니다.

- 마지막으로 컴포넌트가 언마운트 되면 conponentWillUnmount() 함수가 호출됩니다.
-------------------------------------------------------------------------------------------------------------------
<h3>3/30</h3>

- 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.

- 리액트 엘리먼트는 virtual DOM의 형태를 취하고 있으며, 변화하나느 부분만 갖고 있어 가볍고 자바스크립트 객체의 형태로 존재한다.

- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 JS 객체입니다. 이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있습니다.

- 컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 점에서 유사하다.

- props가 컴포넌트의 속성이다. 이 컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력된다. props는 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체이다.

- props는 읽기 전용으로 변경할 수 없다는 특징이있다. 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 된다.
-------------------------------------------------------------------------------------------------------------------
<h3>3/23</h3>

<ol>
  <h4><프로젝트 생성 방법></h4>
  <li> 바탕화면에 아무 이름으로 폴더를 하나 생성한다. </li>
  <li> 비쥬얼 스튜디오 코드에서 만든 폴더를 연다.</li>
  <li> 그 상태에서 터미널을 열어서 npx create-react-app 23-react1  라는 명령어를 입력한다. [23-react1]자리에는 만들고 싶은 폴더의 이름을 적는 것이다.</li>
  <li> 다시 폴더 열기에 들어가서 [아무 이름] -> [23-react]에 들어가서 작업을 한다.</li>
</ol>

- npx create-react-app 23-react1  =>  프로젝트 생성하는 명령어

- JSX는 내부적으로 html코드를 자바스크립트를 변환한다.

- JSX는 가독성을 높여주고, 코드가 간결해지며, 보안이 강하다는 장점이 있다.
-------------------------------------------------------------------------------------------------------------------
<h3>3/16</h3>

- 빠른 엡터이트와 렌더링 속도 이것을 가능하게 하는 것이 바로 virtual Dom이다.

- Dom이란 xml,html 문서의 각 항목을 계층으로 표현하여 생성, 변경, 삭제할 수 있도록 돕는 인터페이스이다. 

- virtual dom은 dom 조작이 비효율적인 이유로 속도가 느리기 때문에 고안된 방법이다.

- dom은 동기식, virual dom은 비동기식 방법으로 렌더링한다.

[컴포넌트 기반 구조]
- 리액트의 모든 페이지는 컴포넌트로 구성됩니다.

- 하나의 컴포넌트는 다른 여러개의 컴포넌트로 조합으로 구성할 수 있습니다.

[재사용성]
- 반복적인 작업을 줄여주기 때문에 생산성을 높여 주고, 유지보수가 용이하다.

- 재사용이 가능 하려면 해당 모듈이 의존성이 없어야 한다.

-------------------------------------------------------------------------------------------------------------------

<h3>3/9</h3>
[오늘은 깃허브에서 직접 레포지토리를 생성하지 않고 바로 비쥬얼 스튜디오 코드에서 바로 생성해서 푸쉬하는 방법에 대해서 배웠다.]

- 라이센스는 얼마나 공개 범위를 설정(?)할 것인지를 설정하는 곳이다. 

- master와 main관하여. master가 인종차별적 요소가 있어서 사용하지 않기로 했다고 한다.

- java scrpit는 자바가 유행하던 시절에 나와서 자바 스크립트가 되었다.

- 리액트는 function형을 우선시 한다.

- postfix, prefix방식이 있다. 전자는 후에 연산자가 있는 그 행의 다음 행에서 연산을 하고, 후자는 연산자가 있는 그 행에서 연산을 한다.


