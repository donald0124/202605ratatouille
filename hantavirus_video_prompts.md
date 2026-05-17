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
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary opening sequence revealing hidden environmental danger.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, professional film pre-visualization quality
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Desaturated cool blue-grey, deep shadows, low-key ominous atmospheric
- Lighting: Motivated ambient twilight, volumetric ground-level mist, dramatic contrast between darkness and faint light beams
- Continuity: Rural/suburban danger environment consistent across all frames, progressive tension building frame by frame

Camera language (varied, coherent sequence):
Frame 1: [WIDE ESTABLISHING SHOT] Vast rural field at dusk, dense undergrowth at edges, mist drifting at ground level, ominous stillness
Frame 2: [MEDIUM WIDE SHOT] Overgrown path leading toward a darkened storage area, tall weeds on both sides
Frame 3: [LOW-ANGLE WIDE SHOT] Ground-level view through dense grass, mist swirling, dim distant structure barely visible
Frame 4: [MEDIUM SHOT] Exterior of dark cluttered storage shed at night, faint dim glow through wall gaps
Frame 5: [OVER-THE-SHOULDER TRACKING SHOT] POV approaching the shed door, shadows deepening around the frame
Frame 6: [HIGH-ANGLE MEDIUM SHOT] Looking down into a dark neglected corner, cluttered and abandoned
Frame 7: [MEDIUM CLOSE-UP] Dark corner inside a home, chewed cardboard box with visible bite marks
Frame 8: [CLOSE-UP] Rat droppings scattered on dusty floor, single dramatic light beam from above illuminating the evidence
Frame 9: [EXTREME CLOSE-UP] Fresh rat footprints pressed into dry dusty soil, single spotlight beam from above, maximum tension

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary opening sequence. Dense undergrowth at a rural field edge at dusk, desaturated cool blue-grey color grade. Ground-level mist drifts slowly across frame from left to right. Ultra-slow dolly push-in from wide establishing shot, motivated ambient twilight with volumetric fog layers. 24mm wide cinematic lens feel, deep foreground-to-background layering with sharp foreground grass and soft distant structure. Ominous, cautionary emotional tone building in intensity. Deliberate slow pacing, near-silent oppressive atmosphere. Duration: 8 seconds.
```

---

### Chunk 1：老鼠威脅 (氛圍空景 - 10 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a Hantavirus threat documentary scene set in a dark urban alleyway at night.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, high-contrast neo-noir atmosphere
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Deep neo-noir — cold blue shadows, harsh sodium-orange street light highlights, maximum contrast between light and dark
- Lighting: Motivated streetlight sources creating dramatic pools of light against deep black shadows, wet pavement reflections doubling the light
- Continuity: Same dark wet alleyway environment throughout, rat presence revealed progressively across frames

Camera language (varied, coherent sequence):
Frame 1: [WIDE ESTABLISHING SHOT] Empty dark alleyway, wet glistening pavement, harsh overhead street light pool, dead silence
Frame 2: [MEDIUM WIDE SHOT] The alleyway — shadowy rat silhouette barely visible near a wet drain cover
Frame 3: [LOW-ANGLE TRACKING SHOT] Ground-level view along wet pavement, rat silhouette darting across the light pool
Frame 4: [CLOSE-UP] Glowing rat eyes emerging from deep shadow, intense eye-shine reflection
Frame 5: [MEDIUM CLOSE-UP] Rat silhouette pressed against the alley wall, tense stillness
Frame 6: [OVER-THE-SHOULDER PERSPECTIVE] Following the rat's movement path along the wet wall
Frame 7: [MEDIUM SHOT] Rat actively gnawing at a food package left beside a garbage bin
Frame 8: [CLOSE-UP] Rat gnawing in detail, dramatic high-contrast overhead illumination
Frame 9: [WIDE SHOT] The alleyway again — scattered debris, droppings, and disturbed packaging visible near the drain, evidence of infestation

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary quality. Dark neo-noir urban alleyway at night, wet pavement reflecting harsh sodium streetlight in pools of orange against deep blue-black shadow. Rat silhouette darting through pools of light into shadow. Ultra-slow controlled dolly push-in toward the drain, cold blue shadow tones with high-contrast orange streetlight highlights. 35mm cinematic lens feel, deep foreground-to-background depth, motivated light sources only. Tense, ominous, unsettling emotional tone. Deliberate slow pacing, 24fps cinematic frame rate. Duration: 10 seconds.
```

