---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["test functions", "spazio D", "C infinito a supporto compatto", "funzione bump", "convergenza in D", "supporto di una funzione"]
tags: [competenza, area/analisi]
---

# Funzioni test

> Lo spazio $\mathcal D$ delle funzioni $C^\infty$ a supporto compatto, con una nozione di convergenza molto forte: sono le "misure" su cui agiscono le distribuzioni.

## Definizione / enunciato
Il **supporto** di $f$ è la chiusura di $\{x: f(x)\ne0\}$; $f$ è a supporto compatto se $f(x)=0$ per $|x|>R$.
**Definizione 4.7.** $\mathcal D$ è lo spazio delle funzioni di classe $C^\infty$ su $\mathbb R$ a supporto compatto.
**Convergenza in $\mathcal D$:** $\varphi_n\to\varphi$ se (i) esiste $a\ge0$ con $\varphi_n(x)=0$ per $|x|>a$ e ogni $n$; (ii) $\varphi_n^{(q)}\to\varphi^{(q)}$ uniformemente per ogni $q\in\mathbb N$. Vale $\varphi_n\to\varphi\iff\varphi_n-\varphi\to0$ (4.5).

## Formule chiave
Esempio fondamentale (funzione "bump") e sue riscalate:
$$\varphi(x)=\begin{cases}e^{-\frac1{1-x^2}} & |x|<1\\ 0 & |x|\ge1\end{cases},\qquad \varphi_r(x)=\frac{\varphi(rx)}{\int_{-\infty}^{+\infty}\varphi(rx)\,dx},\quad \int\varphi_r=1,$$
con supporto $[-1/r,1/r]$ e picco $\varphi_r(0)\to+\infty$ per $r\to+\infty$.

## Intuizione
Un segnale fisico si osserva solo "mediato" da uno strumento: le funzioni test sono questi strumenti, lisce e localizzate. Più sono regolari, più oggetti singolari (come la delta) si possono misurare.

## Come si usa
$\mathcal D$ è chiuso per combinazioni lineari, traslazioni e riscalamenti $\varphi(ax+b)$, derivazione e moltiplicazione per funzioni $C^\infty$: per esempio $\varphi_{1,3}(x-7)\sin x^2+12\varphi_{2,7}(x)e^x\in\mathcal D$. Queste chiusure rendono ben definite le operazioni sulle distribuzioni.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.3 "Lo spazio delle funzioni test". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 7-10 del PDF).
- **Equazioni alle derivate parziali** (triennale): $\mathcal D(\Omega)=C_c^\infty(\Omega)$ (2.5), in dimensione $n$. Def. 5.1.1: $\varphi_k\to\varphi$ in $\mathcal D(\Omega)$ se i supporti stanno in uno stesso compatto $K\subset\Omega$ e $D^\alpha\varphi_k\to D^\alpha\varphi$ uniformemente in $K$ per ogni multi-indice. Es. 5.1.2: $2^{-k}\varphi\to0$ in $\mathcal D$, mentre $\varphi(x/k)$ e $\varphi(x-k)$ non convergono (i supporti "scappano"). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 10, 47-48).
- **Equazioni di fisica matematica** (triennale): $\varphi\in\mathcal D(\mathbb R\times(0,+\infty))$, cioè $C^\infty$ a supporto compatto nel dominio della PDE. Il supporto compatto annulla i termini di bordo $[u\varphi]$ nell'integrazione per parti che definisce la soluzione debole del trasporto e delle leggi di conservazione; per i criteri di entropia si usano i test $\varphi\ge0$. Fonti: `triennale/ANNO 3/eq fisica matematica/14 - Lezione 08_11_23.pdf` (pp. 1-2); `triennale/ANNO 3/eq fisica matematica/19 - Lezione 21_11_23.pdf` (p. 4).

## Prerequisiti
- [[Derivata]]: funzioni di classe $C^\infty$

## Porta a
- [[Distribuzione (funzione generalizzata)]]: funzionale lineare continuo su $\mathcal D$
- [[Spazio di Schwartz]]: $\mathcal D\subset\mathcal S$
- [[Soluzione debole di una legge di conservazione]]: si testa la legge con φ ∈ D(Q) (Equazioni di fisica matematica)

## Collegati
- [[Convergenza uniforme di successioni di funzioni]]: usata nella convergenza in $\mathcal D$
- [[Lemma fondamentale del calcolo delle variazioni]]: le funzioni test separano le funzioni $L^1_{\rm loc}$ (Equazioni alle derivate parziali)
