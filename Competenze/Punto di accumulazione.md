---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["accumulation point", "punto isolato", "intorno", "intorno bucato", "punto di accumulazione da destra"]
tags: [competenza, area/analisi]
---

# Punto di accumulazione

> Un punto è di accumulazione per un insieme se ogni suo intorno contiene punti dell'insieme diversi da lui: sono gli unici punti in cui ha senso fare un limite.

## Definizione / enunciato
**Intorni** (Morandotti, def. 1.5.20): per $x_0\in\mathbb R$ e $r>0$, intorno $I_r(x_0)=(x_0-r,x_0+r)=\{x:|x-x_0|<r\}$; intorno bucato $I_r(x_0)\setminus\{x_0\}$; intorno destro $(x_0,x_0+r)$ e sinistro $(x_0-r,x_0)$; intorni di $\pm\infty$: $(r,+\infty)$ e $(-\infty,r)$.

Sia $A\subseteq\mathbb R$ (Mazzi, def. 1.16):
1. $x\in\mathbb R$ è **punto di accumulazione** di $A$ se $\forall\rho>0\quad B_\rho(x)\cap(A\setminus\{x\})\ne\emptyset$, cioè ogni intorno di $x$ contiene punti di $A$ diversi da $x$;
2. $x\in A$ è **punto isolato** di $A$ se non è di accumulazione: $\exists B_\rho(x):\ B_\rho(x)\cap A=\{x\}$.

Varianti: punto di accumulazione **da destra/da sinistra** se ogni intorno destro/sinistro contiene punti di $A\setminus\{x\}$ (Mazzi Limiti, def. 1.3); $+\infty$ è di accumulazione per ogni insieme superiormente illimitato.

## Formule chiave
$$x\ \text{di accumulazione per }A\iff\forall\rho>0:\ (x-\rho,x+\rho)\cap(A\setminus\{x\})\neq\emptyset$$

## Intuizione
Un punto di accumulazione può essere raggiunto "dall'interno di $A$" senza mai usarlo; un punto isolato è separato dal resto dell'insieme. Se $A$ ha punti di accumulazione, contiene infiniti elementi (prop. 1.10).

## Come si usa
Prima di scrivere $\lim_{x\to\bar x}f(x)$ si verifica che $\bar x$ sia di accumulazione per il dominio. Esempi delle fonti: per $A=[0,1)$ tutti i punti di $[0,1]$ sono di accumulazione; $\mathbb N$ è fatto di punti isolati (quindi una successione ha senso solo per $n\to+\infty$); ogni reale è di accumulazione per $\mathbb Q$; $A=\{1/n\}$ ha solo punti isolati e l'unico punto di accumulazione $0$, che però non è di accumulazione da sinistra.

## Nei corsi
- **Analisi 1** (triennale): parte del programma "intorni, punti di accumulazione, punti isolati". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.5, p. 23, def. 1.16, oss. 1.2, es. 1.9); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (def. 1.2-1.3, oss. 1.2, p. 4); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 1.5.20, PDF p. 27; def. 3.1.6, PDF p. 83).

## Prerequisiti
- [[Valore assoluto]]: intorni come |x-x0|<r
- [[Operazioni sugli insiemi]]: si guarda A privato di x

## Porta a
- [[Limite di funzione]]: il limite si fa solo lì
- [[Funzione continua]]: nei punti isolati è automatica

## Collegati
- Nessuno.