---

### Chunk 2：隱形粉塵 (微觀慢動作 - 10 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary macro scene visualizing invisible airborne virus dust transmission.

Cinematic requirements:
- Style: Hyper-realistic cinematic macro documentary, scientific horror atmosphere
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Deep black background, single warm amber light beam, glowing gold particles against darkness, extreme contrast
- Lighting: Single dramatic overhead light beam as sole motivated source, extreme black contrast, volumetric particle illumination making invisible danger visible
- Continuity: Same dusty storage floor, same light beam position and angle, consistent macro focus depth and particle progression

Camera language (varied, coherent sequence):
Frame 1: [MACRO CLOSE-UP] Dried rat droppings on dusty storage floor, perfectly undisturbed, single overhead light beam
Frame 2: [MEDIUM CLOSE-UP] The floor area, a shoe partially entering the frame from the lower edge
Frame 3: [CLOSE-UP] Foot accidentally brushing past the droppings, first small disturbance
Frame 4: [EXTREME CLOSE-UP MACRO] Droppings beginning to crumble at the edges, first microscopic particles lifting
Frame 5: [MACRO SLOW-MOTION CLOSE-UP] Microscopic particles separating, beginning to float upward in the beam
Frame 6: [MACRO SHOT] Dust particles glowing golden in the light beam, spiral upward motion
Frame 7: [MEDIUM MACRO] The light beam from low angle, now visibly dense with glowing floating particles
Frame 8: [WIDE MACRO SHOT] The full light beam column, heavy with suspended glowing particles filling the air
Frame 9: [LOW-ANGLE MEDIUM SHOT] Looking up through the thick particle cloud toward the light source above, invisible danger now fully visible

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary macro sequence. Dusty storage room floor, dried rat droppings disturbed by a passing foot. Extreme slow-motion macro shot — dust particles lift and glow in a single dramatic overhead amber light beam. Ultra-slow upward camera tilt following the rising particles from floor level to mid-air. Deep black background, single motivated amber-gold light source, extreme shallow depth-of-field with glowing bokeh particle glow. Ominous, scientific horror emotional tone — invisible danger becoming visible. Very slow, deliberate pacing emphasizing microscopic detail. Macro lens feel. Duration: 10 seconds.
```

---

### Chunk 3：發病症狀 (人物表情 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary drama scene depicting Hantavirus infection symptoms.

Cinematic requirements:
- Style: Hyper-realistic cinematic drama documentary
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Warm red-orange fever tones, desaturated and oppressive background, sickly tungsten-warm interior
- Lighting: Dim oppressive living room light, warm sickly tungsten highlights, heavy shadows amplifying physical and emotional distress
- Continuity: Same Asian man (30s, short black hair, plain grey t-shirt), same dimly lit living room, emotional progression from pain to total exhaustion

Camera language (varied, coherent sequence):
Frame 1: [MEDIUM WIDE SHOT] Asian man sitting alone on a couch, slumped posture, visibly unwell, room dim and oppressive
Frame 2: [MEDIUM SHOT] Man hunched forward, both hands gripping his head in pain
Frame 3: [CLOSE-UP] Man's face — heavy sweat, eyes shut tight, expression of intense pain
Frame 4: [EXTREME CLOSE-UP] Sweat droplets on forehead, skin flushed deep red with fever
Frame 5: [OVER-THE-SHOULDER CLOSE-UP] Back of the man's neck, shoulders trembling
Frame 6: [LOW-ANGLE CLOSE-UP] Looking up at the man's face, harsh overhead lamp creating oppressive top light
Frame 7: [CLOSE-UP] Man's hand gripping his stomach tightly, knuckles whitening
Frame 8: [MEDIUM CLOSE-UP] Man collapsing sideways onto the couch cushion, eyes barely open, completely exhausted
Frame 9: [WIDE SHOT] The dim living room — man alone on the couch, isolated and vulnerable, no one to help

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary drama. Asian man in his 30s, short black hair, plain grey t-shirt, collapsed on a couch in a dimly lit living room. Slow dolly push-in toward the man's sweating face, warm sickly red-orange color grade. Motivated tungsten interior lighting with heavy oppressive shadows. 85mm portrait lens feel, shallow depth-of-field isolating the subject against blurred dark background. Uncomfortable, distressing, deeply empathetic emotional tone. Slow heavy pacing. Duration: 5 seconds.
```

---

