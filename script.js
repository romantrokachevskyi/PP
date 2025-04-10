<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2487.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
    span.s2 {font: 12.0px 'Apple Color Emoji'; font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">document.addEventListener('DOMContentLoaded', () =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const bingoCard = document.getElementById('bingo-card');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const resetButton = document.getElementById('reset-button');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const GRID_SIZE = 5; // 5x5 grid</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const totalSquares = GRID_SIZE * GRID_SIZE;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const middleSquareIndex = Math.floor(totalSquares / 2);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// --- !!! CUSTOMIZE YOUR BINGO ITEMS HERE !!! ---</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Add as many items as you want. The script will randomly pick enough for the grid.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Keep items relatively short to fit in the squares.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>const allBingoItems = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone joined the call late",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Saw a pet on camera",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone's mic was muted while talking",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Used an emoji reaction",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Learned something new",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Fixed a tricky bug",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Helped a teammate",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone shared their screen",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Finished a task early",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone mentioned coffee/tea",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Heard background noise (e.g., kids, pets, siren)",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Took a walking break",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Praised a colleague's work",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Deployed code to production",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Attended a meeting with &gt;5 people",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Found a new useful tool/library",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone said 'Can you see my screen?'",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Overcame a challenge",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Collaborated with someone from another team",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Automated a repetitive task",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Explained a complex topic simply",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Refactored some old code",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Wrote documentation",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone is wearing headphones",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Had a ' Eureka!' moment",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Asked a clarifying question",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Debugged code successfully",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Shared a useful link/resource",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Got positive feedback",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Participated in a code review",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Someone has a virtual background",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Completed all planned work",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Contributed during the retro",</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>"Drank water" // Make sure you have at least totalSquares items if not using FREE space</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// --- End of customization ---</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// Fisher-Yates (Knuth) Shuffle algorithm</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function shuffleArray(array) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let currentIndex = array.length, randomIndex;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// While there remain elements to shuffle.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>while (currentIndex !== 0) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// Pick a remaining element.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>randomIndex = Math.floor(Math.random() * currentIndex);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>currentIndex--;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// And swap it with the current element.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>[array[currentIndex], array[randomIndex]] = [</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>array[randomIndex], array[currentIndex]];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>return array;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function createBingoCard() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Clear previous card</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bingoCard.innerHTML = '';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bingoCard.style.setProperty('--grid-size', GRID_SIZE); // Update CSS variable</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Shuffle and select items</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const shuffledItems = shuffleArray([...allBingoItems]); // Use spread to avoid modifying original</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Ensure we have enough unique items for the grid (excluding potential free space)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const itemsNeeded = totalSquares;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>const selectedItems = shuffledItems.slice(0, itemsNeeded);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (selectedItems.length &lt; itemsNeeded) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>console.warn("Not enough unique items to fill the grid!");</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// Handle this case - maybe repeat items or show blanks?</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// For now, we'll proceed, potentially repeating items if the source is too small.</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>let itemIndex = 0;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>for (let i = 0; i &lt; totalSquares; i++) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>const square = document.createElement('div');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>square.classList.add('bingo-square');</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>// Check for the middle square (for standard 5x5 bingo)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>if (GRID_SIZE % 2 !== 0 &amp;&amp; i === middleSquareIndex) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>square.textContent = "FREE SPACE </span><span class="s2">✨</span><span class="s1">";</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>square.classList.add('free-space', 'marked'); // Mark free space by default</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                 </span>// Ensure we have an item before assigning</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                 </span>if (itemIndex &lt; selectedItems.length) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>square.textContent = selectedItems[itemIndex];</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>itemIndex++;</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                    </span>square.textContent = "???"; // Placeholder if not enough items</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">                </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>square.addEventListener('click', toggleMarked);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>bingoCard.appendChild(square);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function toggleMarked(event) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Don't allow un-marking the free space if it's marked by default</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>if (event.target.classList.contains('free-space')) {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">             </span>event.target.classList.toggle('marked'); // Allow toggling if needed, or disable this line</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>} else {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>event.target.classList.toggle('marked');</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Optional: Add confetti or sound effect on mark? (Adds complexity)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Optional: Check for Bingo win here? (Adds complexity)</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>function resetCard() {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>// Add a little visual feedback on reset</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>bingoCard.style.opacity = '0';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>setTimeout(() =&gt; {</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>createBingoCard();</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">            </span>bingoCard.style.opacity = '1';</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">        </span>}, 200); // Match transition time roughly</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>// --- Initialize ---</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>resetButton.addEventListener('click', resetCard);</span></p>
<p class="p1"><span class="s1"><span class="Apple-converted-space">    </span>createBingoCard(); // Create the initial card on load</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
