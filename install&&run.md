要运行这个项目，你可以按照以下步骤进行操作：

## 环境准备
确保你已经安装了以下工具：
- Poetry：用于后端的包管理。如果未安装，可以使用 `pip install poetry` 进行安装。
- Yarn：用于前端的包管理。可以通过 `npm install -g yarn` 进行安装。
- Docker（可选）：如果你想使用 Docker 来运行项目。

    #### 补充说明 要将 Poetry 安装在虚拟环境（venv）下，可以按照以下步骤操作：
    1. 创建并激活虚拟环境
        首先，进入项目的后端目录，创建并激活一个新的虚拟环境：
        ```bash
        cd e:\source\ai\screenshot-to-code\backend
        python -m venv .venv
        ```
        激活虚拟环境的命令取决于你的操作系统：
        - Windows 上激活虚拟环境
            ```bash
            .venv\Scripts\activate
            ```

        - Linux 或 macOS 上激活虚拟环境
            ```bash
            source .venv/bin/activate
            ```

    2. 在虚拟环境中安装 Poetry
        激活虚拟环境后，在其中安装 Poetry：
        ```bash
        poetry config virtualenvs.create false
        ```

    3. 使用 Poetry 安装项目依赖
        在配置好 Poetry 后，你可以使用 Poetry 来安装项目的依赖：
        ```bash
        poetry install
        ```
        这将在当前激活的虚拟环境中安装项目所需的所有依赖。

    4. 验证 Poetry 安装
        安装完成后，你可以验证 Poetry 是否正确安装：
        ```bash
        poetry --version
        ```
        这将显示 Poetry 的版本信息。

## 运行后端
```bash
cd backend
echo "OPENAI_API_KEY=sk-your-key" > .env
echo "ANTHROPIC_API_KEY=your-key" > .env
poetry run uvicorn main:app --reload --port 7001
```
**补充说明：除了以上通过命令行设置API 密钥,你也可以通过前端的设置对话框来设置 API 密钥（加载前端后点击齿轮图标）。**

## 运行前端
```bash
cd frontend
yarn
yarn dev
```

## 使用 Docker 运行项目
**如果你已经安装了 Docker，可以在项目根目录下运行以下命令：**
```bash
echo "OPENAI_API_KEY=sk-your-key" > .env
docker-compose up -d --build
```
应用将在 http://localhost:5173 上运行。
**使用 Docker 运行项目需要注意的是，使用 Docker 运行时，文件更改不会触发重新构建，因此不适合开发。**

## 其他注意事项
    1.若要在不同端口上运行后端，需要更新 frontend/.env.local 中的 VITE_WS_BACKEND_URL。

    2.若不想消耗 GPT4-Vision 信用额度，可以使用模拟模式运行后端：
    MOCK=true poetry run uvicorn main:app --reload --port 7001
    
    3.运行成功后，打开 http://localhost:5173 即可使用该应用。