### Chunk 3b：立即就醫 (動作特寫 + 診間空景 - 8 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary scene transitioning from home emergency to clinical medical care.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Opens warm anxious amber at home, transitions to cool reassuring teal-white clinical environment by frame 9
- Lighting: Home — dim anxious warm tungsten; Clinic exterior — bright clean daylight; Clinic interior — high-key reassuring fluorescent and window light
- Continuity: Clear emotional color journey from warm anxiety to cool reassurance, progressive environmental shift home → clinic

Camera language (varied, coherent sequence):
Frame 1: [EXTREME CLOSE-UP] Hand urgently dialing a phone in dim warm home lighting, fingers tense
Frame 2: [CLOSE-UP] Phone screen lit in the dark room, anxious warm backlight from the screen
Frame 3: [MEDIUM WIDE SHOT] Bright clinic exterior entrance, open welcoming door, clean daylight — safety
Frame 4: [WIDE SHOT] Clean bright clinic reception area, calm orderly environment, cool tones
Frame 5: [MEDIUM SHOT] Doctor in white coat walking calmly through a well-lit corridor toward camera
Frame 6: [OVER-THE-SHOULDER MEDIUM SHOT] Doctor consulting with seated patient in clean examination room
Frame 7: [MEDIUM CLOSE-UP] Doctor's calm, attentive expression listening carefully to the patient
Frame 8: [CLOSE-UP] Doctor's hands writing medical notes on clipboard, soft side window light
Frame 9: [WIDE SHOT] The full examination room — calm, organized, professional, warm window light from the right

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary. Doctor in white coat consulting calmly with a patient in a bright clinic examination room. Slow camera pull-back revealing the full clean clinical environment. Cool teal-white color grade with warm motivated window light from the right. 50mm standard cinematic lens feel, balanced clinical lighting with no harsh shadows. Transitioning emotional tone: from anxious urgency to calm reassurance. Deliberate, calming, measured pacing. Duration: 8 seconds.
```

---

### Chunk 4：危機轉折 (轉場與明亮空景 - 8 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary drama scene transitioning from hospital crisis to hopeful recovery.

Cinematic requirements:
- Style: Hyper-realistic cinematic drama, warm cinematic drama style
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Opens cold blue-grey hospital tones, gradually transitions to warm golden hopeful sunlight by frame 9
- Lighting: Hospital — cold blue-grey clinical fluorescent; Window transition — burst of warm natural daylight; Recovery — golden amber cinematic warmth
- Continuity: Complete emotional arc from cold clinical isolation to warm bright hope, consistent progressive journey across all 9 frames

Camera language (varied, coherent sequence):
Frame 1: [CLOSE-UP] Medical IV drip in hospital room, cold blue clinical lighting, blurred beeping monitor in background
Frame 2: [MEDIUM CLOSE-UP] Hospital bed, figure resting beneath thin blanket, cold clinical environment
Frame 3: [HIGH-ANGLE MEDIUM SHOT] Hospital corridor from above, clinical isolation, recovery beginning
Frame 4: [POV SHOT] Hand reaching toward a window latch, cool grey interior beyond
Frame 5: [CLOSE-UP] Hands pushing open a window, first burst of warm golden sunlight flooding in
Frame 6: [WIDE SHOT] Warm golden sunlight flooding into a clean home interior, emotional release
Frame 7: [MEDIUM SHOT] Clean modern living room, completely free of hazards, sunlight streaming across the floor
Frame 8: [TRACKING MEDIUM SHOT] Person walking confidently through a bright sunlit corridor, fully recovered
Frame 9: [WIDE ESTABLISHING SHOT] Person standing at open window, golden sunlight all around, looking outward — recovered and moving forward into life

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic drama documentary. Hopeful recovery scene. Bright golden sunlight pouring through an open window into a clean modern living room. Slow camera pan right from the window to the interior space, warm golden cinematic color grade. Motivated natural sunlight as primary source, soft reflective fill from white walls. 35mm cinematic lens feel, deep warm tones with gentle lens flare. Transitioning emotional tone: relief, release, hope, recovery. Slow breathing pacing. Duration: 8 seconds.
```

---

## 🟡 第二階段：防鼠三不政策 (快速動作節奏)

### Chunk 5：不讓鼠來 - 封死洞口 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing how to seal wall cracks against pest entry.

