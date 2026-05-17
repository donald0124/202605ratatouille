# 漢他病毒與鼠害防治 - 高質感 AI 影片生成腳本 (GPT Image 2 + Seedance 2.0)

> 💡 **秒數優化與防變形策略**：
> 為了完美配合 Seedance 2.0 的官方特性，我已將所有動作特寫鏡頭（手部操作、商品特寫）嚴格限制在 **3~5 秒** 以防變形。
> 而不需要複雜動作的氛圍空景（暗巷、粉塵、最後的空拍）則拉長至 **8~10 秒** 來營造電影感。
>
> 📍 **總原生素材長度約 105 秒（17 個 chunk）**。若要撐滿 3 分鐘，強烈建議在剪輯軟體（如 CapCut）裡運用以下手法：
>
> 1. **慢動作 (Slow-Mo)**：將 8 秒空景放慢一倍變成 16 秒，能增加質感。
> 2. **B-Roll 穿插**：將乾淨明亮的安全空景，或是暗巷的懸疑空景反覆穿插使用，填補旁白時間。
> 3. **定格停留**：對於圖表或重點畫面，讓畫面靜止停留 2-3 秒再切換。

## 🟢 第一階段：威脅與傳染 (氛圍鋪陳)

### Chunk 0：開場鋪陳 (氛圍空景 - 8 秒)

**GPT Image 2 Prompt:**

```text
Create a 4-panel storyboard for a documentary opening sequence:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Rural and suburban environment suggesting hidden danger at dusk. Maintain consistent cinematic quality across all panels.
- Each panel:
  Panel 1: (Wide shot) Dense undergrowth at the edge of a rural field, twilight, mist drifting at ground level, ominous calm.
  Panel 2: (Medium shot) Exterior of a dark, cluttered storage shed at night, a faint dim light visible through gaps.
  Panel 3: (Medium shot) Dark neglected corner inside a home, chewed cardboard box corner with visible bite marks, rat droppings scattered on floor
  Panel 4: (Extreme close-up) A fresh rat footprints pressed into dry dusty soil, single beam of light illuminating it from above.
- Character: None.
- Scene tone: Ominous, cautionary, deep shadows, cool blue-grey tones.
Output as a single image with 4 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary opening sequence. Dense undergrowth at a field edge at dusk, slow mist drifting along the ground. Very slow camera push-in, ominous and cautionary atmosphere. Duration: 8 seconds.
```

### Chunk 1：老鼠威脅 (氛圍空景 - 10 秒)

**GPT Image 2 Prompt:**

```text
Create a 5-panel storyboard for Hantavirus threat intro:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Dark urban alleyway, night time, high contrast streetlights, wet pavement. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Wide shot) Empty dark alleyway, suspenseful, no movement.
  Panel 2: (Medium shot) Rat silhouette running near a wet drain cover.
  Panel 3: (Close-up) Glowing rat eyes looking from the shadows.
  Panel 4: (Medium shot) Rat gnawing at a food package left near garbage bins.
  Panel 5: (Wide shot) The alleyway, scattered debris and droppings visible near the drain, evidence of rat activity.
- Character: None.
- Scene tone: Dark, moody, suspenseful, cool colors.
Output as a single image with 5 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality, dark urban alleyway. Rat silhouette darting across wet pavement. Slow camera push-in. Tense atmosphere, 24fps. Duration: 10 seconds.
```

### Chunk 2：隱形粉塵 (微觀慢動作 - 10 秒)

**GPT Image 2 Prompt:**

```text
Create a 5-panel storyboard for virus dust transmission:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Dusty storage room floor, cinematic macro lighting, focused single light beam. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) Dried rat droppings on the dusty floor, undisturbed.
  Panel 2: (Close-up) A foot accidentally brushing past, disturbing the droppings.
  Panel 3: (Macro shot) Droppings crumbling into microscopic floating dust particles.
  Panel 4: (Macro shot) Dust particles glowing and floating upward in the light beam.
  Panel 5: (Medium shot) The entire light beam now heavy with suspended glowing particles filling the air.
- Character: None.
- Scene tone: Suspenseful, high contrast, macro focus.
Output as a single image with 5 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality, macro shot. Dust particles slowly floating upward in a light beam. Slow camera pan up, shallow depth of field. Duration: 10 seconds.
```

