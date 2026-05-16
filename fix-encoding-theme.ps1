$base = "d:\Sriram\SriramAdvisory\sriram-advisory"
$files = Get-ChildItem -Recurse "$base\app","$base\components" -Include "*.tsx"

# Mojibake sequences (UTF-8 bytes misread as CP1252, re-encoded as UTF-8)
$emDash = -join([char[]]@(0x00E2, 0x20AC, 0x201D))  # â€" -> em dash
$arrow  = -join([char[]]@(0x00E2, 0x2020, 0x2019))  # â†' -> right arrow
$rupee  = -join([char[]]@(0x00E2, 0x201A, 0x00B9))  # â‚¹ -> rupee sign
$tm     = -join([char[]]@(0x00E2, 0x201E, 0x00A2))  # â„¢ -> trademark
$midDot = -join([char[]]@(0x00C2, 0x00B7))           # Â· -> middle dot
$nbsp   = -join([char[]]@(0x00C2, 0x00A0))           # Â + nbsp -> space
$strayA = [string][char]0x00C2                        # lone Â -> remove

$totalEnc = 0
$totalTheme = 0

foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, [System.Text.UTF8Encoding]::new($false))
    $before = $c

    # ── ENCODING FIXES ──────────────────────────────────────
    $c = $c.Replace($emDash, [string][char]0x2014)
    $c = $c.Replace($arrow,  [string][char]0x2192)
    $c = $c.Replace($rupee,  [string][char]0x20B9)
    $c = $c.Replace($tm,     [string][char]0x2122)
    $c = $c.Replace($midDot, [string][char]0x00B7)
    $c = $c.Replace($nbsp,   ' ')
    $c = $c.Replace($strayA, '')

    $encChanged = ($c -ne $before)

    # ── WHITE THEME - GRADIENT BACKGROUNDS ──────────────────
    $c = $c.Replace('linear-gradient(160deg, #050d1a 0%, #0a1628 60%, #0d1f3c 100%)', 'linear-gradient(160deg, #f8faff 0%, #eef3ff 60%, #e6efff 100%)')
    $c = $c.Replace('linear-gradient(160deg, #050d1a 0%, #0a1628 50%, #0d1f3c 100%)', 'linear-gradient(160deg, #f8faff 0%, #eef3ff 50%, #e6efff 100%)')
    $c = $c.Replace('linear-gradient(160deg, #080f1e 0%, #0a1628 50%, #0d1f3c 100%)', 'linear-gradient(160deg, #eef3ff 0%, #e6efff 50%, #dce8ff 100%)')
    $c = $c.Replace('radial-gradient(circle, rgba(26,79,214,0.18) 0%, transparent 65%)', 'radial-gradient(circle, rgba(26,79,214,0.07) 0%, transparent 65%)')
    $c = $c.Replace('radial-gradient(circle, rgba(26,79,214,0.15) 0%, transparent 65%)', 'radial-gradient(circle, rgba(26,79,214,0.06) 0%, transparent 65%)')
    $c = $c.Replace('radial-gradient(ellipse, rgba(26,79,214,0.12) 0%, transparent 70%)', 'radial-gradient(ellipse, rgba(26,79,214,0.05) 0%, transparent 70%)')

    # ── WHITE THEME - SECTION BACKGROUNDS ───────────────────
    $c = $c.Replace('"#050d1a"', '"#ffffff"')
    $c = $c.Replace('"#080f1e"', '"#f7f9fc"')
    $c = $c.Replace('"#040b17"', '"#f7f9fc"')

    # ── WHITE THEME - CARD / BADGE BACKGROUNDS ──────────────
    $c = $c.Replace('"rgba(255,255,255,0.03)"', '"rgba(10,22,40,0.025)"')
    $c = $c.Replace('"rgba(26,79,214,0.15)"',   '"rgba(26,79,214,0.07)"')
    $c = $c.Replace('"rgba(26,79,214,0.1)"',    '"rgba(26,79,214,0.06)"')
    $c = $c.Replace('"rgba(26,79,214,0.2)"',    '"rgba(26,79,214,0.1)"')
    $c = $c.Replace('"rgba(255,80,80,0.08)"',   '"rgba(220,50,50,0.05)"')

    # ── WHITE THEME - MUTED TEXT ─────────────────────────────
    $c = $c.Replace('"rgba(200,218,255,0.75)"', '"#4a5a7a"')
    $c = $c.Replace('"rgba(200,218,255,0.7)"',  '"#4a5a7a"')
    $c = $c.Replace('"rgba(200,218,255,0.65)"', '"#5a6a8a"')
    $c = $c.Replace('"rgba(200,218,255,0.6)"',  '"#5a6a8a"')
    $c = $c.Replace('"rgba(200,218,255,0.55)"', '"#6a7a9a"')
    $c = $c.Replace('"rgba(200,218,255,0.5)"',  '"#7a8aaa"')
    $c = $c.Replace('"rgba(200,218,255,0.35)"', '"rgba(10,22,40,0.4)"')
    $c = $c.Replace('"rgba(200,218,255,0.3)"',  '"rgba(10,22,40,0.35)"')

    # ── WHITE THEME - NAMED TEXT COLORS ─────────────────────
    $c = $c.Replace('"#f0f4ff"', '"#0a1628"')
    $c = $c.Replace('"#7eb3ff"', '"#1a4fd6"')
    $c = $c.Replace('"#5a7ab8"', '"#8a9ab8"')
    $c = $c.Replace('"#22d3a0"', '"#0d9268"')
    $c = $c.Replace('"#ff8080"', '"#dc2626"')

    # ── WHITE THEME - BORDERS / ACCENTS ─────────────────────
    $c = $c.Replace('"rgba(255,80,80,0.2)"',    '"rgba(220,50,50,0.2)"')
    $c = $c.Replace('"rgba(126,179,255,0.3)"',  '"rgba(26,79,214,0.25)"')
    $c = $c.Replace('"rgba(126,179,255,0.25)"', '"rgba(26,79,214,0.2)"')
    $c = $c.Replace('"rgba(26,79,214,0.35)"',   '"rgba(26,79,214,0.3)"')

    # ── WHITE THEME - GRID OVERLAY ───────────────────────────
    $c = $c.Replace('rgba(26,79,214,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.06) 1px', 'rgba(26,79,214,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,79,214,0.04) 1px')

    $themeChanged = ($c -ne $before -and -not $encChanged)
    if ($c -ne $before) {
        [System.IO.File]::WriteAllText($f.FullName, $c, [System.Text.UTF8Encoding]::new($false))
        if ($encChanged) { $totalEnc++ }
        else { $totalTheme++ }
        Write-Host "  FIXED: $($f.Name)"
    }
}
Write-Host ""
Write-Host "Encoding fixed: $totalEnc files"
Write-Host "Theme fixed:    $totalTheme files"
Write-Host "Total:          $($totalEnc + $totalTheme) files"