Cinematic requirements:
- Style: Hyper-realistic bright cinematic commercial documentary, instructional professional quality
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Clean bright natural daylight white-balance, high-key with soft warm fill, crisp and professional
- Lighting: Motivated bright natural daylight from off-screen window, clean fill light, minimal shadow, product-quality illumination
- Continuity: Same bright indoor wall corner, same hands with neat sleeves throughout, task progression from problem identification to complete solution

Camera language (varied, coherent sequence):
Frame 1: [WIDE SHOT] Clean bright indoor wall corner, gap clearly visible at the floor-wall junction
Frame 2: [MEDIUM SHOT] Person crouching to examine the wall crack closely
Frame 3: [CLOSE-UP] Wall gap detail — approximately 3cm wide, clearly large enough for a rat to enter
Frame 4: [CLOSE-UP] Hands holding a bundle of steel wool, preparing to insert into the crack
Frame 5: [EXTREME CLOSE-UP] Hands stuffing steel wool tightly and completely into the crack
Frame 6: [CLOSE-UP] Steel wool fully and firmly packed into the gap, ready for sealing
Frame 7: [CLOSE-UP] Hands applying white silicone sealant from a gun over the packed steel wool
Frame 8: [EXTREME CLOSE-UP] Smooth white silicone finish being applied with even steady pressure
Frame 9: [WIDE SHOT] The wall corner — crack completely sealed, clean smooth white silicone finish, professional result

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Hands in neat sleeves sealing a wall crack — first packing steel wool then applying smooth white silicone sealant. Static camera with ultra-slow controlled push-in on the hands and the wall surface. Bright natural daylight from off-screen, high-key clean lighting with no harsh shadows. 100mm macro lens feel, tack-sharp focus on hand action, soft background bokeh. Professional, precise, methodical emotional tone. Slow deliberate pacing. Duration: 5 seconds.
```

---

### Chunk 6：不讓鼠來 - 排水孔 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing drain mesh installation to block pest entry.

Cinematic requirements:
- Style: Hyper-realistic bright cinematic commercial documentary
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Clean hygienic white-blue daylight, cool sterile tones, professional precision
- Lighting: Bright overhead natural-source lighting, clean white ceramic tile reflections, minimal shadow
- Continuity: Same clean bathroom floor tiles, same open drain, same hands throughout, task progresses from open vulnerability to secured protection

Camera language (varied, coherent sequence):
Frame 1: [WIDE SHOT] Clean white bathroom floor, open drain clearly visible in the center
Frame 2: [HIGH-ANGLE MEDIUM SHOT] Looking straight down at the open drain from directly above
Frame 3: [CLOSE-UP] Open drain detail — dark gap, potential entry point clearly shown
Frame 4: [MEDIUM SHOT] Hands entering frame from above holding a fine metal mesh cover
Frame 5: [CLOSE-UP] Hands aligning the metal mesh precisely over the drain opening
Frame 6: [EXTREME CLOSE-UP] Mesh lowering perfectly onto the drain
Frame 7: [CLOSE-UP] Hands pressing the mesh cover firmly into its locked position
Frame 8: [EXTREME CLOSE-UP] Metal mesh perfectly seated and locked on the drain, secure and clean
Frame 9: [HIGH-ANGLE WIDE SHOT] Looking straight down at the full bathroom floor — drain now fully secured with mesh, clean and protected

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Hands placing and locking a fine metal mesh cover over a clean floor drain on bright white bathroom tiles. Camera stationary, slight top-down angle. Bright clean overhead lighting, cool hygienic white-blue color grade. 100mm macro lens feel, sharp on hands and mesh surface detail. Precise, clean, protective emotional tone. Slow controlled pacing. Duration: 5 seconds.
```

---

### Chunk 7：不讓鼠吃 - 密封食物 (商品特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene about sealing food storage to prevent pest contamination.

Cinematic requirements:
- Style: Hyper-realistic warm cinematic commercial documentary, premium product quality
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Warm teal-and-orange kitchen commercial grade, golden-amber natural window light
- Lighting: Motivated warm daylight from off-screen kitchen window, soft fill, premium product lighting with warm highlights on glass jars
- Continuity: Same modern clean kitchen counter with wooden texture, consistent warm lighting and environment throughout

