---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [delta-gamma hedging, delta-gamma-vega hedging, copertura delta-gamma-vega, portafoglio gamma-neutrale, gamma-neutral, vega-neutral, copertura con due opzioni]
tags: [competenza, area/finanza]
---

# Copertura delta-gamma

> Il sottostante ha gamma nulla: per neutralizzare la gamma (e la vega) servono altre opzioni, scelte risolvendo un sistema lineare; il delta si sistema per ultimo con le azioni.

## Definizione / enunciato
**Delta-gamma** (prop. c17-delta-gamma): posizione di $z_0$ derivati con greche $\Delta_0,\Gamma_0$, un secondo derivato con $\Delta_1$, $\Gamma_1\ne0$ e il sottostante; $h=(x,y,z_0,z_1)$ è delta- e gamma-neutrale se e solo se
$$z_0\Gamma_0+z_1\Gamma_1=0,\quad z_0\Delta_0+z_1\Delta_1+y=0\ \Longrightarrow\ z_1=-z_0\frac{\Gamma_0}{\Gamma_1},\quad y=-z_0\Delta_0-z_1\Delta_1 ;$$
$x$ è libera (finanziamento).

**Delta-gamma-vega** (prop. c17-delta-gamma-vega): con due opzioni
$$\begin{pmatrix}\Gamma_1&\Gamma_2\\\nu_1&\nu_2\end{pmatrix}\begin{pmatrix}z_1\\z_2\end{pmatrix}=-\begin{pmatrix}\Gamma_0\\\nu_0\end{pmatrix},\qquad y=-\Delta_0-z_1\Delta_1-z_2\Delta_2 ;$$
soluzione unica se la matrice è invertibile, altrimenti infinite o nessuna.

## Formule chiave
Ordine dei passi: prima le opzioni (gamma, vega), poi le azioni (delta), perché le azioni non cambiano gamma e vega.

## Intuizione
La copertura delta protegge da piccoli movimenti; quella delta-gamma anche dalla curvatura: il profitto/perdita per una variazione istantanea di $S$ passa da una parabola a una curva quasi piatta. Opzioni con la stessa scadenza hanno gamma e vega proporzionali: chiedere a due di esse di annullarle separatamente dà una matrice singolare (un risolutore numerico può restituire numeri enormi).

## Come si usa
Esempio del libro (es. c17-dgv): posizione corta in una call $c_1$ ($K=8$, $T=1$, $S_0=8$, $\sigma=40\%$, $r=4\%$) coperta con una call $c_3$ ($K=12$): $\Gamma_1=0.1192$, $\Gamma_3=0.0966$, $z=1.233$ call $c_3$; poi $y=0.6179-1.233\cdot0.2377=0.325$ azioni. Con una put di strike 12 al posto di $c_3$ la gamma è la stessa e cambia solo il delta. Se si impone che il delta del portafoglio resti in $[-1,1]$, cioè $-1\le-0.6179+1.233\cdot0.2377+y\le1$, si ottiene $-0.675\le y\le1.325$: si possono comprare al più 1.325 azioni.

## Nei corsi
- **Financial engineering** (magistrale): cap. 17 §§Gamma e copertura delta-gamma, Vega e copertura delta-gamma-vega; listato lst:c17-copertura; le quantità sono scritte $h=(x,y,z_1,z_2)$ ($\varphi$ è riservato al payoff). Fonti: `Libri/Financial engineering/capitoli/cap17.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/37 - lez 24 aprile a - formula Black Scholes.pdf`, `39 - 24 aprile c - esercizi delta gamma Black Scholes.pdf`.

## Prerequisiti
- [[Greche]]: gamma e vega delle opzioni
- [[Delta hedging]]: copertura al primo ordine

## Collegati
- [[Teorema di Rouché-Capelli]]: il sistema $2\times2$ in gamma e vega ha soluzione unica, infinite o nessuna
- [[Convessità di un'obbligazione]]: correzione del secondo ordine nei bond
