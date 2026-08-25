# Process overview

## What I built

I created an interactive browser instrument called Musical Zoo. It uses eight
animals of different sizes to represent eight musical notes. The animals are
arranged from smallest to largest: chicks, rabbit, cat, dog, sheep, lion,
elephant, and giraffe.

Users can play the notes by clicking the animals, tapping the screen, or
pressing the number keys 1–8. Each animal also reacts visually when it is
played.

## The moments that mattered

### 1. Choosing the Musical Zoo concept

Before starting, I considered several different ideas for the instrument. I
then realised that musical notes gradually rise in pitch, just as animals can
increase in size. This led me to the idea of a musical zoo, where each animal
represents a different note.

I did not ask Claude to build everything at once because too many
instructions could make the project confusing. Instead, I first asked it to
create a simple background and draw eight animals arranged by size. This
allowed me to check the overall direction before adding more features.

Because the original starter test no longer matched the new page, we
replaced it with a test that checks the zoo heading and the order of the
animals.

Evidence: [7460ca8](https://github.com/comp4020-agentic-coding-studio/comp4020-crit4-liangsiyuan41-cyber/commit/7460ca8)

### 2. Replacing the hand-drawn animals

The first animals were drawn by Claude using code. However, they did not look
realistic enough, and their styles were inconsistent. They were not what I
had imagined. I first provided one reference image that contained several
animals. I hoped Claude could use it to improve the drawings. However, it
could not accurately separate the different animals from that image, and the
result was still unsatisfactory.

I then changed my approach and prepared eight separate animal images. I asked
Claude to use these images directly and arrange them from smallest to
largest. This gave the animals a consistent illustration style and made the
page look much closer to my original idea.

Evidence: [43c9052](https://github.com/comp4020-agentic-coding-studio/comp4020-crit4-liangsiyuan41-cyber/commit/43c9052)

### 3. Adjusting animal sizes and the page layout

After the animal images were added, they initially appeared almost the same
size. I felt this did not clearly show the connection between animal size and
rising musical notes, so I asked Claude to adjust their proportions. The
first adjustment made the chicks and rabbit too small. Although the
differences between the animals became more obvious, the smaller ones were
difficult to see, and the page looked unbalanced.

I later realised that the smaller animals had been given size limits in the
original styling. This prevented them from growing beyond those limits. I
asked Claude to change those restrictions and keep the chicks and rabbit
clearly visible. Instead of shrinking the smaller animals, it needed to
enlarge the larger ones, especially the elephant and giraffe.

I had also suggested that the animals could appear in two rows on narrower
screens. Claude applied this idea when the larger animals no longer fitted
comfortably in one row. The animals now appear in two rows on narrower
screens and remain in one row on wider screens. This made the layout clearer
and more balanced.

I also asked Claude to widen the zoo entrance, add connected fences, change
the title to "MUSICAL ZOO", and place a musical note label above each
animal.

Evidence: [d6d76aa](https://github.com/comp4020-agentic-coding-studio/comp4020-crit4-liangsiyuan41-cyber/commit/d6d76aa)

### 4. Adding sound and interaction

After completing the visual design, I started adding sound. Before giving
Claude the instruction, I checked the standard names of the musical notes.
Instead of simply asking for notes numbered 1–8, I specified the eight notes
from C4 to C5. This reduced confusion and helped ensure that each animal
received the correct pitch. The sounds are generated directly in the browser
using the Web Audio API, so no prerecorded audio files are required.

In addition to mouse and touch controls, I asked for keyboard support using
the number keys 1–8. This makes it easier for users to play several notes in
sequence. Claude also added a visual response when an animal is played. This
helps users see which animal they have triggered and makes the interaction
feel more lively.

Evidence: [85ff5ab](https://github.com/comp4020-agentic-coding-studio/comp4020-crit4-liangsiyuan41-cyber/commit/85ff5ab)