Camera language (varied, coherent sequence):
Frame 1: [WIDE SHOT] Modern clean kitchen counter with dry cookies and pasta laid out, warm morning light
Frame 2: [MEDIUM SHOT] The food items on the wooden counter, natural warm light catching the textures
Frame 3: [CLOSE-UP] Cookie packaging and pasta bags — inviting but exposed and vulnerable
Frame 4: [MEDIUM SHOT] Clear glass jars placed on the counter, hands approaching from frame edge
Frame 5: [CLOSE-UP] Hands gathering food items and beginning to place them into the jars
Frame 6: [CLOSE-UP] Hands carefully placing cookies into the clear glass jar, precise and methodical
Frame 7: [CLOSE-UP] Hands placing pasta into a jar, warm light catching the glass
Frame 8: [EXTREME CLOSE-UP] Hands pressing the glass jar lid firmly down with both thumbs, satisfying seal
Frame 9: [MEDIUM WIDE SHOT] The kitchen counter — all food now sealed in clear glass jars, organized and fully protected

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Hands on a clean wooden kitchen counter locking the lid of a clear glass jar filled with dry food. Ultra-slow controlled push-in toward the jar lid being pressed shut. Warm teal-and-orange color grade, golden motivated window light from off-screen. 85mm lens feel, shallow depth-of-field with warm soft bokeh behind the jar. Premium, satisfying, secure emotional tone. Deliberate slow pacing. Duration: 5 seconds.
```

---

### Chunk 8：不讓鼠吃 - 垃圾加蓋 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene about securing garbage to prevent pest access.

Cinematic requirements:
- Style: Hyper-realistic bright cinematic commercial documentary
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Clean bright kitchen daylight, organized hygienic white and neutral tones
- Lighting: Bright natural overhead kitchen lighting, clean diffuse fill, minimal shadow
- Continuity: Same clean kitchen corner, consistent bright organized environment throughout all frames

Camera language (varied, coherent sequence):
Frame 1: [WIDE SHOT] Clean kitchen corner, full black garbage bag on the floor beside the trash can
Frame 2: [MEDIUM SHOT] The garbage bag in context, hands entering frame from above
Frame 3: [CLOSE-UP] Hands gripping the top of the garbage bag firmly
Frame 4: [CLOSE-UP] Hands beginning to twist the bag top tightly closed
Frame 5: [EXTREME CLOSE-UP] Hands tying a secure knot in the garbage bag top
Frame 6: [MEDIUM SHOT] Sealed garbage bag placed beside the trash can, ready
Frame 7: [CLOSE-UP] Hands gripping both sides of the solid trash can lid
Frame 8: [CLOSE-UP] Hands pressing the lid firmly down onto the trash can with both palms
Frame 9: [WIDE SHOT] The kitchen corner — garbage properly tied and trash can securely lidded, clean and organized

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Hands tightly pressing a heavy trash can lid closed in a clean bright kitchen. Slow controlled camera pan downward following the lid as it presses shut. Bright clean daylight, organized white kitchen environment. 50mm cinematic lens feel, clean balanced exposure, sharp focus on the hands and lid. Clean, decisive, protective emotional tone. Deliberate pacing. Duration: 5 seconds.
```

---

## 🔵 第三階段：大掃除與安全清理

### Chunk 9：不讓鼠住 - 清理雜物 (大動作 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing the transformation of a cluttered pest-friendly space into a clean safe environment.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, before-and-after transformation narrative
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Opens desaturated dim cluttered tones, progressively transitions to bright clean organized environment by frame 9
- Lighting: Before — dim oppressive overhead with heavy shadows in cluttered corners; After — bright clean even overhead light revealing clean floor
- Continuity: Same indoor storage room throughout, progressive transformation from chaos to order

