---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["measurable function", "funzione boreliana", "sigma-algebra generata da una funzione", "quasi ovunque", "q.o.", "almost everywhere", "convergenza quasi ovunque", "funzione trascurabile"]
tags: [competenza, area/analisi]
---

# Funzione misurabile

> Una funzione fra spazi misurabili le cui controimmagini di insiemi misurabili sono misurabili: è la classe di funzioni che si possono integrare e che in probabilità diventano variabili aleatorie.

## Definizione / enunciato
$f:(X,\mathcal A)\to(Y,\mathcal F)$ è **misurabile** se $f^{-1}(A)\in\mathcal A$ per ogni $A\in\mathcal F$, con $f^{-1}(A)=\{x\in X:f(x)\in A\}$. Se $\mathcal F=\mathcal B(Y)$ si dice **boreliana**.
**Criterio sui generatori**: se $\mathcal F=\sigma(\mathcal E)$, $f$ è misurabile $\iff f^{-1}(A)\in\mathcal A$ per ogni $A\in\mathcal E$.
$\sigma(f_i:i\in I)=\sigma(\{f_i^{-1}(A_i)\})$ è la più piccola σ-algebra che rende misurabili le $f_i$.

## Formule chiave
- Continue $\Rightarrow$ boreliane; composizione di misurabili è misurabile.
- Se $f,g$ sono misurabili lo sono $f+g$, $cf$, $fg$, $\min$, $\max$, $f^+=\max(f,0)$, $f^-=-\min(f,0)$, $|f|=f^++f^-$; e $\sup_m f_m$, $\inf_m f_m$, $\liminf_m f_m$, $\limsup_m f_m$, il limite puntuale.
- $f=0$ **q.o.** se $\mu(\{f\ne0\})=0$; $f_m\to f$ q.o. se esiste $N$ con $\mu(N)=0$ e $f_m(x)\to f(x)$ per $x\in N^c$.

## Intuizione
La misurabilità è la condizione minima per poter chiedere "quanto misura l'insieme dove $f$ sta in $A$?". Il "quasi ovunque" ignora ciò che accade su insiemi di misura nulla.

## Come si usa
La dimostrazione del criterio: $\mathcal G=\{A\in\mathcal F:f^{-1}(A)\in\mathcal A\}$ è una σ-algebra che contiene $\mathcal E$, quindi coincide con $\mathcal F$. Esempio della lezione 7: con $m$ di Lebesgue, $f_m\equiv0$ converge q.o. sia a $\mathbb 1_C$ ($C$ di Cantor, misurabile) sia a $\mathbb 1_A$ con $A\subseteq C$ non boreliano, che **non** è misurabile: il limite q.o. di misurabili può non essere misurabile se la σ-algebra non è completa.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 7; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione07(13-04-23) (3).pdf` (lezione 7, pp. 1-6 e 10-12).

## Prerequisiti
- [[Sigma-algebra]]: controimmagini misurabili
- [[Sigma-algebra di Borel]]: funzioni boreliane

## Porta a
- [[Funzione semplice]]: misurabile con immagine finita
- [[Misura immagine]]: tramite una funzione misurabile
- [[Variabile aleatoria]]: funzione misurabile su Omega

## Collegati
- Nessuno.
