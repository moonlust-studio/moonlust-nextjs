@echo off
REM 👉 Script cài môi trường phát triển cho Moonlust

echo Installing Tailwind CSS IntelliSense...
code --install-extension bradlc.vscode-tailwindcss

echo Installing ESLint...
code --install-extension dbaeumer.vscode-eslint

echo Installing Prettier...
code --install-extension esbenp.prettier-vscode

echo Installing GitLens...
code --install-extension eamodio.gitlens

echo Installing React Snippets...
code --install-extension dsznajder.es7-react-js-snippets

echo Installing Path Intellisense...
code --install-extension christian-kohler.path-intellisense

echo ✅ Tất cả tiện ích đã được cài thành công!
pause