Camera language (varied, coherent sequence):
Frame 1: [WIDE ESTABLISHING SHOT] Messy corner filled with stacked cardboard boxes, dim oppressive overhead lighting
Frame 2: [MEDIUM SHOT] Stacked boxes against the wall, dust and disorder clearly visible
Frame 3: [CLOSE-UP] Cardboard box corner with visible rat bite marks and gnaw damage — evidence of infestation
Frame 4: [MEDIUM SHOT] Person in plain blue shirt approaching the boxes, ready to act
Frame 5: [TRACKING MEDIUM SHOT] Person carrying a heavy stack of boxes toward the exit, energetic action
Frame 6: [MEDIUM WIDE SHOT] The corner half-cleared, bright overhead light beginning to illuminate the floor
Frame 7: [HIGH-ANGLE WIDE SHOT] Looking down at the room as it progressively becomes cleaner
Frame 8: [WIDE SHOT] The corner nearly empty, bright clean floor revealed
Frame 9: [WIDE ESTABLISHING SHOT] The same corner now completely empty, clean, bright, and well-lit — transformation complete

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic documentary. Person in plain blue shirt energetically carrying cardboard boxes out of a cluttered indoor storage room. Dynamic slight-handheld tracking shot following the movement, then slow pull-back to reveal the cleared bright space. Color grade transitions from dim desaturated to clean bright. 35mm lens feel, slight handheld energy conveying urgency. Determined, purposeful, satisfying emotional tone. Active energetic then easing pacing. Duration: 5 seconds.
```

---

### Chunk 10：發現污漬與防護 (裝備特寫 - 3 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing discovery of potential contamination and safe equipment preparation.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, cautious clinical atmosphere
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Cool desaturated clinical tones, sharp focused lighting on key elements
- Lighting: Clean indoor overhead light, dramatic focused spot lighting on the suspicious spot and protective equipment
- Continuity: Same clean indoor room, progressive protective equipment preparation sequence

Camera language (varied, coherent sequence):
Frame 1: [MEDIUM WIDE SHOT] Clean indoor room, person pausing as they notice something on the floor
Frame 2: [HIGH-ANGLE CLOSE-UP] Looking down at suspicious dirty spot on the floor from above
Frame 3: [EXTREME CLOSE-UP] The suspicious floor spot in detail — potential contamination
Frame 4: [MEDIUM SHOT] Person stepping back, reaching toward protective equipment
Frame 5: [CLOSE-UP] Hands unfolding a blue medical face mask from its packaging
Frame 6: [CLOSE-UP] Hands bringing the mask up toward the face, straps looping behind the ears
Frame 7: [EXTREME CLOSE-UP] Mask fitted securely over nose and mouth, a close seal
Frame 8: [CLOSE-UP] Hands pulling on thick yellow rubber cleaning gloves, snapping them at the wrist
Frame 9: [MEDIUM SHOT] Person now fully equipped — blue mask and yellow gloves on, prepared and protected, facing the task

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Hands carefully pulling on thick yellow rubber cleaning gloves in a clean indoor room, snapping them at the wrist. Camera stationary, slow controlled push-in toward the gloves. Cool clinical color grade, sharp focused overhead lighting. 100mm macro lens feel, crisp glove surface detail. Cautious, professional, prepared emotional tone. Deliberate slow pacing. Duration: 3 seconds.
```

---

### Chunk 11：稀釋漂白水消毒 (液體與噴霧 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing the bleach disinfection procedure for contaminated surfaces.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, sterile clinical atmosphere
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Cool clinical blue-white tones, high-key sterile environment, mist particles catching the overhead light
- Lighting: Bright clinical overhead lighting, light beam catching and illuminating airborne mist particles
- Continuity: Same light gray ceramic floor tiles, same yellow-gloved hands, consistent clinical bright environment throughout