### Chunk 3：發病症狀 (人物表情 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for infection symptoms:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Dimly lit living room, warm feverish lighting. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Medium shot) An Asian man sitting on a couch grabbing his head in pain.
  Panel 2: (Close-up) The man sweating heavily with a fever.
  Panel 3: (Close-up) The man's hand tightly gripping his stomach.
- Character: Asian man in his 30s, short black hair, wearing a plain grey t-shirt.
- Scene tone: Uncomfortable, warm red/orange tint.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality. Man sweating heavily, grabbing his head in pain on a couch. Slow camera push-in, uncomfortable warm lighting. Duration: 5 seconds.
```

### Chunk 3b：立即就醫 (動作特寫 + 診間空景 - 8 秒)

**GPT Image 2 Prompt:**

```text
Create a 4-panel storyboard for seeking immediate medical care:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Transitioning from home anxiety to calm clinical environment. Maintain consistent quality across all panels.
- Each panel:
  Panel 1: (Close-up) A hand urgently dialing a phone, warm dim home lighting.
  Panel 2: (Wide shot) Bright clinic exterior entrance with a welcoming open door, daytime, clean and safe.
  Panel 3: (Medium shot) A doctor in a white coat calmly consulting with a seated patient in a clean examination room.
  Panel 4: (Close-up) A doctor's hands writing a medical note on a clipboard, reassuring clinical environment, warm side lighting.
- Character: Anonymous hands, anonymous doctor and patient silhouettes.
- Scene tone: Transitioning from anxious and warm to reassuring, cool and clinical.
Output as a single image with 4 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality. Doctor in white coat consulting calmly with a patient in a bright clinic examination room. Reassuring warm lighting, slow camera pull-back. Duration: 8 seconds.
```

### Chunk 4：危機轉折 (轉場與明亮空景 - 8 秒)

**GPT Image 2 Prompt:**

```text
Create a 4-panel storyboard for transition to safety:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Hospital room transitioning to a bright clean home. Maintain consistent quality across all panels.
- Each panel:
  Panel 1: (Close-up) Medical IV drip in a hospital room, cold blue clinical lighting, blurred background.
  Panel 2: (POV shot) Pushing open a window from inside, warm bright sunlight flooding in.
  Panel 3: (Wide shot) Clean, bright modern living room, completely free of pests, sunlit.
  Panel 4: (Medium shot) A person walking confidently through a bright sunlit corridor, recovered and moving forward.
- Character: Anonymous person silhouette.
- Scene tone: From cold clinical hospital to warm, bright, hopeful sunlight.
Output as a single image with 4 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality, hopeful tone. Bright sunlight pouring into a clean modern living room. Slow camera pan right, bright lighting. Duration: 8 seconds.
```

## 🟡 第二階段：防鼠三不政策 (快速動作節奏)

### Chunk 5：不讓鼠來 - 封死洞口 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for sealing wall cracks:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Bright, clean indoor wall corner, daylight. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) A visible gap of about 3 centimeters wide at the bottom corner where the wall meets the floor, clearly large enough for a rat to squeeze through.
  Panel 2: (Close-up) Hands stuffing steel wool into the crack.
  Panel 3: (Close-up) Hands sealing the crack completely with white silicone, perfectly smooth finish.
- Character: Anonymous hands wearing neat sleeves.
- Scene tone: Bright, professional, highly detailed.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Hands sealing a wall crack with white silicone. Keep hands movement completely smooth, slow camera push-in. Duration: 5 seconds.
```

### Chunk 6：不讓鼠來 - 排水孔 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for installing drain mesh:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Clean bathroom floor tiles, bright natural lighting. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Medium shot) An open floor drain on clean tiles.
  Panel 2: (Close-up) Hands placing a fine metal mesh cover over the drain.
  Panel 3: (Close-up) The metal mesh cover perfectly fitted and locked on the floor.
