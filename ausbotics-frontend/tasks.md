# Task: Iconsax Icon Neutralization — Parallel Multi-Agent Execution

You are the **Orchestrator Agent**. Scan the project, partition affected files into 4 batches, spawn 4 Sub-Agents in parallel.

---

## PHASE 0 — ORCHESTRATOR: Discovery & Partition

### Step 1: Find all affected files (Windows-safe — no recursive symlink traversal)

Run these TWO commands separately and merge the results. Do NOT use `grep -rl .` — it hangs on Windows by traversing node_modules symlinks even with excludes.

```bash
grep -rl "iconsax-reactjs" ./components ./app ./pages ./features ./lib ./hooks ./layouts ./sections ./containers \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  2>/dev/null | sort
```

If any of those directories don't exist, omit them — do not error. If the project structure is unknown, run discovery first:

```bash
find . -maxdepth 2 -type d | grep -v node_modules | grep -v .next | grep -v .git | grep -v dist | grep -v .turbo
```

Then rerun the grep only against the directories that exist.

### Step 2: Partition (round-robin by sort index)
- Batch A → files 1, 5, 9, 13, ...
- Batch B → files 2, 6, 10, 14, ...
- Batch C → files 3, 7, 11, 15, ...
- Batch D → files 4, 8, 12, 16, ...

### Step 3: Dispatch Sub-Agents
Pass each agent: its file list, transformation rules, and the collision contract.

---

## TRANSFORMATION RULES

### Rule 1 — Remove `variant` prop
Delete the `variant` prop entirely from every iconsax icon usage.

```tsx
// Before
<Flash size="32" color="text-primary" variant="Bold" />

// After
<Flash size="32" color="var(--icon-neutral)" />
```

### Rule 2 — Replace `color` prop value
The `color` prop MUST stay — iconsax requires it for rendering. Only replace its value.

| Current value | Replace with |
|---|---|
| `"text-primary"` | `"var(--icon-neutral)"` |
| Any hardcoded hex (`#3B82F6`, `#2563EB`, etc.) | `"var(--icon-neutral)"` |
| `"currentColor"` | `"var(--icon-neutral)"` |
| Any Tailwind class string (e.g. `"text-blue-500"`) | `"var(--icon-neutral)"` |

Do **not** add or modify any `className` on icons. Color is controlled exclusively via the `color` prop.

### Rule 3 — CSS variable (Orchestrator only — agents flag, never write)

After all agents complete, the Orchestrator adds this once to the global stylesheet (typically `globals.css` or `app/globals.css`):

```css
/* light mode */
:root {
  --icon-neutral: #6b7280; /* gray-500 */
}
/* dark mode */
.dark {
  --icon-neutral: #9ca3af; /* gray-400 */
}
```

### Rule 4 — Do NOT touch
- `size` prop
- Import statements
- Non-iconsax libraries (lucide-react, heroicons, etc.)
- Any component logic, layout, or styling unrelated to icons
- Files outside your assigned batch
- Global CSS files (flag to Orchestrator instead)

---

## SUB-AGENT CONTRACT

### Identity
You are **Sub-Agent [A/B/C/D]**. You own **only the files in your batch**. No exceptions.

### Per-file procedure
1. Read the full file
2. Identify all components imported from `iconsax-reactjs`
3. For each usage:
   - Remove `variant` prop if present
   - Set `color="var(--icon-neutral)"` replacing whatever value was there
4. Write the full modified file back — no truncation, no partial writes
5. Log changes in this format:

```
[Agent X] FILE: path/to/file.tsx
  Flash: removed variant="Bold", color → "var(--icon-neutral)"
  Clock: removed variant="Bulk", color → "var(--icon-neutral)"
```

### Collision prevention
- Never read or write files outside your batch
- If you find the global CSS file (`globals.css`, `theme.css`, `tokens.css`), flag it to the Orchestrator — do not modify it

### Completion signal
```
[Agent X] COMPLETE — N files processed, M icons updated
```

---

## PHASE 2 — ORCHESTRATOR: Verify & Finalize

After all 4 agents signal COMPLETE:

### Verification (Windows-safe commands)

```bash
# Should return zero results
grep -r "variant=" ./components ./app ./pages \
  --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" \
  2>/dev/null | grep -i "iconsax\|Bold\|Bulk\|Linear\|Outline\|TwoTone\|Broken"

# Should return zero results
grep -r 'color="text-primary"' ./components ./app ./pages \
  --include="*.tsx" --include="*.ts" 2>/dev/null

# Should return N results (all neutralized)
grep -r 'color="var(--icon-neutral)"' ./components ./app ./pages \
  --include="*.tsx" --include="*.ts" 2>/dev/null | wc -l
```

### Finalize
1. Spot-check 2 files per batch manually
2. Add `--icon-neutral` CSS variable to global stylesheet
3. Run `tsc --noEmit` — zero type errors expected (color prop is `string`, no type change)
4. Assign any missed file back to its owning agent for a fix pass

---

## SUCCESS CRITERIA
- [ ] Zero iconsax icons with `variant` prop
- [ ] Zero iconsax icons with `color="text-primary"` or hardcoded hex
- [ ] All iconsax icons have `color="var(--icon-neutral)"`
- [ ] `--icon-neutral` defined in `globals.css` for light + dark mode
- [ ] No `className` added to any icon element
- [ ] No non-iconsax code touched
- [ ] No file modified by more than one agent
- [ ] `tsc --noEmit` passes clean