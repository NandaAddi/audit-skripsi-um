# Script Instalasi Otomatis Skill Audit Skripsi (Windows PowerShell)
$ErrorActionPreference = "Stop"

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host "  🎓 Installer Skill Audit Skripsi — Standar UM 2017" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

$sourceSkill = Join-Path $PSScriptRoot "skills\audit-skripsi"
if (-not (Test-Path $sourceSkill)) {
    Write-Host "❌ Error: Direktori sumber skill tidak ditemukan di $sourceSkill" -ForegroundColor Red
    exit 1
}

$userProfile = [System.Environment]::GetFolderPath([System.Environment+SpecialFolder]::UserProfile)
$targetDirs = @(
    (Join-Path $userProfile ".agents\skills\audit-skripsi"),
    (Join-Path $userProfile ".claude\skills\audit-skripsi")
)

$installedCount = 0

foreach ($target in $targetDirs) {
    try {
        $parent = Split-Path $target -Parent
        if (-not (Test-Path $parent)) {
            New-Item -ItemType Directory -Path $parent -Force | Out-Null
        }
        
        Copy-Item -Path "$sourceSkill\*" -Destination $target -Recurse -Force
        Write-Host "✅ Berhasil dipasang di: $target" -ForegroundColor Green
        $installedCount++
    } catch {
        Write-Host "⚠️ Gagal memasang di $target : $_" -ForegroundColor Yellow
    }
}

Write-Host "`n======================================================" -ForegroundColor Cyan
if ($installedCount -gt 0) {
    Write-Host "🎉 Instalasi Selesai! Skill 'audit-skripsi' siap digunakan." -ForegroundColor Green
    Write-Host "Buka Antigravity IDE atau Claude Code, lalu gunakan perintah:" -ForegroundColor White
    Write-Host "  - /audit     : Untuk mengaudit draf bab skripsi" -ForegroundColor Yellow
    Write-Host "  - /sidang    : Untuk latihan ujian sidang skripsi" -ForegroundColor Yellow
    Write-Host "  - /bimbingan : Untuk asistensi perbaikan kalimat ilmiah" -ForegroundColor Yellow
} else {
    Write-Host "❌ Gagal memasang skill ke direktori target." -ForegroundColor Red
}
Write-Host "======================================================" -ForegroundColor Cyan