- Character: Anonymous hands.
- Scene tone: Hygienic, bright, secure.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Hands placing a fine metal mesh over a clean floor drain. Keep the mesh appearance completely unchanged, camera stationary. Duration: 5 seconds.
```

### Chunk 7：不讓鼠吃 - 密封食物 (商品特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for sealing food:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Modern clean kitchen counter, wooden texture, daylight. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Medium shot) Dry cookies and pasta on the kitchen counter.
  Panel 2: (Close-up) Hands putting the food into clear glass jars.
  Panel 3: (Close-up) Hands firmly locking the lid of the glass jar.
- Character: Anonymous hands.
- Scene tone: Warm, clean kitchen lighting, premium feel.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality, warm tone. Hands locking the lid of a clear glass jar on a kitchen counter. Keep the jar completely unchanged, slow camera push-in. Duration: 5 seconds.
```

### Chunk 8：不讓鼠吃 - 垃圾加蓋 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for securing trash:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Clean kitchen corner, bright daylight. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Medium shot) A full plastic garbage bag.
  Panel 2: (Close-up) Hands tying the garbage bag tightly.
  Panel 3: (Close-up) Hands closing a solid trash can lid securely.
- Character: Anonymous hands.
- Scene tone: Clean, hygienic, organized.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Hands tightly closing a trash can lid in a clean kitchen. Slow camera pan down, clean background. Duration: 5 seconds.
```

## 🔵 第三階段：大掃除與安全清理

### Chunk 9：不讓鼠住 - 清理雜物 (大動作 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for clearing storage:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Indoor storage room, bright overhead lighting. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Wide shot) A messy corner filled with stacked cardboard boxes.
  Panel 2: (Medium shot) A person carrying away the cardboard boxes.
  Panel 3: (Wide shot) The same corner now completely empty, clean, and well-lit.
- Character: Person wearing a plain blue shirt.
- Scene tone: Transitioning from cluttered to spacious and clean.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality. Person carrying cardboard boxes out of a room. Fast motion, energetic tone, slow camera pull-out. Duration: 5 seconds.
```

### Chunk 10：發現污漬與防護 (裝備特寫 - 3 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for safety prep:
- Style: realistic cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Clean indoor room, focused lighting on hands. Maintain this scene setting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) A suspicious dirty spot on the floor.
  Panel 2: (Close-up) Hands putting on a blue medical face mask.
  Panel 3: (Close-up) Hands putting on thick yellow rubber cleaning gloves.
- Character: Anonymous person.
- Scene tone: Professional, clinical, cautious.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Hands putting on thick yellow rubber gloves. Keep gloves completely unchanged, slow camera push-in. Duration: 3 seconds.
```

### Chunk 11：稀釋漂白水消毒 (液體與噴霧 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for safe bleaching:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Light gray ceramic floor tiles, bright clinical overhead lighting. Maintain this exact floor texture and lighting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) Yellow-gloved hands holding a spray bottle.
  Panel 2: (Close-up) Spraying bleach mist heavily onto the dirty floor spot.
  Panel 3: (Close-up) Wet floor with bleach mist settling in the air.
- Character: Hands wearing yellow rubber gloves.
- Scene tone: Clinical, hygienic, sterile.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Yellow-gloved hands spraying liquid from a bottle onto the floor. Mist in the air, camera stationary. Duration: 5 seconds.
```

### Chunk 12a：安全擦拭清潔 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for safe floor wiping:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Light gray ceramic floor tiles, bright clinical overhead lighting. Maintain this exact floor texture and lighting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) Yellow-gloved hands wiping the wet floor spot thoroughly with a paper towel.
  Panel 2: (Close-up) The floor spot completely clean, paper towel heavily soiled.
  Panel 3: (Wide shot) The cleaned corner of the room, bright and spotless.
- Character: Hands wearing yellow rubber gloves.
- Scene tone: Clinical, thorough, from contaminated to perfectly clean.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Yellow-gloved hands thoroughly wiping a floor clean with paper towels. Camera stationary, bright clinical lighting. Duration: 5 seconds.
```

### Chunk 12b：廢棄物封袋 (動作特寫 - 3 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for safe waste disposal:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Light gray ceramic floor tiles, bright clinical overhead lighting. Maintain this exact floor texture and lighting unchanged across all panels.
- Each panel:
  Panel 1: (Close-up) Yellow-gloved hands placing used paper towels into a clear plastic bag.
  Panel 2: (Close-up) Hands twisting and tying the plastic bag tightly shut.
  Panel 3: (Close-up) The sealed plastic bag set aside, yellow gloves being carefully peeled off.
- Character: Hands wearing yellow rubber gloves.
- Scene tone: Clinical, hygienic, task completed.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Yellow-gloved hands sealing used paper towels into a plastic bag and tying it shut. Camera stationary. Duration: 3 seconds.
```