Camera language (varied, coherent sequence):
Frame 1: [WIDE SHOT] Clean clinical floor environment, contaminated spot clearly visible on the tiles
Frame 2: [MEDIUM SHOT] Yellow-gloved hands entering frame holding a white spray bottle
Frame 3: [CLOSE-UP] Yellow-gloved hands gripping the spray bottle firmly, finger on trigger
Frame 4: [CLOSE-UP] Finger pressing the spray trigger, first spray beginning
Frame 5: [EXTREME CLOSE-UP] Fine mist emerging from the nozzle in a wide cone
Frame 6: [MEDIUM CLOSE-UP] Mist settling heavily onto the floor spot, wet droplets visible
Frame 7: [WIDE SHOT] The floor area now thoroughly wet, mist still hanging in the air above
Frame 8: [CLOSE-UP] Bleach mist caught in the overhead light, visible particle cloud above the floor
Frame 9: [MEDIUM SHOT] The floor spot thoroughly saturated, yellow-gloved hands withdrawing — disinfection complete

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Yellow-gloved hands spraying a fine mist of bleach solution onto a contaminated floor spot on clean light-grey ceramic tiles. Camera stationary, slow controlled tilt down following the spray arc to the floor. Cool clinical white-blue color grade, bright overhead lighting with airborne mist catching the light. 85mm lens feel, crisp detail on gloves and mist particles. Methodical, clinical, precise emotional tone. Controlled pacing. Duration: 5 seconds.
```

---

### Chunk 12a：安全擦拭清潔 (動作特寫 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing the safe floor wiping and decontamination procedure.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, clinical clean progression
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Clinical cool white, progressively brightening and cleaner as contamination is removed
- Lighting: Bright clinical overhead lighting, consistent clean environment, reflecting off clean tiles
- Continuity: Same light gray ceramic tiles, same yellow gloves, visual contamination reducing across frames toward spotless clean

Camera language (varied, coherent sequence):
Frame 1: [MEDIUM SHOT] Yellow-gloved hands holding a folded paper towel above the wet floor spot
Frame 2: [CLOSE-UP] Yellow-gloved hands pressing the paper towel firmly onto the wet floor spot
Frame 3: [EXTREME CLOSE-UP] Paper towel wiping the floor in firm circular motion
Frame 4: [CLOSE-UP] Soiled paper towel being lifted, floor partially cleaned beneath
Frame 5: [EXTREME CLOSE-UP] Fresh paper towel making a second firm pass on the floor
Frame 6: [CLOSE-UP] Floor spot now nearly clean, paper towel heavily soiled
Frame 7: [EXTREME CLOSE-UP] Final wipe — floor completely clean, no trace remaining
Frame 8: [HIGH-ANGLE CLOSE-UP] Looking straight down at the floor area — clean, bright, spotless
Frame 9: [WIDE SHOT] The full room corner — bright, clean, and spotless, clinical hygiene achieved

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Yellow-gloved hands thoroughly wiping a floor spot clean using paper towels on light-grey ceramic tiles — progressively cleaner with each pass. Camera stationary, slight top-down angle. Bright clinical overhead lighting, cool white color grade. 100mm macro lens feel, sharp crisp detail on gloves and paper towel surface. Thorough, precise, satisfying emotional tone. Deliberate methodical pacing. Duration: 5 seconds.
```

---

### Chunk 12b：廢棄物封袋 (動作特寫 - 3 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a documentary instructional scene showing safe waste disposal and glove removal procedure.

Cinematic requirements:
- Style: Hyper-realistic cinematic documentary, clinical task completion
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Clinical cool white-blue, clean and sterile
- Lighting: Bright clinical overhead, clean reflective floor surface, consistent sterile environment
- Continuity: Same light gray ceramic floor, same yellow-gloved hands throughout, task completion sequence ending with clean safe disposal

Camera language (varied, coherent sequence):
Frame 1: [MEDIUM SHOT] Yellow-gloved hands holding soiled paper towels above an open clear plastic bag
Frame 2: [CLOSE-UP] Hands dropping used paper towels carefully into the clear plastic bag
Frame 3: [CLOSE-UP] Bag now containing waste material, hands gripping the open top
Frame 4: [CLOSE-UP] Hands twisting the bag closed at the top, tight seal
Frame 5: [EXTREME CLOSE-UP] Hands tying a tight secure knot in the plastic bag
Frame 6: [MEDIUM SHOT] Sealed bag safely set aside on the clean floor
Frame 7: [CLOSE-UP] One yellow-gloved hand carefully peeling off the other glove from the wrist
Frame 8: [EXTREME CLOSE-UP] Glove turning inside-out as it's removed — correct clinical technique
Frame 9: [MEDIUM SHOT] Both gloves removed and contained inside the sealed waste bag, hands clean, task fully and safely complete

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Yellow-gloved hands sealing used paper towels into a clear plastic bag — twisting and tying it shut, then carefully peeling off the gloves inside-out. Camera stationary, slight high-angle. Clinical bright overhead lighting, cool white color grade. 100mm lens feel, crisp glove and bag detail. Clinical, methodical, safely completed emotional tone. Slow deliberate pacing. Duration: 3 seconds.
```

---

### Chunk 12c：通報提醒 (明亮靜態空景 - 5 秒)

> 💡 **剪輯提示**：此鏡頭作為字卡底圖使用。在 CapCut 中於此段上方疊加文字：「發現鼠跡或相關症狀，請儘速就醫」。

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a calm public awareness documentary scene with warm morning light and a call-to-action mood.

Cinematic requirements:
- Style: Hyper-realistic clean minimal cinematic documentary
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Warm golden morning light, soft white-balanced interior, hopeful and safe
- Lighting: Soft natural morning sunlight from off-screen windows, gentle warm fill, minimal shadow, peaceful and reassuring
- Continuity: Same clean bright minimal interior space, consistent warm morning atmosphere, progressive opening from interior to outside world

Camera language (varied, coherent sequence):
Frame 1: [WIDE ESTABLISHING SHOT] Clean bright minimal interior room — soft morning sunlight streaming through a window
Frame 2: [MEDIUM SHOT] The room from a different angle, peaceful and perfectly organized
Frame 3: [CLOSE-UP] Window with soft white curtain, warm morning light diffusing through
Frame 4: [MEDIUM SHOT] A simple landline telephone on a clean white table, warm sunlight beside it
Frame 5: [CLOSE-UP] The telephone receiver in warm side-lighting, reassuring and always available
Frame 6: [HIGH-ANGLE MEDIUM SHOT] Looking down at the table and phone, orderly and calm
Frame 7: [POV SHOT] Standing at the window, beginning to look outward at the world
Frame 8: [MEDIUM SHOT] Open window frame, warm morning light, soft curtain gently at the edge of the frame, interior transitioning to outside
Frame 9: [WIDE POV SHOT] Looking out through the open window at a clean sunlit outdoor alleyway below, warm morning light, hopeful and open

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary. Clean bright interior room, POV slowly pushing forward toward an open window, gently revealing a clean sunlit outdoor environment below. Ultra-slow controlled dolly push-in. Warm golden morning light, soft white balanced color grade. 35mm lens feel, gentle soft-focus foreground curtain element with sharp exterior beyond. Calm, reassuring, hopeful emotional tone. Very slow contemplative pacing. Duration: 5 seconds.
```

