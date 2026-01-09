#!/bin/bash

# Claude Code on the Web環境でのみ実行
if [ "$CLAUDE_CODE_REMOTE" != "true" ]; then
  echo "Skipping gh installation (not in Claude Code Web environment)"
  exit 0
fi

# GitHub CLIがすでにインストールされているかチェック
if command -v gh &> /dev/null; then
  echo "GitHub CLI is already installed"
  gh --version
  exit 0
fi

echo "Installing GitHub CLI..."

# GitHub CLIのインストール（公式の推奨方法）
# https://github.com/cli/cli/blob/trunk/docs/install_linux.md
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y

# インストール確認
if command -v gh &> /dev/null; then
  echo "✓ GitHub CLI installed successfully"
  gh --version
else
  echo "✗ Failed to install GitHub CLI"
  exit 1
fi
