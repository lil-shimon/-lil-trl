# lil-rtl
React TDD勉強用

## テスト準備

test scriptを修正する

```
"test": "react-scripts test --env=jsdom --verbose",
```

```describe```や```it```で定義したテスト名がテスト実行時に表示されるようになる

## Renderingテスト

```shell
src/features/render/render.test.tsx
```

レンダリングしたコンポーネント中身を表示する

```js
screen.debug()
```

```js
    <body>
    <div>
        <div>
            <h1>
                React Testing Library Lesson
            </h1>
            <input
                type="text"
            />
            <button>
                click1
            </button>
            <button>
                click2
            </button>
            <p>
                Lil Shimon
            </p>
            <span>
                @React
            </span>
        </div>
    </div>
</body>
```

特定の要素があるかをテスト
```js
screen.getByRole("role name") // single
screen.getAllByRole("role name") // multiple
```

特定の文字列があるかをテスト
```js
expect("something").toHaveTextContent("check text")
```

特定の属性かチェックするテスト
```js
expect(element).toHaveAttribute("attribute name")
// e.g.
expect("button").toHaveAttribute("disabled")
```

Headerを取得・デバック

```js
screen.debug(screen.getByRole("heading"));
```

```html
<h1>
    React Testing Library Lesson
</h1>
```

存在を判定

```js
expect().toBeTruthy()
// e.g.
expect(screen.getByRole("heading")).toBeTruthy()
```

特定のTextがあるかをテスト
```js
screen.getByText("text");
```

HTMLの中に特定のTextがあるかをテスト

```js
expect(screen.getByText("text")).toBeInTheDocument()
```

特定のテキストがないかをテキスト
```queryByText```を使うことでテキストがないかを判定できる Nullを返す
```js
expect(screen.queryByText("none")).toBeNull()
```

TestIdを使用してテスト
componentに```data-testid```を指定する

```js
<span data-testid={"react"}>@React</span>
```

```getByTestId```で取得できる

```js
expect(screen.getByTestId("react")).toBeTruthy();
```

```placeholder```でも特定できる
```js
expect(screen.getByPlaceholderText("placeholder")).toBeTruthy();
```

## UserEvent テスト
```
src/features/user-event/user-event.test.tsx
```

テスト間副作用をなくすために、cleanupをする
```js
afterEach(() => cleanup())
```

Typingをさせる 
```js
import userEvent from "@testing-library/user-event";
await userEvent.type(elem, "text")
```

mock関数
```js
const mockFunc = jest.fn();
```

関数が呼ばれているかをチェック
```js
expect("function").toHaveBeenCalled()
```

関数が呼ばれていないかをチェック
```js
expect("function").not.toHaveBeenCalled()
```

1回関数が呼ばれているかをチェック
```js
expect("fucntion").toHaveBeenCalledTimes(1)
```

## Listテスト
```Role```は```listitem```
```js
screen.getAllByRole('listitem')
```

List要素のテキスト部分のみを抽出
```js
screen.getAllByRole('listitem').map(elem => elem.textContent)
```

要素が一致しているかをテスト
```js
expect("something").toEqual("something")
```

## 非同期テスト

```findByText```で非同期でテストを実行する(4秒ほど待ってくれる。それ以上はtimeout)
```js
expect(await screen.findByText("something"))
```

## APIテスト
```mock server worker```ライブラリを使う

setup server
```js
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
        // statement here
    })
)
```

in case status 200
```js
const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({username: "John"}))
    })
)
```

launch server before test
```js
beforeAll(() => server.listen())
```

reset after each test
```js
afterEach(() => server.resetHandlers())
```

after all test, close server
```js
afterAll(() => server.close())
```

modify server response (available on that scope only)
```js
server.use(
    // statement here
)
```