---
tipo: competenza
area: analisi
corsi: [Analisi 1, Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["convex function", "funzione concava", "punto di flesso", "convessità", "concavità", "inflection point", "funzione strettamente convessa", "funzione quasi-convessa", "quasi-convex function"]
tags: [competenza, area/analisi]
---

# Funzione convessa

> Una funzione è convessa se il grafico sta sotto ogni corda (e, se derivabile, sopra ogni tangente); per le derivabili due volte equivale a $f''\ge0$. I flessi sono i punti in cui cambia la concavità.

## Definizione / enunciato
**Convessità globale** (Morandotti, def. 4.3.28). $f:(a,b)\to\mathbb R$ è convessa se per ogni $\bar x_0,\bar x_1\in(a,b)$ e $t\in[0,1]$, posto $x_t=(1-t)\bar x_0+t\bar x_1$,
$$f(x_t)\le(1-t)f(\bar x_0)+tf(\bar x_1);$$
concava con la disuguaglianza invertita; strettamente con $<$.

**Convessità in un punto** (def. 4.3.21; Mazzi, dispensa manoscritta): $f$ derivabile in $x_0$ è localmente convessa in $x_0$ se in un intorno bucato il grafico sta sopra la tangente: Morandotti scrive $f(x)>f(x_0)+f'(x_0)(x-x_0)$ per ogni $x\in I_r^\circ(x_0)$ (disuguaglianza stretta, (4.48a)); la dispensa manoscritta di Mazzi distingue convessità e convessità stretta (da verificare sul PDF, OCR rumoroso). $x_0$ è un **punto di flesso** se da una parte il grafico sta sopra la tangente e dall'altra sotto.

**Criteri** (prop. 4.3.30; Mazzi, teor. 1 della dispensa): $f$ convessa ⇔ i rapporti incrementali sono crescenti; se $f$ è derivabile su un intervallo aperto: convessa ⇔ $f'$ crescente; se è derivabile due volte: $f''\ge0$ ⇔ convessa, $f''>0$ ⇒ strettamente convessa (e simmetricamente $f''\le0$ ⇔ concava).

## Formule chiave
$$f''(x)\ge0\ \forall x\in I\iff f\ \text{convessa su }I,\qquad f''(x_0)\ne0\ \Rightarrow\ x_0\ \text{non è un flesso}$$

## Intuizione
Convessa = "a forma di coppa": la pendenza cresce. In un flesso la curva attraversa la tangente. Per $f$ derivabile due volte, in un flesso $f''(x_0)=0$ (ma non basta: serve il cambio di segno o una derivata dispari non nulla).

## Come si usa
Nello studio di funzione si studia il segno di $f''$ per trovare intervalli di convessità e flessi. Esempio della lezione del 18/11/2021: $x^3$ ha un flesso in $x=0$ (ascendente). Morandotti osserva che $|x|$ è convessa secondo la definizione con le corde pur non essendo derivabile in $0$. La convessità è anche la base della disuguaglianza di Jensen (Morandotti, teor. 5.7.11).

## Nei corsi
- **Analisi 1** (triennale): "funzioni concave e convesse". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§4.3.1, def. 4.3.21, 4.3.25-4.3.28, prop. 4.3.30, PDF pp. 157-159); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Convessit_ .pdf` (manoscritto, OCR rumoroso: usato solo per l'impostazione locale/globale); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-18.pdf` (p. 1, definizione di flesso e teorema convessità/monotonia di $f'$).

- **Ricerca operativa** (triennale): definizione per $f:\mathbb R^n\to\mathbb R$ su un convesso $S$: $f(\lambda\mathbf y+(1-\lambda)\mathbf z)\le\lambda f(\mathbf y)+(1-\lambda)f(\mathbf z)$, equivalente alla convessità dell'epigrafo; $f$ concava se $-f$ è convessa. Strettamente convessa: al più un punto di minimo. **Quasi-convessa**: $f(\lambda\mathbf y+(1-\lambda)\mathbf z)\le\max\{f(\mathbf y),f(\mathbf z)\}$; i sublevel set $L_f(t)=\{f\le t\}$ di una funzione (quasi-)convessa sono convessi. Una funzione convessa è continua all'interno del dominio ma può non essere differenziabile (funzione poliedrale) né continua sulla frontiera (costo fisso $C(x)=f+cx$ per $x>0$, $C(0)=0$). Concavità in economia = economie di scala o avversione al rischio. Disuguaglianza di Jensen $f(\sum_k\lambda_k\mathbf x_k)\le\sum_k\lambda_kf(\mathbf x_k)$ e $f(\mathbb E[X])\le\mathbb E[f(X)]$. Elenco di funzioni convesse delle slide: affini, $e^{\alpha x}$, $x^\alpha$ su $\mathbb R_{++}$ per $\alpha\ge1$ o $\alpha\le0$, $|x|^p$ per $p\ge1$, $x\log x$, $x^2/y$ su $\mathbb R\times\mathbb R_{++}$, norme, LogSumExp; concave $\log x$ e la media geometrica. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 19-23); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 10-13, 28).
- **Ottimizzazione in condizione di incertezza** (magistrale): definizione via epigrafo e Jensen, criteri pratici (combinazioni coniche, massimo puntuale anche di infinite funzioni, sublevel set $\{g\le0\}$ convesso), minimo locale = globale, caratterizzazione del primo ordine $f(\mathbf z)\ge f(\mathbf x)+(\mathbf z-\mathbf x)^T\nabla f(\mathbf x)$ e sua estensione non liscia con il subgradiente. Funzioni a **valori reali estesi** ($1/x$ e $-\log x$ estese con $+\infty$ per $x\le0$; dominio effettivo; funzioni proprie). La convessità della funzione di ricorso e delle funzioni valore è la proprietà che rende possibili L-shaped e SDDP. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 9-15).

## Prerequisiti
- [[Monotonia e segno della derivata]]: convessa ⇔ f' crescente
- [[Derivata]]: posizione rispetto alla tangente

## Porta a
- [[Studio di funzione]]: concavità e flessi

## Collegati
- [[Punti di estremo locale]]: flessi da derivate di ordine dispari
- [[Disuguaglianza di Jensen condizionata]]: disuguaglianza delle funzioni convesse
- [[Insieme convesso]]: $f$ convessa se e solo se l'epigrafo è convesso (Ricerca operativa)
- [[Problema di ottimizzazione convessa]]: obiettivo convesso, minimi locali globali (Ricerca operativa)
- [[Convessità di funzioni differenziabili]]: criteri del primo e secondo ordine in $\mathbb R^n$ (Ricerca operativa)
- [[Operazioni che preservano la convessità]]: come riconoscere una funzione convessa (Ricerca operativa)
- [[Subgradiente]]: sostituto del gradiente nei punti angolosi (Ricerca operativa)