---

### Chunk 12d：結尾空拍 (氛圍空景 - 5 秒)

**GPT Image 2 Prompt:**

```text
Create a 9-frame cinematic storyboard (3×3 grid layout: [1][2][3] / [4][5][6] / [7][8][9]) for a hopeful closing scene of a clean and well-maintained East Asian residential neighborhood.

Cinematic requirements:
- Style: Hyper-realistic bright cinematic documentary, warm golden and hopeful
- Aspect ratio: 16:9 widescreen overall
- Cinematic color grading: Warm teal-and-orange golden hour, vibrant warm sunlight, rich and hopeful
- Lighting: Motivated golden afternoon sunlight from low angle, long warm shadows, rich saturated colors, warm golden rim light on building edges
- Continuity: Same clean Taiwanese/East Asian residential neighborhood environment, consistent golden afternoon atmosphere, progressive exploration of the community

Camera language (varied, coherent sequence):
Frame 1: [WIDE ESTABLISHING SHOT] Clean narrow alleyway between dense 4–8 story concrete apartment buildings, golden afternoon sun slanting through
Frame 2: [MEDIUM WIDE SHOT] Tropical plants and potted greenery along the sidewalk, warm light on apartment facades
Frame 3: [LOW-ANGLE WIDE SHOT] Looking up at dense apartment buildings from street level, blue sky and clouds above the rooftops
Frame 4: [MEDIUM SHOT] Clean tidy sidewalk with scooters parked neatly, no litter, peaceful community
Frame 5: [TRACKING MEDIUM SHOT] Moving along the clean alleyway toward the far end, warm golden light ahead
Frame 6: [CLOSE-UP] Rooftop water tanks silhouetted against the bright sky, laundry poles in warm golden light
Frame 7: [MEDIUM WIDE SHOT] Building facade with potted plants and neatly hung laundry, warm late-afternoon light
Frame 8: [LOW-ANGLE CLOSE-UP] Looking up at a gap between buildings, narrow blue sky visible, golden rim light on building edges
Frame 9: [WIDE ESTABLISHING SHOT] The full clean neighborhood alleyway from the far end — warm, peaceful, protected, and hopeful

Every frame must display its number (1–9) clearly in the corner. Output as one image with 9 panels in 3×3 grid separated by thin black lines. No other text.
```

**Seedance 2.0 Prompt:**

```text
Cinematic commercial documentary closing sequence. Clean narrow alleyway between dense East Asian concrete apartment buildings, warm golden afternoon light slanting through at a low angle. Ultra-slow dolly push-in toward the end of the alley, warm teal-and-orange golden hour color grade. Motivated golden sunlight, long warm shadows, tropical plants and residential architecture in frame. 35mm cinematic lens feel, foreground plants softly out of focus with sharp mid-ground alleyway. Peaceful, warm, hopeful, resolved emotional tone. Slow contemplative closing pacing. Duration: 5 seconds.
```

---

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
