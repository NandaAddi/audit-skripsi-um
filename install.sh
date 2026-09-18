#!/usr/bin/env bash
# Script Instalasi Otomatis Skill Audit Skripsi (Linux / macOS)
set -e

echo "======================================================"
echo "  🎓 Installer Skill Audit Skripsi — Standar UM 2017"
echo "======================================================"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_SKILL="$SCRIPT_DIR/skills/audit-skripsi"

if [ ! -d "$SOURCE_SKILL" ]; then
    echo "❌ Error: Direktori sumber skill tidak ditemukan di $SOURCE_SKILL"
    exit 1
fi

TARGET_DIRS=(
    "$HOME/.agents/skills/audit-skripsi"
    "$HOME/.claude/skills/audit-skripsi"
)

INSTALLED_COUNT=0

for TARGET in "${TARGET_DIRS[@]}"; do
    PARENT_DIR="$(dirname "$TARGET")"
    mkdir -p "$PARENT_DIR"
    mkdir -p "$TARGET"
    cp -r "$SOURCE_SKILL"/* "$TARGET/"
    echo "✅ Berhasil dipasang di: $TARGET"
    INSTALLED_COUNT=$((INSTALLED_COUNT + 1))
done

echo ""
echo "======================================================"
if [ $INSTALLED_COUNT -gt 0 ]; then
    echo "🎉 Instalasi Selesai! Skill 'audit-skripsi' siap digunakan."
    echo "Buka Antigravity IDE atau Claude Code, lalu gunakan perintah:"
    echo "  - /audit     : Untuk mengaudit draf bab skripsi"
    echo "  - /sidang    : Untuk latihan ujian sidang skripsi"
    echo "  - /bimbingan : Untuk asistensi perbaikan kalimat ilmiah"
else
    echo "❌ Gagal memasang skill ke direktori target."
fi
echo "======================================================"
