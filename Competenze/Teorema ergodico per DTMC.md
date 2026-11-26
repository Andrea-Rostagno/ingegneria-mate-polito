---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: ["ergodic theorem", "asymptotic reward", "ricompensa asintotica", "media temporale uguale a media spaziale", "time average equals spatial average"]
tags: [competenza, area/probabilita]
---

# Teorema ergodico per DTMC

> Per una catena irriducibile con distribuzione stazionaria, le medie temporali di una funzione dello stato convergono alla media rispetto a $\pi$.

## Definizione / enunciato
**Teorema (asymptotic reward).** Sia la DTMC irriducibile con distribuzione stazionaria $\pi$, e sia $f$ tale che $\sum_x|f(x)|\pi(x)<\infty$. Allora quasi certamente
$$\frac1n\sum_{m=1}^n f(X_m)\longrightarrow\sum_x f(x)\pi(x).$$

## Formule chiave
$$\underbrace{\frac1n\sum_{m=1}^n f(X_m)}_{\text{media temporale}}\ \to\ \underbrace{\sum_x f(x)\pi(x)}_{\text{media spaziale in regime stazionario}}.$$

## Intuizione
È una generalizzazione della legge dei grandi numeri a variabili non indipendenti. $f(i)$ è la ricompensa (o il costo) ricevuta visitando $i$. Con $f=\mathbf 1_{\{y\}}$ si ritrova la frequenza asintotica.

## Come si usa
- Taxi (lezione 9): pagamenti di 5, 10, 7 dollari nelle posizioni 1, 2, 3. Il guadagno medio per corsa è
$$\sum_x f(x)\pi(x)=\frac{5\cdot76+10\cdot51+7\cdot94}{221}=\frac{1548}{221}\approx7.00$$
(calcolo dai dati della slide).
- Vulcano (es. K di `suggested_exercises_DTMC.pdf`): $P$ con righe $(0.7,0.2,0.1)$, $(0.4,0.4,0.2)$, $(0.6,0.3,0.1)$, quindi $\pi=\big(\tfrac{48}{79},\tfrac{21}{79},\tfrac{10}{79}\big)$. Il volume medio per eruzione è $\frac{79\cdot48+316\cdot21+1580\cdot10}{79}=332\ \mathrm m^3$ (calcolo nostro).
- Es. J: profitto medio giornaliero di una macchina, con ricompense e costi per stato.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 9 ("Ergodic theorem (asymptotic reward)"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti; argomento 4 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.
- **Dinamiche su network** (magistrale): per il random walk su un grafo **connesso** (senza bisogno di aperiodicità), per ogni $f:\mathcal V\to\mathbb R$, con probabilità 1, $\frac1t\sum_{s=0}^{t-1}f(X(s))\to\sum_i\pi_if(i)$ ("time average = spatial average"). Con $f=\delta_i$: la frazione di visite in $i$ tende a $\pi_i$, quindi la centralità di distribuzione invariante è la frazione di tempo del walk nel nodo; insieme alla formula di Kac $\pi_i=1/\mathbb E_i[T_i^+]$. Uso citato: MCMC, simulare $X(t)$ per stimare $\pi$. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 9, 11, 26).

## Prerequisiti
- [[Frequenza asintotica per DTMC]]: estende a funzioni dello stato
- [[Esistenza e unicità della distribuzione stazionaria]]: media temporale uguale a media in pi

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Teorema ergodico per CTMC]]: versioni a tempo discreto e continuo
- [[Algoritmo di Metropolis-Hastings]]: giustifica le medie lungo la catena
- [[Random walk su un grafo]]: frazione di tempo del walk nei nodi (Dinamiche su network)
- [[Centralità di distribuzione invariante]]: la frazione di tempo è la centralità del nodo (Dinamiche su network)
