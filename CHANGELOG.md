# Change Log
All notable changes to the "rasberrycandy" extension will be documented in this file.

___

## raspberryCandy update - 0.0.7 - 26/10/2026

### Fixes & accessibility (all three themes)
- Fixed invalid `fontStyle: "strike"` → `strikethrough` so struck-through markdown renders correctly again
- Removed empty `"foreground": ""` rules that silently did nothing (markdown line break, strike, quote)
- Markdown fenced code blocks were nearly invisible (`#00000050`); now use a readable colour per theme — light on the dark themes, dark ink on sugarFree
- Removed a stray trailing comma so all three theme files are valid JSON

### Contrast audit & colour fixes
- Softened the neon `#00feff` / `#5d08e5` UI borders (sidebar, editor group, tabs, section headers) to translucent dividers so they no longer glow as harsh full-width lines
- raspberryCandy - Original: active tab text was invisible (cyan on near-transparent cyan) — now uses the readable lavender/ink pairing; harsh pure-red active line number softened to brand pink
- raspberryCandy - sugarFree: full light-theme repalette — the syntax tokens were still the dark-theme neons on a near-white background (mostly unreadable); every token now clears WCAG AA (4.5:1) contrast, and the pink accents were darkened to pass
- Dark themes: sidebar section header labels (OPEN EDITORS, OUTLINE, etc.) were invisible (dark text on an unpainted bar) — now use light lavender text so they're always legible
- Activity bar: the selected item now has a lavender/purple background with a dark icon fill (matching active tabs and buttons); inactive icons given an explicit light colour so they stay visible. The selected-icon colour is set via `modernActivityBarItem.activeForeground` (the modern activity bar paints the active icon from this key, not `activityBar.foreground`)
- raspberryCandy (main): switched the dark-purple surfaces (`#160021`) to the charcoal grey (`#16161d`) used by the Original theme, across the editor, sidebar, activity bar and tabs

___

## raspberryCandy update - 0.0.2 - 19/08/2019

### raspberryCandy - Updated colours!
- Color update suggestions from PR request by [LambdaScientist](https://github.com/LambdaScientist)
- Additions of more purple for an easier reading experience

### raspberryCandy || sugarFree
- Light themed version of raspberryCandy ( Still in progress so I would love to hear feedback!)

___

## [Unreleased] - 08/09/2018
- First push to GitHub 08/09/18
- raspberryCandy name coming from coffee blend at ONA cafe Marrickville.
- Addition of description into package.json
- Test files added to show different color schemes in different languages
