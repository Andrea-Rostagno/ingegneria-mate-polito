---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Borel sigma-algebra", "σ-algebra di Borel", "boreliani", "insiemi boreliani", "B(R)", "Borel sets"]
tags: [competenza, area/analisi]
---

# Sigma-algebra di Borel

> La σ-algebra generata dagli aperti di uno spazio metrico; su $\mathbb R$ è generata anche da intervalli e semirette di ogni tipo.

## Definizione / enunciato
Se $X$ è uno spazio metrico, la **σ-algebra di Borel** $\mathcal B(X)$ è la σ-algebra generata dagli aperti di $X$; i suoi elementi sono i **boreliani**.

**Proposizione (lezione 2).** $\mathcal B(\mathbb R)=\sigma(\mathcal E_i)$ per $i=1,\dots,8$, con
$\mathcal E_1=\{(a,b)\}$, $\mathcal E_2=\{(a,b]\}$, $\mathcal E_3=\{[a,b)\}$, $\mathcal E_4=\{[a,b]\}$ ($a<b$), $\mathcal E_5=\{(-\infty,b)\}$, $\mathcal E_6=\{(-\infty,b]\}$, $\mathcal E_7=\{(a,+\infty)\}$, $\mathcal E_8=\{[a,+\infty)\}$.

## Formule chiave
$$A=\bigcup_{\substack{p<q,\ p,q\in\mathbb Q\\ (p,q)\subseteq A}}(p,q)\quad\text{(ogni aperto è unione numerabile di intervalli razionali)},$$
$$(a,b)=\bigcup_{m\ge1}\Big(a,b-\tfrac1m\Big],\qquad (a,b]=\bigcap_{m\ge1}\Big(a,b+\tfrac1m\Big).$$
Ogni singoletto $\{x\}$ è boreliano.

## Intuizione
Gli aperti sono troppi da descrivere uno per uno, ma la densità di $\mathbb Q$ permette di ridurli a una famiglia numerabile di intervalli; e intervalli di tipi diversi si ottengono gli uni dagli altri con unioni e intersezioni numerabili.

## Come si usa
Per provare che una funzione è misurabile basta controllare le controimmagini di un sistema di generatori: per una variabile aleatoria reale bastano gli eventi $\{X\le x\}$, perché le semirette $(-\infty,x]$ generano $\mathcal B(\mathbb R)$. È anche la σ-algebra su cui si costruisce la misura di Lebesgue.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 2; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione02(09-03-23) (2).pdf` (lezione 2, pp. 2-3; le inclusioni non dimostrate sono lasciate per esercizio).

## Prerequisiti
- [[Sigma-algebra]]: generata dagli aperti

## Porta a
- [[Misura di Lebesgue]]: definita sui boreliani
- [[Funzione misurabile]]: funzioni boreliane
- [[Funzione di ripartizione]]: le semirette generano B(R)

## Collegati
- Nessuno.
