---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [total variation, unbounded variation, variazione illimitata, variazione totale infinita, lunghezza infinita della traiettoria]
tags: [competenza, area/probabilita]
---

# Variazione totale del moto browniano

> Le traiettorie browniane hanno q.c. variazione totale infinita su ogni intervallo: la curva, pur continua, ha lunghezza infinita.

## Definizione / enunciato
**Variazione totale.** Per $f:[a,b]\to\mathbb R$ continua a destra,
$$V=\sup\Big\{\sum_{i=1}^q|f(t_i)-f(t_{i-1})|:\ t_i\in[a,b],\ t_0<t_1<\dots<t_q\Big\}.$$
Se $V<\infty$, $f$ ha variazione limitata; altrimenti illimitata.

**Teorema.** Sia $(W_t)$ browniano unidimensionale. Le sue traiettorie ristrette a un qualunque intervallo compatto $[a,b]$ hanno q.c. variazione illimitata.

## Formule chiave
Per assurdo, se $V<\infty$:
$$Q_n=\sum_j\big(W_{t_j}-W_{t_{j-1}}\big)^2\le\max_i|W_{t_i}-W_{t_{i-1}}|\sum_j|W_{t_j}-W_{t_{j-1}}|\le V\max_i|W_{t_i}-W_{t_{i-1}}|\le V\,C\,\ell_n^\gamma,$$
usando la hölderianità di esponente $\gamma\in(0,1/2)$ sul compatto. Il membro destro tende a $0$ quando $\ell_n\to0$, mentre $Q_n\to b-a>0$ (q.c. lungo partizioni con $\sum\ell_n<\infty$): contraddizione.

## Intuizione
Una funzione a variazione limitata ha variazione quadratica nulla, perché gli incrementi piccoli al quadrato diventano trascurabili. Il browniano ha variazione quadratica positiva, quindi gli incrementi in valore assoluto, sommati, esplodono: "infinite length!", la lunghezza del cammino fra due istanti qualsiasi è infinita.

## Come si usa
All'orale (argomento 19) va esposta la catena: hölderianità $\gamma<1/2$ + variazione quadratica $=b-a$ ⇒ variazione totale infinita. Il `.tex` ricorda nella ricetta per gli esercizi: "continuità non significa variazione finita". Le slide la presentano accanto alla non derivabilità come misura di "quanto è ruvido" il cammino browniano.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 19. Fonti: `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Traiettorie e §Problemi su moto browniano, `topics_2025_26.pdf`.
- **Financial engineering** (magistrale): cor. c11-variazione-prima, quasi certamente variazione prima infinita su ogni $[0,t]$, conseguenza della variazione quadratica $t$; per la variazione prima il $\sup$ sulle partizioni è la definizione giusta. È il motivo per cui $\int X\,dW$ non si può definire come integrale di Riemann-Stieltjes e serve la costruzione di Itô. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap12.tex`.

## Prerequisiti
- [[Variazione quadratica del moto browniano]]: variazione quadratica positiva implica totale infinita
- [[Hölderianità delle traiettorie browniane]]: continuità hölderiana usata nella dimostrazione

## Porta a
- [[Integrale di Itô]]: niente integrale di Riemann-Stieltjes rispetto a $W$ (Financial engineering)