### Chunk 12c：通報提醒 (明亮靜態空景 - 5 秒)

> 💡 **剪輯提示**：此鏡頭作為字卡底圖使用。在 CapCut 中於此段上方疊加文字：「發現鼠跡或相關症狀，請儘速就醫」。

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for a calm public awareness moment:
- Style: clean, bright, minimal cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: A simple, clean bright interior room with natural morning light from a window. Calm and safe. Maintain this across all panels.
- Each panel:
  Panel 1: (Wide shot) A clean bright empty room, soft sunlight streaming through a window.
  Panel 2: (Medium shot) A simple landline telephone on a clean white table, warm sunlight beside it.
  Panel 3: (POV shot from inside) Looking out through an open window at a clean sunlit outdoor alleyway below, warm morning light, gentle curtain edge visible at frame border, transitioning from indoors to outdoors.
- Character: None.
- Scene tone: Calm, reassuring, minimal, warm morning light, hopeful. The final panel opens toward the outside world.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. POV from inside a bright room, slowly pushing forward toward an open window, revealing a clean sunlit alleyway outside. Warm morning light, curtain gently at frame edge, camera stationary then slow push-in. Duration: 5 seconds.
```

### Chunk 12d：結尾空拍 (氛圍空景 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 3-panel storyboard for a hopeful closing neighborhood scene:
- Style: realistic bright cinematic documentary
- Aspect ratio: 16:9 widescreen
- Scene setting: Clean, well-maintained East Asian dense residential neighborhood. Dense multi-story concrete apartment buildings (4–8 floors), narrow clean alleyway, tropical trees and potted plants along the sidewalk, rooftop water tanks visible on building tops, scooters parked neatly, warm afternoon golden light. Clearly East Asian / Taiwanese urban residential aesthetic. Maintain this setting across all panels.
- Each panel:
  Panel 1: (Wide shot) Clean narrow alleyway between dense concrete apartment buildings, tropical plants along the walls, warm golden afternoon sunlight slanting through.
  Panel 2: (Medium shot) A tidy residential sidewalk with potted plants and clean pavement, apartment building facade with laundry poles, no litter, peaceful.
  Panel 3: (Low-angle wide shot) Looking up at dense apartment buildings from street level, blue sky and a few clouds visible above the rooftops, bright and hopeful.
- Character: None.
- Scene tone: Warm, peaceful, clean, hopeful. Dense East Asian residential architecture.
Output as a single image with 3 panels separated by thin lines. No text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial quality. Clean narrow alleyway between dense East Asian concrete apartment buildings, warm afternoon golden light, very slow camera push-in toward the end of the alley. Peaceful and hopeful atmosphere. Duration: 5 seconds.
```

# 先後順序

第一步：先生 GPT Image 2（全部 17 張分鏡圖）
把所有 chunk 的 GPT Image 2 Prompt 都跑完，確認每張構圖滿意後再進 Seedance。

原因：改圖的成本是改影片的 1/10～1/50。

第二步：Seedance 生成順序（由易到難）
批次 1 — 手部特寫（最穩，先熟悉流程）
Chunk 5 → 6 → 7 → 8 → 10 → 12a → 12b

這些都是靜物/手部動作，變形機率最低。

批次 2 — 靜態空景
Chunk 0 → 4 → 12c → 12d

無人物無複雜動作，氛圍鏡頭，生成成功率高。

批次 3 — 中等難度
Chunk 3b → 9 → 3

有人物出現，但動作簡單或可接受輕微變形。

批次 4 — 最後處理高風險
Chunk 11（液體噴霧）→ 2（粉塵微觀）→ 1（老鼠移動）

這三個最容易出問題，等前面流程熟練、點數用法確認後再生。

第三步：剪輯
有滿意的素材後才進 CapCut 組裝，不要邊生邊剪。
